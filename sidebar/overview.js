module.exports = [
  {
    type: "category",
    collapsible: false,
    label: "Getting Started",
    items: [
      "overview/what-is-botpress",
      {
        type: "category",
        collapsible: true,
        label: "Quickstart",
        items: [
          "overview/quickstart/installation",
          "overview/quickstart/building-a-bot",
          "overview/quickstart/admin-dashboard",
          "overview/quickstart/conversation-studio",
        ],
      },
      "overview/features",
      {
        type: 'category',
        label: '<h1>Cloud</h1>',
        collapsible: true,
        items: [
          "overview/cloud/first-chatbot",
        ]
      }
    ],
  },
  {
    type: 'category',
    label: 'Cloud',
    collapsible: true,
    items: [
      "overview/cloud/first-chatbot",
    ]
  }
]
