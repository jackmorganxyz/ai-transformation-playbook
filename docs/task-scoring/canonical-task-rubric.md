---
title: Canonical Task Rubric
description: The standard 1-5 rubric plus the rules for Human Value Score and Automation Fit Score.
---

# Canonical Task Rubric

Score each field from 1 to 5. Then calculate two averages.

## Scoring table

| Field | 1 | 3 | 5 |
| --- | --- | --- | --- |
| Business impact | Nice to have | Useful efficiency or quality gain | Material revenue, margin, cycle-time, or control impact |
| Frequency | Rare or ad hoc | Weekly | Daily or continuous |
| Process standardization | Highly variable | Partly standardized | Stable, repeatable, and documented |
| Data/system readiness | Inputs are fragmented or inaccessible | Inputs exist but need cleanup | Inputs are reliable and system access is clear |
| Reversibility | Errors are hard to unwind | Some rollback exists | Fast rollback or correction is possible |
| Compliance sensitivity | High regulatory or policy exposure | Moderate control requirements | Low sensitivity |
| Human judgment/relationship sensitivity | Trust, persuasion, or nuanced judgment dominates | Mixed | Low judgment or relationship load |

## Calculate the two scores

Use these formulas after you score all seven fields.

### Automation Fit Score

Average:

- business impact
- frequency
- process standardization
- data/system readiness
- reversibility
- `6 - compliance sensitivity`
- `6 - human judgment/relationship sensitivity`

- Higher is better for automation.
- `1.0` to `2.9`: weak fit
- `3.0` to `4.2`: workable with design care
- `4.3` to `5.0`: strong fit

### Human Value Score

Average:

- business impact
- compliance sensitivity
- human judgment/relationship sensitivity
- `6 - reversibility`

- Higher means the task should stay closer to human control.
- A task can score high on both measures. That often points to `agent-assist`.

## Choose the posture

Map every task in this order:

1. If Automation Fit Score is below `3.0`, use `keep human-led`.
2. If Human Value Score is `3.5` or higher, use `agent-assist`.
3. If Automation Fit Score is `4.3` or higher and Human Value Score is below
   `2.5`, use `full automation candidate`.
4. Otherwise use `partial automation`.

## Keep these distinctions

- A strong automation score does not remove the need for approval boundaries.
- High-compliance or high-judgment work usually lands in `agent-assist`.
- A low-frequency task can still be worth automating if the business impact and
  control benefits are material.
