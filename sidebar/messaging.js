module.exports = [
  {
    type: "category",
    collapsible: false,
    label: "Overview",
    items: ["messaging-channels/supported-channels"],
  },
  {
    type: "category",
    collapsible: false,
    label: "Webchat",
    items: [
      "messaging-channels/botpress-webchat/website-embedding/website-embedding",
    ],
  },
  {
    type: "category",
    collapsible: false,
    label: "Direct Integrations",
    items: [
      "messaging-channels/direct-integrations/facebook-messenger",
      "messaging-channels/direct-integrations/microsoft-teams",
      "messaging-channels/direct-integrations/slack",
      "messaging-channels/direct-integrations/telegram",
    ],
  },
  {
    type: "category",
    collapsible: false,
    label: "Broker Integrations",
    items: [
      "messaging-channels/broker-integrations/twilio",
      "messaging-channels/broker-integrations/vonage",
      "messaging-channels/broker-integrations/sunco",
    ],
  },
]
