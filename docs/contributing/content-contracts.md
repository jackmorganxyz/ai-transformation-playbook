---
title: Content Contracts
description: The frontmatter and section requirements enforced by validation.
---

# Content Contracts

Validation is strict so contributors can add material without maintainers
rewriting it.

## Required statuses

Use one value in `review_status`:

- `draft`
- `reviewed`
- `verified`

## Agent examples

Location: `docs/agent-library/examples/`

Required frontmatter:

- `content_type: agent-example`
- `industry`
- `target_role`
- `problem_statement`
- `trigger`
- `inputs`
- `systems_tools`
- `human_approval_points`
- `outputs`
- `success_metrics`
- `failure_modes`
- `security_notes`
- `token_cost_notes`
- `deployment_mode`
- `assumptions`
- `risks`

Required sections:

- Problem Statement
- Trigger
- Inputs
- Systems/Tools
- Workflow Steps
- Human Approval Points
- Outputs
- Success Metrics
- Failure Modes
- Security Notes
- Token-Cost Notes
- Deployment Mode
- Prompt Skeleton

## Vertical or role guides

Location: `docs/vertical-guides/`

Required frontmatter:

- `content_type: role-guide`
- `vertical`
- `primary_role`
- `linked_examples`
- `assumptions`
- `risks`

Required sections:

- Industry Context
- Common Low-Value Task Clusters
- Recommended Agent Opportunities
- Constraints & Compliance Notes
- Role Map
- Scorecard Usage
- Linked Example Specs

## Reference patterns

Location: `docs/agent-library/reference-patterns/`

Required frontmatter:

- `content_type: reference-pattern`
- `pattern_scope`
- `applicable_industries`
- `applicable_roles`
- `problem_statement`
- `trigger`
- `inputs`
- `systems_tools`
- `human_approval_points`
- `outputs`
- `success_metrics`
- `failure_modes`
- `security_notes`
- `token_cost_notes`
- `deployment_mode`
- `assumptions`
- `risks`
