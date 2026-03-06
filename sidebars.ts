import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  playbook: [
    'index',
    {
      type: 'category',
      label: 'Overview',
      link: {type: 'doc', id: 'overview/index'},
      items: ['overview/framework-map', 'overview/pilot-rollout-governance'],
    },
    {
      type: 'category',
      label: 'Company Research',
      link: {type: 'doc', id: 'company-research/index'},
      items: [
        'company-research/company-research-brief',
        'company-research/company-assessment-worksheet',
      ],
    },
    {
      type: 'category',
      label: 'Opportunity Mapping',
      link: {type: 'doc', id: 'opportunity-mapping/index'},
      items: ['opportunity-mapping/workflow-discovery'],
    },
    {
      type: 'category',
      label: 'Task Scoring',
      link: {type: 'doc', id: 'task-scoring/index'},
      items: [
        'task-scoring/canonical-task-rubric',
        'task-scoring/task-inventory-scoring-worksheet',
      ],
    },
    {
      type: 'category',
      label: 'Automation Design',
      link: {type: 'doc', id: 'automation-design/index'},
      items: [
        'automation-design/automation-prioritization',
        'automation-design/agent-design-brief',
        'automation-design/pilot-rollout-measurement-governance',
      ],
    },
    {
      type: 'category',
      label: 'Vertical Guides',
      link: {type: 'doc', id: 'vertical-guides/index'},
      items: [
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
      ],
    },
    {
      type: 'category',
      label: 'Agent Library',
      link: {type: 'doc', id: 'agent-library/index'},
      items: [
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
      label: 'Security',
      link: {type: 'doc', id: 'security/index'},
      items: ['security/security-review-checklist'],
    },
    {
      type: 'category',
      label: 'On-Prem/Local Deployment',
      link: {type: 'doc', id: 'on-prem-local-deployment/index'},
      items: ['on-prem-local-deployment/local-first-deployment-checklist'],
    },
    {
      type: 'category',
      label: 'Token Efficiency',
      link: {type: 'doc', id: 'token-efficiency/index'},
      items: ['token-efficiency/token-budget-on-prem-decision-worksheet'],
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
