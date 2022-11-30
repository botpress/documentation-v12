// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
const config = {
  title: "Botpress Documentation",
  tagline: "Making Machines Understand Humans",
  url: "https://botpress.com",
  baseUrl: process.env.BASE_URL || "/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/BlackSymbol.svg",
  organizationName: "Botpress/documentation", // Usually your GitHub org/user name.
  projectName: "botpress/documentation", // Usually your repo name.

  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebar/sidebar.js"),
          lastVersion: "current",
          versions: {
            current: {
              label: "Botpress Cloud",
            },
          },
          editUrl: "https://github.com/botpress/documentation/edit/main",
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        gtag: {
          trackingID: "GTM-5ZGHFCL",
          anonymizeIP: false,
        },
      }),
    ],
  ],
  themeConfig: {
    announcementBar: {
      id: "announcementBar-3", // Increment on change
      content: `Welcome to the new <b>Botpress Cloud</b> documentation! If you are looking for the <b>v12</b> documentation, you can now find it <a target="_blank" rel="noopener noreferrer" href="https://v12.botpress.com/">here</a>.`,
      backgroundColor: "#3276ea",
      textColor: "#fff",
    },
    metadata: [
      { name: "botpress, chatbot", content: "documentation, docs" },
      { name: "docsearch:docusaurus_tag", content: "docs-default-current" },
    ],
    algolia: {
      apiKey: process.env.ALGOLIA_API_KEY || "empty",
      appId: process.env.ALGOLIA_APP_ID || "empty",
      indexName: process.env.ALGOLIA_INDEX || "empty",
      contextualSearch: false, //leave it as is. For some reason, activating this adds docusaurus tag facets, thus algolia returns 0 hits.
      searchPagePath: "search",
    },
    prism: {
      theme: require("./src/utils/prism/lightTheme.js"),
      // additionalLanguages: ["bash", "javascript", "jsx", "tsx", "json"],
    },
    colorMode: {
      defaultMode: "light",
      respectPrefersColorScheme: false,
      disableSwitch: true,
    },
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 6,
    },
    navbar: {
      title: "Docs",
      logo: {
        alt: "Botpress logo",
        src: "img/bp-logo-black.svg",
        srcDark: "img/bp-logo-white.png",
      },
      hideOnScroll: false,
      items: [
        {
          type: "doc",
          docId: "quickstart/quickstart",
          position: "left",
          label: "Quickstart",
        },
        {
          type: "doc",
          docId: "messaging-channels/supported-channels",
          position: "left",
          label: "Messaging Channels",
        },
        {
          type: "doc",
          docId: "chatbot_management/overview",
          position: "left",
          label: "Chatbot Management",
        },
        // {
        //   type: "doc",
        //   docId: "actions_hooks/event_engine",
        //   position: "left",
        //   label: "Botpress Concepts",
        // },
        {
          type: "docsVersionDropdown",
          position: "right",
          dropdownItemsAfter: [
            {
              href: "https://v12.botpress.com/",
              label: "v12 (Latest)",
            },
          ],
          dropdownActiveClassDisabled: true,
        },
        {
          type: "search",
          position: "right",
        },
      ],
    },
    footer: {
      style: "light",
      links: [
        {
          title: "Learn",
          items: [
            {
              label: "Quickstart",
              to: "/",
            },
            {
              label: "Messaging Channels",
              to: "messaging-channels/supported-channels",
            },
            {
              label: "Analytics",
              to: "analytics/analytics",
            },
            {
              label: "Misunderstood",
              to: "misunderstood/misunderstood",
            },
            {
              label: "v12 Docs",
              href: "https://v12.botpress.com/",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Forum",
              href: "https://github.com/botpress/botpress/discussions",
            },
            {
              label: "LinkedIn",
              href: "https://www.linkedin.com/company/botpress/",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/getbotpress",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              href: "https://botpress.com/blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/botpress/",
            },
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/botpress",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Privacy",
              href: "https://botpress.com/privacy",
            },
            {
              label: "Terms",
              href: "https://botpress.com/company/terms",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Botpress, Inc.`,
    },
  },
}

module.exports = config
