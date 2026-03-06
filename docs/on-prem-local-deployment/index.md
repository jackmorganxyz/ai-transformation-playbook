---
title: On-Prem/Local Deployment
description: Design guidance for local-first and on-prem deployment decisions without prescribing a single stack.
---

# On-Prem/Local Deployment

V1 does not include stack-specific runbooks. It does include the decision
criteria that tell you whether a local-first or on-prem pattern is required.

## When local-first becomes important

- policy or contract prohibits hosted inference for a workflow
- data residency or air-gap constraints are strict
- token costs are secondary to data control
- response quality is acceptable within the local model and hardware envelope

## Output in this section

- [Local-first deployment checklist](local-first-deployment-checklist.md)
- [Token budget and on-prem decision worksheet](../token-efficiency/token-budget-on-prem-decision-worksheet.md)
