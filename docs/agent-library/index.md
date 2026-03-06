---
title: Agent Library
description: Design-spec examples and reusable patterns for common workflow shapes.
---

# Agent Library

Use this after you have a target workflow. Each page is a design spec, not a
product demo.

## Start with a pattern

| Pattern | Use when | Open |
| --- | --- | --- |
| Intake triage | inbound work needs classification and routing | [Open](reference-patterns/intake-triage-pattern.mdx) |
| Knowledge to action | a draft must stay grounded in approved knowledge | [Open](reference-patterns/knowledge-to-action-pattern.mdx) |
| Handoff and approval | a human review step needs a better package | [Open](reference-patterns/handoff-approval-pattern.mdx) |

## Then open a role example

### Professional services

| Example | Role | Best for |
| --- | --- | --- |
| [Project status signal](examples/professional-services-delivery-status-signal.mdx) | Delivery / project management | status prep, risk rollups, owner follow-up |
| [Account health brief](examples/professional-services-account-health-brief.mdx) | Client / account management | account prep, relationship watch-outs, action tracking |
| [Research monitor](examples/professional-services-research-monitor.mdx) | Analyst / research | source monitoring, cited briefs, follow-up questions |

### SaaS

| Example | Role | Best for |
| --- | --- | --- |
| [Support triage and reply draft](examples/saas-support-triage-reply-draft.mdx) | Customer support | ticket routing, grounded reply drafts, escalations |
| [Pipeline next-step](examples/saas-revops-pipeline-next-step.mdx) | RevOps / sales | CRM hygiene, next steps, stage quality checks |
| [Release follow-through](examples/saas-product-ops-release-follow-through.mdx) | Product / engineering operations | release prep, follow-up extraction, cross-team summaries |

### Ecommerce

| Example | Role | Best for |
| --- | --- | --- |
| [Returns exception triage](examples/ecommerce-returns-exception-triage.mdx) | Customer support | returns routing, policy summaries, fraud escalation |
| [Catalog quality and enrichment](examples/ecommerce-catalog-quality-enrichment.mdx) | Catalog / merchandising | QA, attribute normalization, enrichment drafts |
| [Shipment exception routing](examples/ecommerce-shipment-exception-routing.mdx) | Fulfillment / returns operations | exception routing, urgency flags, specialist hand-off |
