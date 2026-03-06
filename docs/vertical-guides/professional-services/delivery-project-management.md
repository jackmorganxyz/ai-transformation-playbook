---
title: "Professional Services: Delivery / Project Management"
description: Role guide for AI opportunities in project delivery, status management, and execution follow-through.
content_type: role-guide
review_status: reviewed
vertical: Professional services
primary_role: Delivery or project management
linked_examples:
  - /docs/agent-library/examples/professional-services-delivery-status-signal
assumptions:
  - The team uses a PSA, project tracker, or delivery board as the main operating system.
risks:
  - Client-specific exceptions can make standardized status summaries look more certain than they are.
---

# Professional Services: Delivery / Project Management

## Industry Context

Delivery leads spend time stitching project updates into status and risk views.
The drag is collection and cleanup, not judgment.

## Common Low-Value Task Clusters

- collecting fragmented project updates across tools
- converting meeting notes into status summaries
- chasing owners for stale task data
- preparing weekly risk or milestone rollups

## Recommended Agent Opportunities

- status signal aggregation with confidence flags
- risk register draft updates from project notes
- milestone exception triage for overdue work

## Constraints & Compliance Notes

- client communications still need human review
- project risk language should remain auditable
- write-backs to delivery systems should be reversible

## Role Map

| Adjacent role | Hand-off |
| --- | --- |
| Delivery lead | Approves external-facing updates |
| Consultant or workstream owner | Supplies context and exception notes |
| Account lead | Uses summaries for client communication |

## Scorecard Usage

Score collection and summarization separately from client negotiation. The
first group often fits `agent-assist` or `partial automation`. Client
commitment stays human-led.

## Linked Example Specs

- [Project status signal agent](../../agent-library/examples/professional-services-delivery-status-signal.mdx)
