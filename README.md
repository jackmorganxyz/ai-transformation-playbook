# AI Transformation Playbook

AI Transformation Playbook is a repo-first, Docusaurus-based documentation
project for teams and consultants designing practical AI adoption programs.

The v1 scope focuses on:

- a vendor-neutral transformation framework
- a canonical 1-5 task scoring system
- reusable worksheets and decision templates
- seed vertical guides across professional services, SaaS, and ecommerce
- a design-spec-first agent library with human review, security, and token-cost
  notes on every example

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

- `docs/`: public documentation and example specs
- `templates/contributions/`: copyable source templates for new submissions
- `scripts/validate-content.mjs`: content schema and heading validation
- `.github/workflows/`: CI and GitHub Pages publishing

## Licensing

- Prose and templates: `CC BY 4.0` in [LICENSE-CONTENT](LICENSE-CONTENT)
- Code and configuration: `MIT` in [LICENSE-CODE](LICENSE-CODE)
