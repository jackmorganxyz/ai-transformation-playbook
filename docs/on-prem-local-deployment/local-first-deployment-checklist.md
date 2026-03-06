---
title: Local-First Deployment Checklist
description: Checklist for deciding whether a workflow should stay local, hybrid, or hosted.
---

# Local-First Deployment Checklist

Use this when a team is considering local-first deployment.

## Decision prompts

- [ ] The workflow touches data that cannot leave a local or controlled network.
- [ ] The task still performs acceptably on the local model class being considered.
- [ ] Local hardware can handle the expected concurrency and latency.
- [ ] Operators can support updates, observability, and rollback on the chosen platform.
- [ ] The workflow still has clear approval boundaries and audit coverage.

## Result

If more than one box remains unchecked, default to `hybrid` or `hosted`.
