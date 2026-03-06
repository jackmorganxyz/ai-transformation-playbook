---
title: "Professional Services: Analyst / Research"
description: Role guide for AI opportunities in research synthesis, monitoring, and draft insight generation.
content_type: role-guide
review_status: reviewed
vertical: Professional services
primary_role: Analyst or research
linked_examples:
  - /docs/agent-library/examples/professional-services-research-monitor
assumptions:
  - Analysts work from recurring source lists, client context, and defined research briefs.
risks:
  - Weak source handling can produce confident but misleading summaries.
---

# Professional Services: Analyst / Research

## Industry Context

Analysts spend time collecting, sorting, and synthesizing information before it
becomes client-facing insight. The manual burden is usually in monitoring and
first-pass structuring.

## Common Low-Value Task Clusters

- scanning recurring source sets for relevant updates
- extracting key facts into standardized brief formats
- tagging findings by client priority or topic
- preparing first-pass research memos for review

## Recommended Agent Opportunities

- source monitoring with relevance scoring
- evidence-backed brief drafting
- quote and citation extraction for analyst review

## Constraints & Compliance Notes

- source provenance must remain visible
- analysts need to review claims before publication
- confidential client hypotheses should not leak into shared prompts

## Role Map

| Adjacent role | Hand-off |
| --- | --- |
| Engagement lead | Sets the research question and final recommendation |
| Analyst | Reviews evidence quality and edits the brief |
| Account team | Consumes outputs for client communication |

## Scorecard Usage

Monitoring and first-pass synthesis often have strong automation fit if source
access is structured. Final interpretation and recommendation writing generally
stay in `agent-assist`.

## Linked Example Specs

- [Research monitor agent](../../agent-library/examples/professional-services-research-monitor.mdx)
