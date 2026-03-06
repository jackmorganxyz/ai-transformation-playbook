import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const repoSlug = process.env.GITHUB_REPOSITORY ?? 'jackmorgan/ai-transformation-playbook';
const [repoOwner, repoName] = repoSlug.split('/');
const repoUrl = `https://github.com/${repoOwner}/${repoName}`;
const isUserSite = repoName === `${repoOwner}.github.io`;

const config: Config = {
  title: 'AI Transformation Playbook',
  tagline:
    'Vendor-neutral guidance for scoring work, designing agents, and shipping governed pilots.',
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
        {to: '/docs', label: 'Playbook', position: 'left'},
        {to: '/docs/agent-library', label: 'Agent Library', position: 'left'},
        {to: '/docs/contributing', label: 'Contributing', position: 'left'},
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
          title: 'Playbook',
          items: [
            {
              label: 'Start here',
              to: '/docs',
            },
            {
              label: 'Task scoring',
              to: '/docs/task-scoring',
            },
          ],
        },
        {
          title: 'Library',
          items: [
            {
              label: 'Role examples',
              to: '/docs/agent-library',
            },
            {
              label: 'Vertical guides',
              to: '/docs/vertical-guides',
            },
          ],
        },
        {
          title: 'Contribute',
          items: [
            {
              label: 'Contribution guide',
              to: '/docs/contributing',
            },
            {
              label: 'GitHub',
              href: repoUrl,
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
