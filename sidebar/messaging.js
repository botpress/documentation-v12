module.exports = [
  {
    type: "category",
    collapsible: false,
    label: "Support",
    items: ["messaging-channels/supported-channels"],
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
      "messaging-channels/broker-integrations/smooch-sunshine-conversations",
    ],
  },
]
