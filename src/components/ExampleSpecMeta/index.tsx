import {useDoc} from '@docusaurus/plugin-content-docs/client';

import styles from './styles.module.css';

type ExampleFrontMatter = {
  review_status?: string;
  deployment_mode?: string;
  human_approval_points?: string[];
  security_notes?: string[];
  token_cost_notes?: string[];
};

function formatToken(value?: string) {
  if (!value) {
    return 'Not set';
  }

  return value
    .split('-')
    .map((token) => token.charAt(0).toUpperCase() + token.slice(1))
    .join(' ');
}

export default function ExampleSpecMeta() {
  const {frontMatter} = useDoc();
  const metadata = frontMatter as ExampleFrontMatter;
  const sections = [
    {
      title: 'Approvals',
      items: metadata.human_approval_points ?? [],
    },
    {
      title: 'Security',
      items: metadata.security_notes ?? [],
    },
    {
      title: 'Token cost',
      items: metadata.token_cost_notes ?? [],
    },
  ];

  return (
    <section className={styles.wrapper}>
      <div className={styles.chips}>
        <span className={styles.chip}>Status: {formatToken(metadata.review_status)}</span>
        <span className={styles.chip}>Deployment: {formatToken(metadata.deployment_mode)}</span>
      </div>
      <div className={styles.grid}>
        {sections.map((section) => (
          <article key={section.title} className={styles.card}>
            <h2 className={styles.title}>{section.title}</h2>
            <ul className={styles.list}>
              {section.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
