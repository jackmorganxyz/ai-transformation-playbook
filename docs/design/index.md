---
title: Design the Augmentation
description: Pick the best first target and turn it into an implementation-ready agent design brief.
---

# Design the Augmentation

Pick one target. Write one brief. Review constraints before anything goes live.

## Pick the target

The highest-scoring task is not always the best first target. Filter for these:

- Measurable business impact within one quarter
- Clear workflow owner
- Bounded scope with a rollback path
- Enough system access to observe inputs and outputs
- Acceptable security posture for a first release

### Good first targets

- Repetitive preparation work with obvious approval points
- Draft generation, triage, classification, and exception routing
- Workflows where a human can see and correct the output before it causes harm

### Avoid these first

- Broad autonomous agents with unclear ownership
- High-trust relationship steps with no review boundary
- Workflows that depend on inaccessible or low-quality source data

## Write the design brief

Use this brief for every agent. If you cannot fill a field, the workflow is not
ready.

| Field | Notes |
| --- | --- |
| Problem statement |  |
| Target role and industry |  |
| Trigger |  |
| Inputs |  |
| Systems and tools |  |
| Workflow steps |  |
| Human approval points |  |
| Outputs |  |
| Success metrics |  |
| Failure modes |  |
| Security notes |  |
| Token-cost notes |  |
| Deployment mode |  |

### Prompt skeleton

```text
Role:

Objective:

Inputs:

Workflow steps:

Approval boundaries:

Security and cost constraints:

Output format:
```

## Review constraints

Before launch, complete the [constraints checklist](constraints.md) covering
security, deployment, and token cost.

## Next step

[Launch, measure, expand →](../launch/index.md)
