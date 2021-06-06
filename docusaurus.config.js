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
          to: 'docs/fanbase',
          activeBasePath: 'docs',
          label: 'Fanbase List',
          position: 'left',
        },
        {
          to: 'docs/ava',
          activeBasePath: 'docs',
          label: 'SR Ava List',
          position: 'left',
        },
        {
          href: 'https://invite.gg/jkt48',
          label: 'Discord',
          position: 'right'
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Built with ♥ by 🐧 Christian Elbrianno.`,
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
