import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  playbook: [
    'index',
    {
      type: 'category',
      label: '1. Why AI Augmentation',
      link: {type: 'doc', id: 'overview/index'},
      items: [],
    },
    {
      type: 'category',
      label: '2. Analyse the Company',
      link: {type: 'doc', id: 'company-research/index'},
      items: [
        'company-research/company-research-brief',
        'company-research/company-assessment-worksheet',
      ],
    },
    {
      type: 'category',
      label: '3. Map Workflows',
      link: {type: 'doc', id: 'opportunity-mapping/index'},
      items: ['opportunity-mapping/workflow-discovery'],
    },
    {
      type: 'category',
      label: '4. Score Tasks',
      link: {type: 'doc', id: 'task-scoring/index'},
      items: [
        'task-scoring/canonical-task-rubric',
        'task-scoring/task-inventory-scoring-worksheet',
      ],
    },
    {
      type: 'category',
      label: '5. Pick and Design the Augmentation',
      link: {type: 'doc', id: 'automation-design/index'},
      items: [
        'automation-design/automation-prioritization',
        'automation-design/agent-design-brief',
      ],
    },
    {
      type: 'category',
      label: '6. Review Constraints',
      items: [
        {
          type: 'doc',
          id: 'security/index',
          label: 'Security Review',
        },
        'security/security-review-checklist',
        {
          type: 'doc',
          id: 'on-prem-local-deployment/index',
          label: 'Deployment Choices',
        },
        'on-prem-local-deployment/local-first-deployment-checklist',
        {
          type: 'doc',
          id: 'token-efficiency/index',
          label: 'Token Cost',
        },
        'token-efficiency/token-budget-on-prem-decision-worksheet',
      ],
    },
    {
      type: 'doc',
      id: 'automation-design/pilot-rollout-measurement-governance',
      label: '7. Launch, Measure, and Expand',
    },
    {
      type: 'category',
      label: 'Examples',
      items: [
        {
          type: 'doc',
          id: 'vertical-guides/index',
          label: 'Role Guides',
        },
        {
          type: 'category',
          label: 'Professional Services',
          items: [
            'vertical-guides/professional-services/delivery-project-management',
            'vertical-guides/professional-services/client-account-management',
            'vertical-guides/professional-services/analyst-research',
          ],
        },
        {
          type: 'category',
          label: 'SaaS',
          items: [
            'vertical-guides/saas/customer-support',
            'vertical-guides/saas/revenue-operations-sales',
            'vertical-guides/saas/product-engineering-operations',
          ],
        },
        {
          type: 'category',
          label: 'Ecommerce',
          items: [
            'vertical-guides/ecommerce/customer-support',
            'vertical-guides/ecommerce/catalog-merchandising',
            'vertical-guides/ecommerce/fulfillment-returns-operations',
          ],
        },
        {
          type: 'doc',
          id: 'agent-library/index',
          label: 'Agent Library',
        },
        {
          type: 'category',
          label: 'Role Examples',
          items: [
            'agent-library/examples/professional-services-delivery-status-signal',
            'agent-library/examples/professional-services-account-health-brief',
            'agent-library/examples/professional-services-research-monitor',
            'agent-library/examples/saas-support-triage-reply-draft',
            'agent-library/examples/saas-revops-pipeline-next-step',
            'agent-library/examples/saas-product-ops-release-follow-through',
            'agent-library/examples/ecommerce-returns-exception-triage',
            'agent-library/examples/ecommerce-catalog-quality-enrichment',
            'agent-library/examples/ecommerce-shipment-exception-routing',
          ],
        },
        {
          type: 'category',
          label: 'Reference Patterns',
          items: [
            'agent-library/reference-patterns/intake-triage-pattern',
            'agent-library/reference-patterns/knowledge-to-action-pattern',
            'agent-library/reference-patterns/handoff-approval-pattern',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Contributing',
      link: {type: 'doc', id: 'contributing/index'},
      items: [
        'contributing/content-contracts',
        'contributing/review-workflow',
        'contributing/contribution-templates',
      ],
    },
  ],
};

export default sidebars;
