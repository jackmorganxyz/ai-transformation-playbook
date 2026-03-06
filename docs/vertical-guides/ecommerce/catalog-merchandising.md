---
title: "Ecommerce: Catalog / Merchandising"
description: Role guide for AI opportunities in product enrichment, catalog QA, and merchandising prep.
content_type: role-guide
review_status: reviewed
vertical: Ecommerce
primary_role: Catalog or merchandising
linked_examples:
  - /docs/agent-library/examples/ecommerce-catalog-quality-enrichment
assumptions:
  - Product feeds, taxonomy rules, and merchandising guidelines are documented.
risks:
  - Incorrect enrichment can degrade search, conversion, or compliance.
---

# Ecommerce: Catalog / Merchandising

## Industry Context

Catalog teams turn raw product data into customer-ready attributes and product
pages. The repeatable burden is cleanup and quality checks.

## Common Low-Value Task Clusters

- attribute normalization across inconsistent supplier data
- missing field detection
- first-pass title and bullet drafting from product specs
- taxonomy and content QA before publishing

## Recommended Agent Opportunities

- catalog quality checks
- product attribute enrichment
- publish-readiness summaries for merchandisers

## Constraints & Compliance Notes

- regulated claims and product facts need source traceability
- generated copy should stay within approved brand and policy boundaries
- publish actions should not happen without review

## Role Map

| Adjacent role | Hand-off |
| --- | --- |
| Merchandiser | Reviews enrichment and decides what gets published |
| Content team | Adjusts customer-facing language |
| Operations team | Fixes source data or feed issues |

## Scorecard Usage

QA and normalization often fit `partial automation`. Customer-facing copy and
promotional judgment usually stay in `agent-assist`.

## Linked Example Specs

- [Catalog quality and enrichment agent](../../agent-library/examples/ecommerce-catalog-quality-enrichment.mdx)
