---
title: Security
description: Security and control guidance for evaluating AI workflows without turning the playbook into a stack-specific runbook.
---

# Security

V1 stays at the checklist and design-pattern level. The objective is to force
security review into the design phase rather than bolt it on at the end.

## Minimum security posture

- classify the data touched by the workflow
- define which systems can be read from and written to
- define what logs are retained and how long they live
- define the approval boundary for any external action
- define rollback or containment steps for unsafe outputs

## Output in this section

- [Security review checklist](security-review-checklist.md)
