# Contributing a template

1. Build the plan in the [TreeProjectPlan editor](https://app.treeprojectplan.com) and export it as JSON,
   or write the file by hand following the format in the [README](README.md#file-format).
2. Save it as `templates/<category>/<kebab-case-name>.json`. Use an existing category when one fits
   (`software`, `e-commerce`, ...) or add a new folder.
3. Add an entry to [catalog.json](catalog.json) (`id` = file name without `.json`).
4. Add a row to the **Templates** table and a short description in the README.
5. Run `node scripts/check.js` - it validates the file and checks that `rows`, `tasks` and `effort`
   in the catalog match the template.

Guidelines:

- Names in English, short and action-oriented ("Choose a hosting provider", not "Hosting").
- Every leaf task has an estimate (`days`, optionally `size`).
- No personal data, client names or confidential information.
- By contributing you agree that your template is released under the [MIT License](LICENSE).
