# AI Transformation Playbook

AI Transformation Playbook is a docs-first manual for researching workflows,
scoring tasks, and launching controlled AI pilots.

## Start

Open [docs/index.md](docs/index.md). The repo follows this path:

1. understand the framework
2. research the company
3. map workflows
4. score tasks
5. pick and design the pilot
6. review security and deployment constraints
7. launch with governance

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
