module.exports = [
  {
    type: "category",
    collapsible: false,
    label: "Language Understanding",
    items: ["chatbot-management/language-understanding/misunderstood"],
  },
  {
    type: "category",
    collapsible: false,
    label: "Analytics",
    items: [
      {
        type: "category",
        collapsible: true,
        label: "Chatbot Analytics",
        items: [
          "chatbot-management/chatbot-analytics/built-in-analytics",
          "chatbot-management/chatbot-analytics/custom-analytics",
        ],
      },
    ],
  },
  {
    type: "category",
    collapsible: false,
    label: "Agent Handover",
    items: [
      {
        type: "category",
        collapsible: true,
        label: "Human in the Loop (HITL)",
        items: [
          "chatbot-management/agent-handover/human-in-the-loop/hitl",
          "chatbot-management/agent-handover/human-in-the-loop/hitlnext",
          "chatbot-management/agent-handover/human-in-the-loop/integrations",
        ],
      },
    ],
  },
  {
    type: "category",
    collapsible: false,
    label: "Broadcast",
    items: ["chatbot-management/broadcast"],
  },
]
