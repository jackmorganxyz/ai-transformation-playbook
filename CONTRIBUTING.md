# Contributing

The repo is designed for structured, reviewable content contributions.

## Before you open an issue

Use GitHub Discussions for ideation, vendor debates, and early proposals. Use
GitHub Issues only for approved, actionable work.

## Content types

- `agent-example`: a role-specific design spec in
  `docs/agent-library/examples/`
- `role-guide`: a vertical or role guide in `docs/vertical-guides/`
- `reference-pattern`: a reusable cross-industry pattern in
  `docs/agent-library/reference-patterns/`

Every submission must declare:

- `review_status`: one of `draft`, `reviewed`, or `verified`
- `assumptions`: explicit constraints or things the author had to infer
- `risks`: the highest-risk failure cases or adoption gaps

## Local workflow

1. Run `npm ci`.
2. Copy the relevant file from `templates/contributions/`.
3. Place the new file in the correct docs directory.
4. Run `npm run check`.
5. Open a PR using the matching PR template.

## Review bar

Submissions are rejected if they:

- read like marketing copy
- omit human approval boundaries
- omit security or token-cost notes
- fail to map back to a real workflow
- force maintainers to restructure the contribution to match the schema

## Licensing

Prose, docs, and templates are licensed under `CC BY 4.0`. Code, config,
workflows, and snippet examples are licensed under `MIT`.
