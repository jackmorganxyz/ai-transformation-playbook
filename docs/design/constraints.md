---
title: Constraints Checklist
description: Review security, deployment, and token cost before launching any augmentation.
---

# Constraints Checklist

Complete this before a pilot moves into live use. Security, deployment, and cost
are design inputs, not cleanup tasks.

## Security review

### Data and access

- [ ] Data classes are identified.
- [ ] Sensitive inputs are minimized.
- [ ] Credentials and permissions are scoped to the narrowest workable access.
- [ ] System write-backs are explicit and reversible.

### Workflow controls

- [ ] Human approval points are documented.
- [ ] Escalation rules are documented.
- [ ] Failure modes and fallback steps are documented.
- [ ] Audit logs or review samples are retained.

### Third-party review

- [ ] Hosted versus local deployment choice is documented.
- [ ] Token retention or prompt retention rules are known.
- [ ] The workflow does not rely on unreviewed vendor defaults for critical
  controls.

## Deployment review

Choose local-first, hybrid, or hosted based on data control, performance, cost,
and operating burden.

### Use local-first when

- Policy or contract prohibits hosted inference for a workflow.
- Data residency or air-gap constraints are strict.
- Token costs are secondary to data control.
- Response quality is acceptable within the local model and hardware envelope.

### Decision prompts

- [ ] The workflow touches data that cannot leave a local or controlled network.
- [ ] The task still performs acceptably on the local model class being
  considered.
- [ ] Local hardware can handle the expected concurrency and latency.
- [ ] Operators can support updates, observability, and rollback on the chosen
  platform.
- [ ] The workflow still has clear approval boundaries and audit coverage.

If more than one box remains unchecked, default to hybrid or hosted.

## Token cost review

Reduce cost in this order before changing deployment mode:

1. Reduce prompt scope before shopping for larger models.
2. Move stable instructions into reusable templates.
3. Prefer structured inputs over long free-text context.
4. Separate retrieval, drafting, and action steps when it reduces waste.

### Cost worksheet

| Prompt | Notes |
| --- | --- |
| Average input size |  |
| Average output size |  |
| Calls per workflow |  |
| Workflows per day |  |
| Total daily token volume |  |
| Sensitivity of data |  |
| Need for local retention or air-gap controls |  |

### Decision prompts

- Does token volume materially change unit economics?
- Does the workflow require data control that hosted inference cannot satisfy?
- Can the workflow be decomposed to reduce token load before changing deployment
  mode?
- Does local hardware support the latency and concurrency required?
