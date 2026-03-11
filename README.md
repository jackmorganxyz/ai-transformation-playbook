# AI Augmentation Playbook

A step-by-step playbook for augmenting every employee with AI to multiply
output without multiplying headcount.

## Start

Open [docs/index.md](docs/index.md). The playbook follows six steps:

1. Understand why AI augmentation works
2. Analyse the company
3. Map each role's workflows
4. Score tasks for automation fit
5. Design the augmentation
6. Launch, measure, and expand

## Stack

- Docusaurus for the public docs site
- GitHub as the system of record
- GitHub Pages for publishing
- GitHub Actions for build, lint, and validation

## Local development

```bash
npm ci
npm start
```

## Quality checks

```bash
npm run check
```

This runs markdown linting, schema and frontmatter validation, TypeScript
checks, and the Docusaurus production build.

## Repo structure

- `docs/`: the playbook, worksheets, role guides, and agent specs
- `templates/contributions/`: schema-safe templates for new content
- `scripts/validate-content.mjs`: frontmatter and heading validation
- `.github/`: CI, issue templates, and PR templates

## Licensing

- Prose and templates: `CC BY 4.0` in [LICENSE-CONTENT](LICENSE-CONTENT)
- Code and configuration: `MIT` in [LICENSE-CODE](LICENSE-CODE)
