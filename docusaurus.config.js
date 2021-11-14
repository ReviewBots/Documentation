const {
  Agile,
  generateId,
  createState,
  createCollection,
  createComputed,
} = require('@agile-ts/core');
const {
  AgileHOC,
  useAgile,
  useWatcher,
  useProxy,
  useSelector,
  useValue,
} = require('@agile-ts/react');
const { Event, useEvent } = require('@agile-ts/event');
const { toast } = require('react-toastify');

const githubOrgUrl = 'https://github.com/ReviewBots';
const domain = 'https://docs.reviewbots.xyz';
const npmOrgUrl = 'https://www.npmjs.com/package/reviewbots.js';

const customFields = {
  copyright: `Copyright © 2020-${new Date().getFullYear()} <a target="_blank" rel="noopener noreferrer" href="https://reviewbots.xyz">Review Bots</a>`,
  meta: {
    title: 'Review Bots Docs',
    image: '/img/rb_new.png',
    description:
      'The Number One Discord Bot Review Service, Experiencing Issues with your Favourite Bots? Search our vast list of bots and Let the Dev Team know!' ,
    color: '#6c69a0',
    keywords: [
      'Discord',
      'Bot',
      'Reviews'
    ],
  },
  domain,
  githubOrgUrl,
  githubUrl: `${githubOrgUrl}/ReviewBots-Docs`,
  githubDocsUrl: `${githubOrgUrl}/ReviewBots-Docs`,
  npmCoreUrl: `${npmOrgUrl}`,
  discordUrl: `https://reviewbots.xyz/discord`,
  twitterUrl: 'https://twitter.com/ReviewBots',
  version: '0.0.1',
  announcementBar: {
    id: 'announcement',
    content: [
      `❓ If you have any questions, don't hesitate to join our <a target="_blank" rel="noopener noreferrer" href="https://reviewbots.xyz/discord">Discord</a> ️`,
      `🎉 If you like Review Bots, give us a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/ReviewBots/ReviewBots.js">GitHub</a>`,
      `⏰ If you want to stay update to date, follow use on <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/ReviewBots">Twitter</a>`,
    ],
    random: false,
    interval: 100000,
  },
  liveCodeScope: {
    Agile,
    createState,
    createCollection,
    createComputed,
    useAgile,
    useProxy,
    useEvent,
    useWatcher,
    useSelector,
    useValue,
    AgileHOC,
    generateId,
    Event,
    toast,
  },
};

const config = {
  title: 'Review Bots Docs',
  tagline: 'The Number One Discord Bot Review Service, Experiencing Issues with your Favourite Bots? Search our vast list of bots and Let the Dev Team know!',
  url: customFields.domain,
  baseUrlIssueBanner: false,
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/rb_new.png',
  organizationName: 'ReviewBots',
  projectName: 'https://github.com/ReviewBots/ReviewBots-Docs',
  themes: ['@docusaurus/theme-live-codeblock'],
  scripts: [{ src: 'https://snack.expo.io/embed.js', async: true }], // https://github.com/expo/snack/blob/main/docs/embedding-snacks.md
  plugins: [
    'docusaurus-plugin-sass',
    // @docusaurus/plugin-google-analytics (Not necessary because it automatically gets added)
  ],
  customFields: { ...customFields },
  themeConfig: {
    hideableSidebar: false,
    algolia: {
      apiKey: '6b7b98565bb82e16996fd185f378d618',
      indexName: 'agile-ts',
    },
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    // image: '/img/meta.png', // Gets used in Head as Meta Image (og:image)
    prism: {
      theme: require('prism-react-renderer/themes/github'),
      darkTheme: require('prism-react-renderer/themes/dracula'),
    },
    navbar: {
      title: "Review Bots",
      logo: {
        alt: "RB Logo",
        src:
          "img/rb_new.png"
      },
      items: [
        {
          to: "docs/getting-started",
          activeBasePath: "docs/getting-started",
          label: "API Docs",
          position: "left"
        },
        { 
          to: "blog", 
          label: "Blog", 
          position: "right" 
        },
        {
          href: "https://reviewbots.xyz/discord",
          position: "right",
          label: "Discord"
        },
        {
          href: "https://github.com/ReviewBots",
          position: "right",
          label: "GitHub"
        }
      ]
    },
    footer: {
      copyright: customFields.copyright,
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Get Started',
              to: 'docs/getting-started',
            }
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: customFields.githubUrl,
            },
            {
              label: 'Discord',
              href: customFields.discordUrl,
            },
            {
              label: 'Twitter',
              href: customFields.twitterUrl,
            },
          ],
        },
      ],
    },
    googleAnalytics: {
      trackingID: 'UA-189394644-1',
      anonymizeIP: true, // Should IPs be anonymized?
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: 'docs',
          admonitions: {
            icons: 'emoji',
          },
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: `${customFields.githubDocsUrl}/tree/develop`,
          showLastUpdateAuthor: false,
          showLastUpdateTime: true,
          remarkPlugins: [
            [require('@docusaurus/remark-plugin-npm2yarn'), { sync: true }],
          ],
        },
        blog: {
          showReadingTime: true,
          editUrl: `${customFields.githubDocsUrl}/tree/develop`,
        },
        theme: {
          customCss: [require.resolve('./src/css/custom.scss')],
        },
      },
    ],
  ],
};

module.exports = { ...config };
