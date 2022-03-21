module.exports = [
    {
        type: "category",
        collapsible: false,
        label: "Start Botpress",
        items: [
          "going-to-production/deploy/docker-compose",
          "going-to-production/deploy/windows",
          "going-to-production/deploy/linux",
        ],
    },
    {
      type: "category",
      collapsible: false,
      label: "Use channels integrations",
      items: [
        "messaging-channels/direct-integrations/facebook-messenger",
        "messaging-channels/direct-integrations/microsoft-teams",
        "messaging-channels/direct-integrations/slack",
        "messaging-channels/direct-integrations/telegram",
        "messaging-channels/botpress-webchat/standalone-webchat",
        "messaging-channels/custom-channels/converse-api",
        "messaging-channels/broker-integrations/twilio",
        "messaging-channels/broker-integrations/vonage",
        "messaging-channels/broker-integrations/smooch-sunshine-conversations",
      ],
    },
    {
      type: "category",
      collapsible: false,
      label: "Use content-elements",
      items: [
        "how-tos/content-elements/card",
        "how-tos/content-elements/carousel",
        "how-tos/content-elements/image",
        "how-tos/content-elements/text",
        "how-tos/content-elements/video",
      ],
    },
  ]
  