import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const repoSlug = process.env.GITHUB_REPOSITORY ?? 'jackmorgan/ai-transformation-playbook';
const [repoOwner, repoName] = repoSlug.split('/');
const repoUrl = `https://github.com/${repoOwner}/${repoName}`;
const isUserSite = repoName === `${repoOwner}.github.io`;

const config: Config = {
  title: 'AI Transformation Playbook',
  tagline: 'Research workflows. Score tasks. Launch controlled AI pilots.',
  favicon: 'img/favicon.ico',
  future: {
    v4: true,
  },
  url: process.env.DOCUSAURUS_URL ?? `https://${repoOwner}.github.io`,
  baseUrl: process.env.DOCUSAURUS_BASE_URL ?? (isUserSite ? '/' : `/${repoName}/`),
  organizationName: repoOwner,
  projectName: repoName,
  onBrokenLinks: 'throw',
  trailingSlash: false,
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'throw',
    },
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: `${repoUrl}/edit/main/`,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  themeConfig: {
    image: 'img/logo.svg',
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'AI Transformation Playbook',
      logo: {
        alt: 'AI Transformation Playbook logo',
        src: 'img/logo.svg',
      },
      items: [
        {to: '/docs', label: 'Start', position: 'left'},
        {to: '/docs/agent-library', label: 'Examples', position: 'left'},
        {to: '/docs/contributing', label: 'Contribute', position: 'left'},
        {
          href: repoUrl,
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Start',
          items: [
            {
              label: 'Start here',
              to: '/docs',
            },
            {
              label: 'Framework',
              to: '/docs/overview',
            },
          ],
        },
        {
          title: 'Tools',
          items: [
            {
              label: 'Scoring worksheet',
              to: '/docs/task-scoring/task-inventory-scoring-worksheet',
            },
            {
              label: 'Security checklist',
              to: '/docs/security/security-review-checklist',
            },
          ],
        },
        {
          title: 'Examples',
          items: [
            {
              label: 'Role guides',
              to: '/docs/vertical-guides',
            },
            {
              label: 'Agent library',
              to: '/docs/agent-library',
            },
          ],
        },
      ],
      copyright:
        `Copyright © ${new Date().getFullYear()} AI Transformation Playbook contributors. ` +
        'Content licensed CC BY 4.0. Code and configuration licensed MIT.',
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
