---
title: Review Workflow
description: How discussions, issues, validation, and review statuses work together in this repo.
---

# Review Workflow

## Community flow

1. Open a Discussion for ideation or early proposals.
2. Convert approved work into a GitHub Issue.
3. Add the content using the matching template.
4. Run `npm run check`.
5. Open a PR with the matching PR template.

## What reviewers reject

- marketing-oriented content
- missing approval boundaries
- missing security or token-cost notes
- examples that do not map back to a real workflow
- submissions that cannot pass schema validation without restructuring

## Status guidance

- use `draft` when the workflow is plausible but not yet tested
- use `reviewed` when a maintainer or subject matter reviewer has checked it
- use `verified` only when the workflow has stronger evidence or repeated review
