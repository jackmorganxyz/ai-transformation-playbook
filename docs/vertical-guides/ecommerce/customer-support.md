---
title: "Ecommerce: Customer Support"
description: Role guide for AI opportunities in order issue triage, returns support, and policy-backed response drafting.
content_type: role-guide
review_status: reviewed
vertical: Ecommerce
primary_role: Customer support
linked_examples:
  - /docs/agent-library/examples/ecommerce-returns-exception-triage
assumptions:
  - Order, shipment, and policy data are available in support tools and commerce systems.
risks:
  - Incorrect policy handling can create direct refund loss or customer trust issues.
---

# Ecommerce: Customer Support

## Industry Context

Ecommerce support combines high volume with policy-heavy exception handling. The
largest opportunity is triage and response prep.

## Common Low-Value Task Clusters

- identifying return, refund, and shipment issue types
- summarizing order context for the next agent
- drafting policy-backed responses
- routing fraud or exception cases for specialist review

## Recommended Agent Opportunities

- returns exception triage
- response drafts tied to policy and order facts
- duplicate issue detection across channels

## Constraints & Compliance Notes

- refund and fraud actions require explicit approval boundaries
- customer promises should stay tied to current policy
- order and payment data must stay within approved systems

## Role Map

| Adjacent role | Hand-off |
| --- | --- |
| Support agent | Reviews response and approves policy action |
| Fraud or payments team | Handles sensitive exceptions |
| Fulfillment team | Resolves warehouse or shipment issues |

## Scorecard Usage

Triage and summarization often score high on automation fit. Refund decisions
and goodwill exceptions usually stay in `agent-assist`.

## Linked Example Specs

- [Returns exception triage agent](../../agent-library/examples/ecommerce-returns-exception-triage.mdx)
