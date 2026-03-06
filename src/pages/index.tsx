import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

const highlights = [
  {
    title: 'Vendor-neutral framework',
    body: 'Keep the core playbook tool-agnostic. Put named vendors and model choices only in clearly marked examples.',
  },
  {
    title: 'Human review by design',
    body: 'Every example spec includes explicit approval boundaries, reversibility logic, and security notes.',
  },
  {
    title: 'GitHub-native contribution flow',
    body: 'Structured templates, frontmatter validation, markdown linting, and GitHub Actions enforce the content contract.',
  },
];

const metrics = [
  {value: '5', label: 'core framework chapters seeded for v1'},
  {value: '9', label: 'role guides across three target verticals'},
  {value: '12', label: 'design-spec examples in the launch library'},
];

const pathways = [
  {
    title: 'Builders and consultants',
    body: 'Use the framework, worksheets, and examples to structure engagements without sliding into vendor-led sales copy.',
    href: '/docs/overview',
    label: 'Open the framework',
  },
  {
    title: 'Internal transformation teams',
    body: 'Run company research, score tasks, and design pilots with governance and measurement built in from the start.',
    href: '/docs/task-scoring',
    label: 'Open the scorecard',
  },
  {
    title: 'Contributors',
    body: 'Add new examples, role guides, or reference patterns through copyable templates and enforced content schemas.',
    href: '/docs/contributing',
    label: 'Open contribution docs',
  },
];

function HomePage(): ReactNode {
  return (
    <main className={styles.page}>
      <header className={styles.hero}>
        <div className={`container ${styles.heroShell}`}>
          <div className={styles.backgroundOrbA} />
          <div className={styles.backgroundOrbB} />
          <div className={styles.heroCopy}>
            <span className={styles.eyebrow}>Open-source transformation framework</span>
            <Heading as="h1" className={styles.title}>
              Practical AI transformation,
              <span className={styles.accent}> without the vendor trap.</span>
            </Heading>
            <p className={styles.lede}>
              AI Transformation Playbook packages company research, workflow
              discovery, task scoring, automation design, and pilot governance
              into a docs-first project that teams can fork, improve, and cite.
            </p>
            <div className={styles.actions}>
              <Link className={`button button--primary button--lg ${styles.primaryAction}`} to="/docs">
                Start the playbook
              </Link>
              <Link
                className={`button button--outline button--lg ${styles.secondaryAction}`}
                to="/docs/agent-library">
                Browse example specs
              </Link>
            </div>
          </div>
          <aside className={styles.heroPanel}>
            <p className={styles.panelLabel}>What ships in v1</p>
            <ul className={styles.panelList}>
              <li>
                <strong>Canonical task rubric</strong>
                <span>
                  One 1-5 scoring model that yields both Human Value Score and
                  Automation Fit Score.
                </span>
              </li>
              <li>
                <strong>Vertical coverage</strong>
                <span>
                  Professional services, SaaS, and ecommerce role guides seeded
                  with linked examples.
                </span>
              </li>
              <li>
                <strong>Design-spec-first library</strong>
                <span>
                  Examples stay in docs for v1 so contributors improve the
                  decision model before runnable code lands.
                </span>
              </li>
            </ul>
          </aside>
        </div>
      </header>

      <section className={styles.section}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <Heading as="h2">Principles</Heading>
            <p>
              The site is opinionated about structure, not about vendors. The
              framework optimizes for reuse, traceability, and safer adoption.
            </p>
          </div>
          <div className={styles.grid}>
            {highlights.map((item) => (
              <article key={item.title} className={styles.card}>
                <Heading as="h3">{item.title}</Heading>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
          <div className={styles.grid}>
            {metrics.map((metric) => (
              <article key={metric.label} className={styles.metric}>
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <Heading as="h2">Choose a path</Heading>
            <p>
              Start with the framework, score the work, and then move into
              vertical guidance or reusable example specs.
            </p>
          </div>
          <div className={styles.pathways}>
            {pathways.map((pathway) => (
              <article key={pathway.title} className={styles.pathway}>
                <Heading as="h3">{pathway.title}</Heading>
                <p>{pathway.body}</p>
                <Link to={pathway.href}>{pathway.label}</Link>
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
      description="Vendor-neutral guidance for company research, task scoring, automation design, and agent example specs.">
      <HomePage />
    </Layout>
  );
}
