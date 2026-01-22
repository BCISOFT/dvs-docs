const {themes} = require('prism-react-renderer');

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config = {
  title: 'DevSpaces Documentation',
  tagline: 'Instant development environments',
  favicon: 'img/favicon.svg',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://docs.devspaces.cloud',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'devspaces', // Usually your GitHub org/user name.
  projectName: 'dvs documentation', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
    localeConfigs: {
      en: {
        label: 'English',
        direction: 'ltr',
        htmlLang: 'en-US',
      },
      fr: {
        label: 'Français',
        direction: 'ltr',
        htmlLang: 'fr-FR',
      },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.js',
          showLastUpdateTime: true,
          showLastUpdateAuthor: false,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'DevSpaces',
      logo: {
        alt: 'DevSpaces Logo',
        src: 'img/dvs.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: 'https://devspaces.cloud',
          label: 'Website',
          position: 'right',
        },
        {
          href: 'https://discord.gg/TvncjBJzkp',
          position: 'right',
          className: 'header-discord-link',
          'aria-label': 'Discord',
        },
        {
          href: 'https://github.com/BCISOFT/dvs-community',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Installation',
              to: '/docs/getting-started/',
            },
          ],
        },
        {
          title: 'DevSpaces',
          items: [
            {
              label: 'Website',
              href: 'https://devspaces.cloud',
            },
            {
              label: 'App',
              href: 'https://app.devspaces.cloud',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/TvncjBJzkp',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/BCISOFT/dvs-community',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} DevSpaces.`,
    },
    prism: {
      theme: themes.github,
      darkTheme: themes.dracula,
    },
  },
};

module.exports = config;

