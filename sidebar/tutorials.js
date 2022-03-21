module.exports = [
    {
      type: "category",
      collapsible: false,
      label: "Overview",
      items: [
        "tutorials/installation",
        {
            type: "category",
            collapsible: true,
            label: "Quickstart",
            items: [
              "tutorials/quickstart/building-a-bot",
              "tutorials/quickstart/admin-dashboard",
              "tutorials/quickstart/conversation-studio"
            ],
        },
      ],
    },
    {
      type: "category",
      collapsible: true,
      label: "Going to Production",
      items: [
        "going-to-production/deploy/deploy",
      ],
    },
    {
      type: "category",
      collapsible: true,
      label: "Building your first Chatbot",
      items: [
        "tutorials/first-time/0-developer-environment",
        "tutorials/first-time/1-chatbot",
        "tutorials/first-time/2-flow",
        "tutorials/first-time/3-skill",
        "tutorials/first-time/4-action",
        "tutorials/first-time/5-utterance",
        "tutorials/first-time/6-qna",
        "tutorials/first-time/7-train",
        "tutorials/first-time/next",
        "building-chatbots/creating-a-new-bot",
        {
          type: "category",
          collapsible: true,
          label: "Advance tutorials",
          items: [
            "tutorials/advance/action-advance",
            "tutorials/advance/slot",
            "tutorials/advance/start-database",
            "tutorials/advance/start-language"
          ],
      },
      ],
    }
  ]
  