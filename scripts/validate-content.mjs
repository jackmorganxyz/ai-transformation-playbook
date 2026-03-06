import fs from 'node:fs/promises';
import path from 'node:path';
import fg from 'fast-glob';
import matter from 'gray-matter';
import {z} from 'zod';

const stringList = (label) =>
  z
    .array(z.string().trim().min(1, `${label} entries must be non-empty`))
    .min(1, `${label} requires at least one entry`);

const reviewStatus = z.enum(['draft', 'reviewed', 'verified']);
const deploymentMode = z.enum(['local-first', 'hybrid', 'hosted']);

const sharedSchema = z.object({
  title: z.string().trim().min(1),
  description: z.string().trim().min(1),
  review_status: reviewStatus,
  assumptions: stringList('assumptions'),
  risks: stringList('risks'),
});

const agentExampleSchema = sharedSchema.extend({
  content_type: z.literal('agent-example'),
  industry: z.string().trim().min(1),
  target_role: z.string().trim().min(1),
  problem_statement: z.string().trim().min(1),
  trigger: z.string().trim().min(1),
  inputs: stringList('inputs'),
  systems_tools: stringList('systems_tools'),
  human_approval_points: stringList('human_approval_points'),
  outputs: stringList('outputs'),
  success_metrics: stringList('success_metrics'),
  failure_modes: stringList('failure_modes'),
  security_notes: stringList('security_notes'),
  token_cost_notes: stringList('token_cost_notes'),
  deployment_mode: deploymentMode,
});

const referencePatternSchema = sharedSchema.extend({
  content_type: z.literal('reference-pattern'),
  pattern_scope: z.string().trim().min(1),
  applicable_industries: stringList('applicable_industries'),
  applicable_roles: stringList('applicable_roles'),
  problem_statement: z.string().trim().min(1),
  trigger: z.string().trim().min(1),
  inputs: stringList('inputs'),
  systems_tools: stringList('systems_tools'),
  human_approval_points: stringList('human_approval_points'),
  outputs: stringList('outputs'),
  success_metrics: stringList('success_metrics'),
  failure_modes: stringList('failure_modes'),
  security_notes: stringList('security_notes'),
  token_cost_notes: stringList('token_cost_notes'),
  deployment_mode: deploymentMode,
});

const roleGuideSchema = sharedSchema.extend({
  content_type: z.literal('role-guide'),
  vertical: z.string().trim().min(1),
  primary_role: z.string().trim().min(1),
  linked_examples: stringList('linked_examples'),
});

const rules = [
  {
    label: 'agent example',
    pattern: 'docs/agent-library/examples/**/*.{md,mdx}',
    minimum: 9,
    schema: agentExampleSchema,
    headings: [
      'Problem Statement',
      'Trigger',
      'Inputs',
      'Systems/Tools',
      'Workflow Steps',
      'Human Approval Points',
      'Outputs',
      'Success Metrics',
      'Failure Modes',
      'Security Notes',
      'Token-Cost Notes',
      'Deployment Mode',
      'Prompt Skeleton',
    ],
  },
  {
    label: 'reference pattern',
    pattern: 'docs/agent-library/reference-patterns/**/*.{md,mdx}',
    minimum: 3,
    schema: referencePatternSchema,
    headings: [
      'Problem Statement',
      'Pattern Fit',
      'Trigger',
      'Inputs',
      'Systems/Tools',
      'Workflow Steps',
      'Human Approval Points',
      'Outputs',
      'Success Metrics',
      'Failure Modes',
      'Security Notes',
      'Token-Cost Notes',
      'Deployment Mode',
      'Prompt Skeleton',
    ],
  },
  {
    label: 'role guide',
    pattern: 'docs/vertical-guides/*/*.md',
    minimum: 9,
    schema: roleGuideSchema,
    headings: [
      'Industry Context',
      'Common Low-Value Task Clusters',
      'Recommended Agent Opportunities',
      'Constraints & Compliance Notes',
      'Role Map',
      'Scorecard Usage',
      'Linked Example Specs',
    ],
  },
];

function normalizeHeading(value) {
  return value.toLowerCase().replace(/\s+/g, ' ').trim();
}

function collectLevelTwoHeadings(content) {
  const headings = new Set();

  for (const match of content.matchAll(/^##\s+(.+)$/gm)) {
    headings.add(normalizeHeading(match[1]));
  }

  return headings;
}

function formatZodIssues(issues) {
  return issues.map((issue) => {
    const field = issue.path.length > 0 ? issue.path.join('.') : 'frontmatter';
    return `${field}: ${issue.message}`;
  });
}

async function validateFile(file, schema, headings) {
  const absolutePath = path.join(process.cwd(), file);
  const raw = await fs.readFile(absolutePath, 'utf8');
  const {data, content} = matter(raw);
  const result = schema.safeParse(data);
  const errors = [];

  if (!result.success) {
    errors.push(...formatZodIssues(result.error.issues));
  }

  const foundHeadings = collectLevelTwoHeadings(content);

  for (const heading of headings) {
    if (!foundHeadings.has(normalizeHeading(heading))) {
      errors.push(`missing heading: ${heading}`);
    }
  }

  return errors;
}

async function main() {
  const failures = [];

  for (const rule of rules) {
    const files = await fg(rule.pattern, {dot: false});

    if (files.length < rule.minimum) {
      failures.push(
        `${rule.label}: expected at least ${rule.minimum} files matching ${rule.pattern}, found ${files.length}`,
      );
      continue;
    }

    for (const file of files) {
      const errors = await validateFile(file, rule.schema, rule.headings);
      if (errors.length > 0) {
        failures.push(`${file}\n  - ${errors.join('\n  - ')}`);
      }
    }
  }

  if (failures.length > 0) {
    console.error('Content validation failed:\n');
    console.error(failures.join('\n\n'));
    process.exit(1);
  }

  console.log('Content validation passed.');
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
