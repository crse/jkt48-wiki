module.exports = {
  title: 'JKT48 Information Center',
  tagline: 'The tagline of my site',
  url: 'https://jkt48.vercel.app',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'JKT48 Discord', // Usually your GitHub org/user name.
  projectName: 'jkt48-wiki', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'JKT48 Information Center',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      links: [
        {
          to: 'docs/faq',
          activeBasePath: 'docs',
          label: 'FAQ',
          position: 'left',
        },
        {
          to: 'docs/archive',
          activeBasePath: 'docs',
          label: 'Archive',
          position: 'left',
        },
        {href: 'https://invite.gg/jkt48', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/crse/jkt48-wiki',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Social',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/doc1',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2',
            },
          ],
        },
        {
          title: 'Community and SNS',
          items: [
            {
              label: 'Discord',
              href: 'https://invite.gg/jkt48',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/JKT48Discord',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyleft © ${new Date().getFullYear()} JKT48Discord. Built with ♥ by Christian Elbrianno.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
