---
title: Launch, Measure, Expand
description: Launch the augmentation in stages, measure whether it works, and decide whether to expand.
---

# Launch, Measure, Expand

Do not launch until the workflow owner, approvals, rollback path, and pause
rule are clear.

## Launch in stages

1. **Shadow mode** — AI runs alongside the human with no system write-back.
   The human still does the work. You compare outputs.
2. **Draft-review mode** — AI produces the output. The human reviews and
   approves before it takes effect.
3. **Limited action mode** — AI executes within defined boundaries. The human
   monitors.
4. **Expanded scope** — only after a formal review confirms the control model
   holds.

## Track three signal types

- **Value**: time saved, cycle-time change, error reduction, throughput, or
  revenue effect.
- **Quality**: acceptance rate, correction rate, and escalation rate.
- **Control**: security exceptions, auditability, rollback events, and
  unresolved failure modes.

## Required controls before launch

- Workflow owner identified
- Approval and escalation rules documented
- Rollback or fallback path defined
- Audit logs or review samples retained
- Threshold for pausing the pilot defined

## Expand only if

- Users trust the review boundary.
- Failures are recoverable.
- The measured value is material.
- The control model still holds under higher volume.

## What happens next

Once the first augmentation is running and measured, go back to your
[scored task list](../score/index.md) and pick the next target. Each cycle
gets faster as you build pattern knowledge and reusable design briefs.

The goal is 100% coverage — every employee augmented, every role operating with
an AI co-worker handling the execution work so the human can focus on judgment,
relationships, and direction.
