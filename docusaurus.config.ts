import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const repoSlug = process.env.GITHUB_REPOSITORY ?? 'jackmorgan/ai-transformation-playbook';
const [repoOwner, repoName] = repoSlug.split('/');
const repoUrl = `https://github.com/${repoOwner}/${repoName}`;
const isUserSite = repoName === `${repoOwner}.github.io`;

const config: Config = {
  title: 'AI Augmentation Playbook',
  tagline: 'Augment every employee with AI. Multiply output without multiplying headcount.',
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
      title: 'AI Augmentation Playbook',
      logo: {
        alt: 'AI Augmentation Playbook logo',
        src: 'img/logo.svg',
      },
      items: [
        {to: '/docs', label: 'Start', position: 'left'},
        {to: '/docs/vertical-guides', label: 'Examples', position: 'left'},
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
          title: 'Playbook',
          items: [
            {
              label: 'Start here',
              to: '/docs',
            },
            {
              label: 'Why AI augmentation',
              to: '/docs/why',
            },
          ],
        },
        {
          title: 'Tools',
          items: [
            {
              label: 'Scoring worksheet',
              to: '/docs/score/worksheet',
            },
            {
              label: 'Constraints checklist',
              to: '/docs/design/constraints',
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
        `Copyright © ${new Date().getFullYear()} AI Augmentation Playbook contributors. ` +
        'Content licensed CC BY 4.0. Code and configuration licensed MIT.',
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
