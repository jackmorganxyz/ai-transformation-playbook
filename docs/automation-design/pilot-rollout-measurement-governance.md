---
title: Pilot Rollout, Measurement, And Governance
description: The detailed rollout model for launching a pilot, measuring it, and deciding whether to expand it.
---

# Pilot Rollout, Measurement, And Governance

Design the rollout with the same care as the agent itself.

## Measurement plan

Track three categories of signals:

- value: time saved, cycle-time change, error reduction, throughput, or revenue
  effect
- quality: acceptance rate, correction rate, and escalation rate
- control: security exceptions, auditability, rollback events, and unresolved
  failure modes

## Launch stages

1. Shadow mode with no system write-back.
2. Human-reviewed draft mode.
3. Limited write-back or action mode.
4. Expanded scope only after formal review.

## Governance questions

- Who can pause the pilot immediately?
- What threshold forces rollback?
- Who owns prompt, policy, and system changes?
- What evidence is required before `reviewed` becomes `verified`?
