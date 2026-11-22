# WBS & Gantt project templates

Free, ready-to-use **Work Breakdown Structure (WBS) and Gantt plan templates** as plain JSON.
Download one, open it in TreeProjectPlan - the [WBS & Gantt maker](https://treeprojectplan.com "WBS & Gantt maker - TreeProjectPlan") - and adapt it to your project
instead of starting from a blank page.

The templates are licensed under **MIT**: use them, change them and share them, privately or commercially.

> **Note:** the templates are free and open. The **TreeProjectPlan editor** that opens them is a separate,
> proprietary product. It is **free for a single user** (plans are kept locally, without cloud storage),
> and offers [paid plans](https://treeprojectplan.com/pricing.html "TreeProjectPlan pricing") with cloud storage and for teams and
> enterprises.

## Templates

| Template | Category&nbsp;&nbsp;&nbsp; | Tasks | Effort | File |
|---|---|---:|---:|---|
| CRM implementation | Software | 58 | 184 MD | [crm-implementation.json](templates/software/crm-implementation.json) |
| Stripe payment gateway integration | Software | 52 | 93.5 MD | [stripe-payment-integration.json](templates/software/stripe-payment-integration.json) |
| Small SaaS built with Claude Code ($2,940 budget) | Software | 54 | 108 MD | [saas-with-claude-code.json](templates/software/saas-with-claude-code.json) |
| Jira worktime tracking app | Software | 47 | 99 MD | [jira-worktime-plugin.json](templates/software/jira-worktime-plugin.json) |
| Hotel multi-outlet POS with fiscal printers ($32,300 hardware) | Software | 73 | 262 MD | [hotel-pos-system.json](templates/software/hotel-pos-system.json) |
| ERP with bookkeeping for US micro businesses ($12,500 budget) | Software | 55 | 158 MD | [micro-business-erp.json](templates/software/micro-business-erp.json) |
| Software project: SDLC estimate | Software | 29 | 86 MD | [sdlc-software-project.json](templates/software/sdlc-software-project.json) |
| Winter E-shop (online store launch) | E&#8209;commerce | 39 | 106 MD | [e-shop-launch.json](templates/e-commerce/e-shop-launch.json) |
| Women's fashion online store ($138,380 budget) | E&#8209;commerce | 105 | 217 MD | [womens-fashion-store.json](templates/e-commerce/womens-fashion-store.json) |
| Healthy food and vegetables online store (PrestaShop, $184,310 budget) | E&#8209;commerce | 102 | 200.5 MD | [healthy-food-store.json](templates/e-commerce/healthy-food-store.json) |
| Handmade merino wool hats and gloves store ($48,740 budget) | E&#8209;commerce | 81 | 207.5 MD | [merino-handmade-store.json](templates/e-commerce/merino-handmade-store.json) |
| Refurbished iPhone online store ($143,740 budget) | E&#8209;commerce | 81 | 147 MD | [refurbished-iphone-store.json](templates/e-commerce/refurbished-iphone-store.json) |
| Online pharmacy (US, $434,400 budget) | E&#8209;commerce | 94 | 236.5 MD | [online-pharmacy.json](templates/e-commerce/online-pharmacy.json) |

*MD = man-days. Amounts in brackets are first-year `capex` + `opex` in USD. A machine-readable list of all templates is in [catalog.json](catalog.json).*

> **Looking for business plans?** Opening plans with startup and first-year cost budgets - pizzeria,
> kebab shop, craft gelato shop, car businesses, a dental clinic, a dermatology clinic, an aesthetic
> medicine studio, a medical office building - live in the companion repository
> [Business plan templates](https://github.com/tpien/business-plan-templates "Free business plan templates with startup costs").

### Staged software projects
The six newer software templates share one shape: the top of the tree is a list of **stages (milestones)**
- M1, M2, M3 (M4 for the hotel POS) - and every stage has the same four phases: **Analysis,
Implementation, Tests, Deployment**. Each stage ends with something released and signed off, so the plan
can be sold, budgeted or stopped stage by stage. Tasks are sized on a T-shirt scale (XS 0.5, S 1, M 3,
L 5, XL 10 man-days).

- **CRM implementation** - contacts and leads (MVP), sales pipeline with quotes and email sync, then
  automation, dashboards, integrations and the full data migration.
- **Stripe payment gateway integration** - checkout and one-time payments with webhooks and 3D Secure,
  subscriptions with trials, proration and dunning, then refunds, disputes and reconciliation.
- **Small SaaS built with Claude Code** - what any small SaaS needs, planned for AI-assisted development:
  CLAUDE.md, permissions, hooks and custom commands, tests written first, human review of AI-written code,
  auth and multi-tenancy, MVP and private beta, Stripe billing, legal pages, launch. Includes 6 months of
  running costs as `opex`.
- **Jira worktime tracking app** - a Forge app for Jira Cloud: issue panel, timer and weekly timesheet,
  reports and approvals with period locking, then the paid Atlassian Marketplace release.
- **Hotel multi-outlet POS with fiscal printers** - one till system for reception, cafe, bar, restaurant,
  golf course and spa on tablets or PCs: menus and modifiers, table bills, kitchen routing, fiscal
  receipts, card terminals, shifts and Z reports, room charges, board plans (room only to all-inclusive)
  and guest folios. Hardware for 12 stations as `capex`.
- **ERP with bookkeeping for US micro businesses** - invoicing with card and ACH payments, bank feeds,
  receipt OCR, a double-entry ledger, state sales tax, 1099-NEC, Schedule C categories, financial reports,
  simple inventory and accountant access. CPA review, penetration test and legal review as `opex`.

### Online store launches with a first-year budget
Five e-commerce plans built the same way: **Analysis** (with a deep competition analysis), **Implementation**,
a **Launch period: months 1-3** with a bigger launch campaign and higher costs, and **Operation: months 4-12**.
Money is split into fixed assets (`capex`) and operating costs (`opex`); costs only, no revenue and no
reorders, payment fees or shipping that depend on sales.

- **Women's fashion online store** - promotion on Facebook, Instagram, TikTok, Pinterest and with
  micro-influencers; Meta catalog and Instagram Shopping; a hired model and make-up artist for 3 shoot days,
  a home photo studio (camera, lenses, lights, backdrops, laptop); size guide and returns handling.
- **Healthy food and vegetables online store** - a self-hosted PrestaShop store (chosen after comparing it
  with Shopify and shoper.pl) with local delivery windows and
  ZIP-code zones, sale by weight and a weekly box subscription; a small rented warehouse, glass-door refrigerators,
  a walk-in cold room, temperature alarms, insulated boxes; health department permit and a food safety plan.
- **Handmade merino wool hats and gloves** - designs, patterns and fit tests, merino yarn and home knitters
  paid per piece, fiber and care labels, a handmade marketplace and craft fairs, an autumn peak and an
  off-season plan (wholesale to boutiques, custom orders, a light-weight line).
- **Refurbished iPhone online store** - wholesale lots and consumer trade-ins, A/B/C grading, a 40-point
  test, certified data erasure, IMEI and activation lock checks, a repair bench with spare parts,
  a 12-month warranty, marketplaces, fraud and chargeback reserves.
- **Online pharmacy (US)** - state and non-resident pharmacy licenses, digital pharmacy accreditation,
  advertising certification, HIPAA program, a licensed facility with pharmaceutical refrigeration,
  a pharmacy system with e-prescribing and claims, cold-chain shipping, pharmacist-in-charge and technician.
  Regulation varies - check with a pharmacy lawyer.

### Software project: SDLC estimate
A classic software development life cycle estimate: kick-off, analysis, implementation, tests,
installation and go-live, and project management. Tasks are sized on a T-shirt scale (XS-L).

### Winter E-shop
Launching an online fashion shop in 8 stages: kick-off, analysis, legal and compliance, implementation,
tests, launch and delivery, marketing and reports. Includes WBS numbers and a scheduled timeline.

## How to use a template

1. Download the `.json` file (open it on GitHub and click **Download raw file**).
2. Open the [TreeProjectPlan editor](https://app.treeprojectplan.com "Open the WBS & Gantt editor").
3. Import the file. The tree, estimates and Gantt chart appear at once.
4. Rename, add and remove tasks, adjust estimates and dates - it is now your plan.

## File format

Every template is a `startproject-wbs` document, version 2. The tree is stored as a **flat, ordered list**
of rows; `level` says how deep a row sits (0 = top-level stage). A row's parent is the nearest row above it
with a lower level. Fields at their default value may be left out.

```json
{
  "format": "startproject-wbs",
  "version": 2,
  "name": "My project",
  "items": [
    { "id": 1, "name": "Analysis" },
    { "id": 2, "name": "Requirements workshop", "level": 1, "size": "S", "days": 1 },
    { "id": 3, "name": "Specification",          "level": 1, "size": "M", "days": 3 }
  ],
  "milestones": [ { "name": "Sign-off", "date": "2027-01-15" } ],
  "freezes":    [ { "name": "Holiday freeze", "from": "2026-12-22", "to": "2027-01-02" } ]
}
```

| Item field | Type | Default | Meaning |
|---|---|---|---|
| `id` | integer | assigned | Row identifier, unique within the file |
| `name` | string | `""` | Task or stage name |
| `level` | integer | `0` | Depth in the tree (0 = top level) |
| `size` | `XS` `S` `M` `L` `XL` | `""` | T-shirt estimate |
| `days` | number | `0` | Effort / duration in days |
| `start` | `YYYY-MM-DD` | `""` | Start date |
| `finish` | `YYYY-MM-DD` | computed | Finish date (computed from `start` + `days` unless `finishSet`) |
| `finishSet` | boolean | `false` | The finish date was set by hand |
| `progress` | 0-100 | `0` | Percent complete |
| `assignee` | string | `""` | Person responsible |
| `color` | `#rrggbb` | `""` | Bar color in the Gantt chart |
| `collapsed` | boolean | `false` | Row is collapsed in the tree view |
| `capex` | number | `0` | Fixed-asset cost as a plain amount: equipment, fit-out, furniture |
| `opex` | number | `0` | Operating outlay as a plain amount: rent, wages, permits, marketing, deposits |

**Three kinds of cost.** Labor cost is not stored: the editor computes it as `days` x the day rate set in the
app. `capex` and `opex` are money amounts that do not depend on effort, in the document's `currency`
(top-level, e.g. `"USD"`). A task's total cost is labor + `capex` + `opex`.

The editor reads `currency` and shows every amount in it. The **CapEx** and **OpEx** columns are off by
default and appear on their own in any plan that uses them, so a template needs nothing beyond the amounts
themselves - and the plan's totals at the bottom of the window add each kind up.

Parent rows do not store their own effort, dates or amounts - they are rolled up from the tasks below them.
Extra top-level keys (`about`, `total`, `rollup` on items, ...) are informational and ignored on import.

## Repository layout

```
templates/<category>/<template>.json   the templates
catalog.json                           list of all templates with metadata
scripts/check.js                       validator: format, tree structure, catalog in sync
```

## Contributing

New templates are welcome - see [CONTRIBUTING.md](CONTRIBUTING.md). Before opening a pull request run:

```
node scripts/check.js
```

## Share your template

Have a project plan others could reuse? Feel free to share it: **fork this repository**, add your template
and open a pull request. Every plan - a product launch, a construction job, a wedding, a thesis - helps
someone start faster.

## License

All templates and the validator in this repository are released under the [MIT License](LICENSE) -
free to use, modify and share, privately or commercially.

> **Note:** TreeProjectPlan (the application, a [WBS & Gantt maker](https://treeprojectplan.com "WBS & Gantt maker - TreeProjectPlan")) is proprietary software and is not covered by this license.
> It is a separate product, entirely outside this repository - no part of its code is included here.
