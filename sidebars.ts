import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  playbook: [
    'index',
    {
      type: 'doc',
      id: 'why/index',
      label: '1. Why AI Augmentation',
    },
    {
      type: 'category',
      label: '2. Analyse the Company',
      link: {type: 'doc', id: 'analyse/index'},
      items: ['analyse/worksheet'],
    },
    {
      type: 'doc',
      id: 'map/index',
      label: '3. Map Workflows',
    },
    {
      type: 'category',
      label: '4. Score Tasks',
      link: {type: 'doc', id: 'score/index'},
      items: ['score/worksheet'],
    },
    {
      type: 'category',
      label: '5. Design the Augmentation',
      link: {type: 'doc', id: 'design/index'},
      items: ['design/constraints'],
    },
    {
      type: 'doc',
      id: 'launch/index',
      label: '6. Launch, Measure, Expand',
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
          label: 'Agent Specs',
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
