// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Mis apuntes de Docusaurus',
  tagline: 'Un repositorio de todo lo que aprendemos',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'IES Ágora', // Usually your GitHub org/user name.
  projectName: 'web-frojom-cursoDocusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.

          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Mis apuntes de Docusaurus',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },
          {
            type: 'docSidebar',
            sidebarId: 'modelosiaSidebar',
            position: 'left',
            label: 'Modelos IA',
          },
          {
            type: 'docSidebar',
            sidebarId: 'progiaSidebar',
            position: 'left',
            label: 'Programación con IA',
          },
          {
            type: 'docSidebar',
            sidebarId: 'programacionSidebar',
            position: 'left',
            label: 'Programación',
          },
          {
            type: 'docSidebar',
            sidebarId: 'pspSidebar',
            position: 'left',
            label: 'Programación de Servicios y Procesos',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Comunidad',
            items: [
              {
                label: 'EVEx (Moodle)',
                href: 'https://moodle.educarex.es/evex',
              }
            ],
          },
          {
            title: 'Más',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/fjrojomartin',
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} Fco. Javier Rojo Martín. Todos los derechos reservados.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
  // habilitar la sintaxis de markdown a mermaid
  markdown: {
    mermaid: true,
  },
  // inyectar la librería visual renderizadora
  themes: ['@docusaurus/theme-mermaid'],
};

export default config;
