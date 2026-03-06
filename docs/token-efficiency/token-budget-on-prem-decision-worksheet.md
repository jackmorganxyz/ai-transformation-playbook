---
title: Token Budget And On-Prem Decision Worksheet
description: Reusable worksheet for estimating token demand and deciding whether local deployment is justified.
---

# Token Budget And On-Prem Decision Worksheet

Use this worksheet when you need to weigh hosted inference costs against a
local-first or hybrid pattern.

## Cost worksheet

| Prompt | Notes |
| --- | --- |
| Average input size |  |
| Average output size |  |
| Calls per workflow |  |
| Workflows per day |  |
| Total daily token volume |  |
| Sensitivity of data |  |
| Need for local retention or air-gap controls |  |

## Decision prompts

- Does token volume materially change unit economics?
- Does the workflow require data control that hosted inference cannot satisfy?
- Can the workflow be decomposed to reduce token load before changing deployment mode?
- Does local hardware support the latency and concurrency required?
