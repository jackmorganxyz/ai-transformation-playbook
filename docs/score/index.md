---
title: Score Tasks
description: Rate each task on a standard rubric to determine whether AI should handle it, assist with it, or leave it alone.
---

# Score Tasks

Use one rubric for every task. The rubric produces two scores that tell you
how to augment the role — what the AI should handle and where the human stays
in control.

## The rubric

Score each field from 1 to 5.

| Field | 1 | 3 | 5 |
| --- | --- | --- | --- |
| Business impact | Nice to have | Useful efficiency or quality gain | Material revenue, margin, cycle-time, or control impact |
| Frequency | Rare or ad hoc | Weekly | Daily or continuous |
| Process standardization | Highly variable | Partly standardized | Stable, repeatable, and documented |
| Data/system readiness | Inputs are fragmented or inaccessible | Inputs exist but need cleanup | Inputs are reliable and system access is clear |
| Reversibility | Errors are hard to unwind | Some rollback exists | Fast rollback or correction is possible |
| Compliance sensitivity | High regulatory or policy exposure | Moderate control requirements | Low sensitivity |
| Human judgment sensitivity | Trust, persuasion, or nuanced judgment dominates | Mixed | Low judgment or relationship load |

## Calculate the two scores

### Automation Fit Score

Average these values:

- business impact
- frequency
- process standardization
- data/system readiness
- reversibility
- `6 - compliance sensitivity`
- `6 - human judgment sensitivity`

Higher is better for automation.

- `1.0` to `2.9` — weak fit
- `3.0` to `4.2` — workable with design care
- `4.3` to `5.0` — strong fit

### Human Value Score

Average these values:

- business impact
- compliance sensitivity
- human judgment sensitivity
- `6 - reversibility`

Higher means the task should stay closer to human control. A task can score
high on both measures — that usually points to agent-assist.

## Choose the posture

Work through this list in order for each task:

1. If Automation Fit Score is below `3.0` → **keep human-led**
2. If Human Value Score is `3.5` or higher → **agent-assist**
3. If Automation Fit Score is `4.3`+ and Human Value Score is below `2.5` →
   **full automation candidate**
4. Otherwise → **partial automation**

## Keep these distinctions

- A strong automation score does not remove the need for approval boundaries.
- High-compliance or high-judgment work usually lands in agent-assist.
- A low-frequency task can still be worth automating if the business impact and
  control benefits are material.

## Worksheet

Use the [scoring worksheet](worksheet.md) to inventory and score tasks in a
structured format.

## Next step

[Design the augmentation →](../design/index.md)
