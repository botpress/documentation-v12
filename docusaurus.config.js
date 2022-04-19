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
              label: "Latest",
            },
          },
          editUrl: 'https://github.com/botpress/documentation/edit/main',
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
  themeConfig:
    ({
      announcementBar: {
        id: 'announcementBar-2', // Increment on change
        content: `🤖 If you like botpress, probably you will like the new <a target="_blank" rel="noopener noreferrer" href="https://github.com/botpress/botpress"> botpress cloud beta</a> and follow us on <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/getbotpress">Twitter</a>`,
      },
      metadata: [{ name: "botpress, chatbot", content: "documentation, docs" }, {name:"docsearch:docusaurus_tag", content:"docs-default-current"}],
      algolia: {
        apiKey: process.env.ALGOLIA_API_KEY || "empty",
        appId: process.env.ALGOLIA_APP_ID || "empty",
        indexName: process.env.ALGOLIA_INDEX || "empty",
        contextualSearch: false, //leave it as is. For some reason, activating this adds docusaurus tag facets, thus algolia returns 0 hits.
        searchPagePath: 'search',
      },
      prism: {
        theme: require("./src/utils/prism/lightTheme.js"),
        // additionalLanguages: ["bash", "javascript", "jsx", "tsx", "json"],
      },
      colorMode: {
        defaultMode: "light",
        respectPrefersColorScheme: false,
        disableSwitch: true
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
        hideOnScroll: true,
        items: [
          {
            type: "doc",
            docId: "overview/what-is-botpress",
            position: "left",
            label: "Overview",
          },
          {
            type: "doc",
            docId: "building-chatbots/creating-a-new-bot",
            position: "left",
            label: "Building Chatbots",
          },
          {
            type: "doc",
            docId: "messaging-channels/supported-channels",
            position: "left",
            label: "Messaging Channels",
          },
          {
            type: "doc",
            docId: "going-to-production/deploy/deploy",
            position: "left",
            label: "Going to Production",
          },
          {
            type: "doc",
            docId: "chatbot-management/language-understanding/misunderstood",
            position: "left",
            label: "Chatbot Management",
          },
          {
            type: "doc",
            docId: "enterprise/licensing/enterprise-licensing",
            position: "left",
            label: "Enterprise",
          },
          {
            href: "https://botpress.com/reference/",
            position: "right",
            label: "SDK",
          },
          {
            type: "docsVersionDropdown",
            position: "right",
            dropdownItemsAfter: [
              {
                href: "http://botpress-docs.s3-website-us-east-1.amazonaws.com/docs/installation/",
                label: "v12.26.7",
              },
              {
                href: "http://botpress-docs.s3-website-us-east-1.amazonaws.com/docs/11.9.6/installation/",
                label: "v11.9.6",
              },
              {
                href: "http://botpress-docs.s3-website-us-east-1.amazonaws.com/versions",
                label: "(Older docs) 11.0 to v12.26",
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
            title: "Docs",
            items: [
              {
                label: "Overview",
                to: "/",
              },
              {
                label: "Building Chatbots",
                to: "building-chatbots/creating-a-new-bot",
              },
              {
                label: "Messaging Channels",
                to: "messaging-channels/supported-channels",
              },
              {
                label: "Going to Production",
                to: "going-to-production/deploy",
              },
              {
                label: "Chatbot Management",
                to: "chatbot-management/language-understanding/misunderstood",
              },
              {
                label: "Enterprise",
                to: "enterprise/licensing/enterprise-licensing",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Stack Overflow",
                href: "https://stackoverflow.com/questions/tagged/botpress",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/getbotpress",
              },
              {
                label: "Forum",
                href: "https://github.com/botpress/botpress/discussions",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/botpress/botpress",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Botpress, Inc.`,
      },
    }),
}

module.exports = config
