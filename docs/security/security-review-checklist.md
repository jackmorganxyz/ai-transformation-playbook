---
title: Security Review Checklist
description: Reusable checklist for reviewing agent designs before launch.
---

# Security Review Checklist

Use this checklist before a pilot moves into live use.

## Data and access

- [ ] Data classes are identified.
- [ ] Sensitive inputs are minimized.
- [ ] Credentials and permissions are scoped to the narrowest workable access.
- [ ] System write-backs are explicit and reversible.

## Workflow controls

- [ ] Human approval points are documented.
- [ ] Escalation rules are documented.
- [ ] Failure modes and fallback steps are documented.
- [ ] Audit logs or review samples are retained.

## Third-party and deployment review

- [ ] Hosted versus local deployment choice is documented.
- [ ] Token retention or prompt retention rules are known.
- [ ] The workflow does not rely on unreviewed vendor defaults for critical controls.
