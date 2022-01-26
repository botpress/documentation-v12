/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

module.exports = {
    sidebar: [
      {
      type: 'category',
      collapsible: false,
      label: 'Botpress Documentation',
      items: [
        {
        type: 'category',
        collapsible: true,
        label: 'Getting Started',
        items: [
          'overview/what-is-botpress',
          {
          type: 'category',
          collapsible: true,
          label: 'Quickstart',
          items: [
            'overview/quickstart/installation',
            'overview/quickstart/building-a-bot',
          ],
          },
        ],
        },
      ],
    },
  ],
};