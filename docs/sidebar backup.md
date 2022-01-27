              type: 'category',
              collapsible: true,
              label: 'Testing & Debugging',
              items: [
                'building-chatbots/testing-&-debugging/emulator',
                'building-chatbots/testing-&-debugging/debugger',
                'building-chatbots/testing-&-debugging/automated-testing',
              ],
              },
              {
              type: 'category',
              collapsible: true,
              label: 'Memory & Data Persistence',
              items: [
                'building-chatbots/memory-&-data-persistence/flow-memory',
                'building-chatbots/memory-&-data-persistence/user-memory',
                'building-chatbots/memory-&-data-persistence/session-memory',
                'building-chatbots/memory-&-data-persistence/general-purpose-storage',
              ],
              },
              {
                type: 'category',
                collapsible: true,
                label: 'QnA',
                items: [
                  'building-chatbots/qna/question-variations',
                  'building-chatbots/qna/answer-and-alternate',
                  'building-chatbots/qna/rich-context-as-answer',
                  'building-chatbots/qna/context',
                  'building-chatbots/qna/trigger-a-flow',
                  'building-chatbots/qna/enable-disable',
                  'building-chatbots/qna/convert-to-intent',
                ],
                },
                {
                  type: 'category',
                  collapsible: true,
                  label: 'Developers',
                  items: [
                    {
                      type: 'category',
                      collapsible: true,
                      label: 'Code Execution',
                      items: [
                        'building-chatbots/developers/code-execution/sdk',
                        'building-chatbots/developers/code-execution/code-sharing',
                        'building-chatbots/developers/code-execution/import-nodejs-libraries',
                        'building-chatbots/developers/code-execution/environment-variables',
                      ],
                      },
                      {
                      type: 'category',
                      collapsible: true,
                      label: 'Hooks',
                      items: [
                        'building-chatbots/developers/hooks/conversation-hooks',
                        'building-chatbots/developers/hooks/server-hooks',
                        'building-chatbots/developers/hooks/ci-cd-hooks',
                      ],
                      },
                    'building-chatbots/developers/database',
                    'building-chatbots/developers/file-system',
                    'building-chatbots/developers/custom-modules',
                    'building-chatbots/developers/inter-bot-communication-delegation',
                  ],
                },
              ],
              },

    messagingchannelssidebar: [
        {
        type: 'category',
        collapsible: false,
        label: 'Overview',
        items: [
          'messaging-channels/supported-channels',
          ],
        },
        {
        type: 'category',
        collapsible: false,
        label: 'Botpress Webchat',
        items: [
          {
          type: 'category',
          collapsible: true,
          label: 'Website Embedding',
          items: [
            'messaging-channels/botpress-webchat/website-embedding/website-interactions',
            'messaging-channels/botpress-webchat/website-embedding/jwt-authentication',
          ],
          },
          'messaging-channels/botpress-webchat/standalone-webchat',
          {
          type: 'category',
          collapsible: true,
          label: 'Customizations',
          items: [
            'messaging-channels/botpress-webchat/customizations/custom-widgets',
            'messaging-channels/botpress-webchat/customizations/custom-css',
            'messaging-channels/botpress-webchat/customizations/welcome-screen',
            ],
          },
        ],
      },
          {
          type: 'category',
          collapsible: false,
          label: 'Direct Integrations',
          items: [
            'messaging-channels/direct-integrations/facebook-messenger',
            'messaging-channels/direct-integrations/microsoft-teams',
            'messaging-channels/direct-integrations/slack',
            'messaging-channels/direct-integrations/telegram',
            ],
          },
      {
        type: 'category',
        collapsible: false,
        label: 'Direct Integrations',
        items: [
          'messaging-channels/direct-integrations/facebook-messenger',
          'messaging-channels/direct-integrations/microsoft-teams',
          'messaging-channels/direct-integrations/slack',
          'messaging-channels/direct-integrations/telegram',
          ],
        },
      ],
    };

