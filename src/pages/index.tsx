import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import styles from './index.module.css';

const steps = [
  {
    title: '1. Understand the framework',
    body: 'See the full sequence, outputs, and rules before you choose a workflow.',
    href: '/docs/overview',
  },
  {
    title: '2. Research the company',
    body: 'Capture the business model, broken workflows, systems, and hard constraints.',
    href: '/docs/company-research',
  },
  {
    title: '3. Map workflows',
    body: 'Break one workflow into real tasks with owners, triggers, inputs, and outputs.',
    href: '/docs/opportunity-mapping',
  },
  {
    title: '4. Score tasks',
    body: 'Use one rubric to choose the right posture for each task.',
    href: '/docs/task-scoring',
  },
  {
    title: '5. Design one pilot',
    body: 'Define the trigger, inputs, approvals, outputs, security review, and rollback path.',
    href: '/docs/automation-design',
  },
  {
    title: '6. Review constraints',
    body: 'Check security, deployment, and token cost before anything goes live.',
    href: '/docs/security',
  },
  {
    title: '7. Launch with controls',
    body: 'Start narrow. Measure value, quality, and control. Expand only after review.',
    href: '/docs/automation-design/pilot-rollout-measurement-governance',
  },
];

const resources = [
  {
    title: 'Decision tools',
    body: 'Assessment worksheet, scoring sheet, security checklist, deployment checklist, and token worksheet.',
    href: '/docs',
    label: 'Open start page',
  },
  {
    title: 'Examples',
    body: 'Role guides, design specs, and reusable patterns for common workflow shapes.',
    href: '/docs/agent-library',
    label: 'Browse examples',
  },
  {
    title: 'Templates',
    body: 'Copy the exact template for a new example, role guide, or reference pattern.',
    href: '/docs/contributing',
    label: 'Open contribution docs',
  },
];

function HomePage(): ReactNode {
  return (
    <main className={styles.page}>
      <header className={styles.hero}>
        <div className={`container ${styles.heroShell}`}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>Docs-first and vendor-neutral</p>
            <h1 className={styles.title}>A clear manual for starting AI work.</h1>
            <p className={styles.lede}>
              Use this repo to research a company, map workflows, score tasks,
              pick a pilot, and launch it with review, security, and
              governance built in.
            </p>
            <div className={styles.actions}>
              <Link className={`button button--primary button--lg ${styles.primaryAction}`} to="/docs">
                Start here
              </Link>
              <Link
                className={`button button--outline button--lg ${styles.secondaryAction}`}
                to="/docs/agent-library">
                Browse examples
              </Link>
            </div>
          </div>
          <aside className={styles.heroPanel}>
            <p className={styles.panelLabel}>Start in this order</p>
            <ol className={styles.panelList}>
              {steps.map((step) => (
                <li key={step.title}>
                  <Link to={step.href}>{step.title}</Link>
                  <span>{step.body}</span>
                </li>
              ))}
            </ol>
          </aside>
        </div>
      </header>

      <section className={styles.section}>
        <div className="container">
          <div className={styles.grid}>
            {resources.map((item) => (
              <article key={item.title} className={styles.card}>
                <h2>{item.title}</h2>
                <p>{item.body}</p>
                <Link to={item.href}>{item.label}</Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="AI Transformation Playbook"
      description="A docs-first playbook for researching workflows, scoring tasks, and launching controlled AI pilots.">
      <HomePage />
    </Layout>
  );
}
