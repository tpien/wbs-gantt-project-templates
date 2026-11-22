#!/usr/bin/env node
/* Validates every template and keeps catalog.json honest.
   Usage: node scripts/check.js
   Exits with code 1 on the first broken file, so it can run in CI. */
"use strict";

const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const SIZES = new Set(["", "XS", "S", "M", "L", "XL", "XXL"]);
const errors = [];

function fail(file, msg) { errors.push(`${file}: ${msg}`); }

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const p = path.join(dir, e.name);
    return e.isDirectory() ? walk(p) : e.name.endsWith(".json") ? [p] : [];
  });
}

const MONEY = ["capex", "opex"];

function isLeaf(items, i) {
  const next = items[i + 1];
  return !next || (next.level || 0) <= (items[i].level || 0);
}

function stats(items) {
  const s = { rows: items.length, tasks: 0, effort: 0, capex: 0, opex: 0 };
  items.forEach((it, i) => {
    if (!isLeaf(items, i)) return;
    s.tasks++;
    s.effort += Number(it.days) || 0;
    MONEY.forEach((k) => { s[k] += Number(it[k]) || 0; });
  });
  s.effort = Math.round(s.effort * 100) / 100;
  return s;
}

function checkTemplate(abs) {
  const rel = path.relative(ROOT, abs).replace(/\\/g, "/");
  let doc;
  try { doc = JSON.parse(fs.readFileSync(abs, "utf8")); }
  catch (e) { fail(rel, `invalid JSON - ${e.message}`); return null; }

  if (doc.format !== "startproject-wbs") fail(rel, `format must be "startproject-wbs"`);
  if (doc.version !== 1 && doc.version !== 2) fail(rel, "version must be 1 or 2");
  if (!doc.name || typeof doc.name !== "string") fail(rel, "name is required");
  if (!Array.isArray(doc.items) || !doc.items.length) { fail(rel, "items must be a non-empty array"); return null; }

  let prev = -1;
  doc.items.forEach((it, i) => {
    const at = `items[${i}]`;
    const level = it.level || 0;
    if (typeof it.name !== "string" || !it.name.trim()) fail(rel, `${at} has no name`);
    if (!Number.isInteger(level) || level < 0) fail(rel, `${at} level must be an integer >= 0`);
    if (level > prev + 1) fail(rel, `${at} jumps from level ${prev} to ${level}`);
    if (it.days !== undefined && !(Number(it.days) >= 0)) fail(rel, `${at} days must be >= 0`);
    if (it.size !== undefined && !SIZES.has(it.size)) fail(rel, `${at} unknown size "${it.size}"`);
    if (it.progress !== undefined && !(it.progress >= 0 && it.progress <= 100)) fail(rel, `${at} progress must be 0-100`);
    MONEY.forEach((k) => {
      if (it[k] === undefined) return;
      if (typeof it[k] !== "number" || !(it[k] >= 0)) fail(rel, `${at} ${k} must be a number >= 0`);
      if (!isLeaf(doc.items, i)) fail(rel, `${at} ${k} on a parent row - parents are rolled up, put it on a task`);
    });
    prev = level;
  });
  if ((doc.items[0].level || 0) !== 0) fail(rel, "the first item must be at level 0");
  return { rel, doc, stats: stats(doc.items) };
}

const found = walk(path.join(ROOT, "templates")).map(checkTemplate).filter(Boolean);
const catalog = JSON.parse(fs.readFileSync(path.join(ROOT, "catalog.json"), "utf8"));
const listed = new Map(catalog.templates.map((t) => [t.file, t]));
const ids = new Set();

for (const t of catalog.templates) {
  if (ids.has(t.id)) fail("catalog.json", `duplicate id "${t.id}"`);
  ids.add(t.id);
  if (!fs.existsSync(path.join(ROOT, t.file))) fail("catalog.json", `${t.id}: file ${t.file} does not exist`);
}
for (const f of found) {
  const entry = listed.get(f.rel);
  if (!entry) { fail("catalog.json", `${f.rel} is not listed`); continue; }
  for (const k of ["rows", "tasks", "effort", ...MONEY]) {
    const expected = f.stats[k], got = entry[k] === undefined && MONEY.includes(k) ? 0 : entry[k];
    if (got !== expected) fail("catalog.json", `${entry.id}: ${k} is ${entry[k]}, the file says ${expected}`);
  }
}

if (errors.length) {
  console.error(errors.map((e) => "  x " + e).join("\n"));
  console.error(`\n${errors.length} problem(s) found.`);
  process.exit(1);
}
console.log(`OK - ${found.length} template(s), catalog in sync.`);
