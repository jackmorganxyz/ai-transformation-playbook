import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import styles from './index.module.css';

const steps = [
  {
    title: '1. Understand why',
    body: 'The business case for augmenting every employee with AI.',
    href: '/docs/why',
  },
  {
    title: '2. Analyse the company',
    body: 'Capture the business model, workflows, systems, and constraints.',
    href: '/docs/analyse',
  },
  {
    title: '3. Map workflows',
    body: 'Break each role into specific tasks. Separate judgment from execution.',
    href: '/docs/map',
  },
  {
    title: '4. Score tasks',
    body: 'Use one rubric to decide what AI handles and where humans stay in control.',
    href: '/docs/score',
  },
  {
    title: '5. Design the augmentation',
    body: 'Pick a target, write the agent brief, and review constraints.',
    href: '/docs/design',
  },
  {
    title: '6. Launch, measure, expand',
    body: 'Start in shadow mode. Graduate to draft-review. Expand after formal review.',
    href: '/docs/launch',
  },
];

const resources = [
  {
    title: 'Worksheets and checklists',
    body: 'Assessment worksheet, scoring sheet, and constraints checklist.',
    href: '/docs',
    label: 'Open start page',
  },
  {
    title: 'Examples',
    body: 'Role guides, agent design specs, and reusable patterns by industry.',
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
            <h1 className={styles.title}>Augment every employee with AI.</h1>
            <p className={styles.lede}>
              A step-by-step playbook for multiplying output without
              multiplying headcount. Analyse your company, map workflows,
              score tasks, design the augmentation, and launch it safely.
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
            <p className={styles.panelLabel}>The six steps</p>
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
      title="AI Augmentation Playbook"
      description="Augment every employee with AI. Multiply output without multiplying headcount.">
      <HomePage />
    </Layout>
  );
}
