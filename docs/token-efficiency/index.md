---
title: Token Efficiency
description: Treat token cost as a design variable, not a cleanup task after launch.
---

# Token Efficiency

Token efficiency matters because it changes the economics, latency, and
deployment options of a workflow. It should be reviewed alongside quality and
security, not after deployment.

## Design rules

- reduce prompt scope before shopping for larger models
- move stable instructions into reusable templates
- prefer structured inputs over long free-text context
- separate retrieval, drafting, and action steps when it reduces waste

## Output in this section

- [Token budget and on-prem decision worksheet](token-budget-on-prem-decision-worksheet.md)
