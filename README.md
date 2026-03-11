# AI Augmentation Playbook

A step-by-step playbook for augmenting every employee with AI to multiply
output without multiplying headcount.

## Start

Open [docs/index.md](docs/index.md). The repo follows this path:

1. understand why AI augmentation works
2. analyse the company
3. map each role's workflows
4. score tasks for automation fit
5. pick and design the augmentation
6. review security, deployment, and cost
7. launch, measure, and expand

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
