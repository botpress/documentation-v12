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
    overviewsidebar: [
      {
      type: 'category',
      collapsible: false,
      label: 'Botpress Documentation',
      items: [
        {
        type: 'category',
        collapsible: false,
        label: 'GETTING STARTED',
        items: [
          'overview/what-is-botpress',
          {
          type: 'category',
          collapsible: true,
          label: 'Quickstart',
          items: [
            'overview/quickstart/installation',
            'overview/quickstart/building-a-bot',
            'overview/quickstart/admin-dashboard',
            'overview/quickstart/conversation-studio',
          ],
          },
        ],
        },
       ],
      },
    ],
    buildingchatbotssiderbar: [
        {
        type: 'category',
        collapsible: false,
        label: 'Getting Started',
        items: [
          'building-chatbots/creating-a-new-bot',
          'building-chatbots/studio-interface',
        ], 
        },
        {
        type: 'category',
        collapsible: false,
        label: 'Flow Editor',
        items: [
          {
            type: 'category',
            collapsible: true,
            label: 'Flow Lifecycle',
            items: [
              'building-chatbots/flow-editor/flow-lifecycle/nodes-lifecycle',
              'building-chatbots/flow-editor/flow-lifecycle/custom-transitions',
              'building-chatbots/flow-editor/flow-lifecycle/flow-wide-transitions',
            ],
            },
            {
              type: 'category',
              collapsible: true,
              label: 'Content Elements',
              items: [
                'building-chatbots/flow-editor/content-elements/content-text',
                'building-chatbots/flow-editor/content-elements/content-image',
                'building-chatbots/flow-editor/content-elements/content-video',
                'building-chatbots/flow-editor/content-elements/content-card',
                'building-chatbots/flow-editor/content-elements/content-carousel',
                'building-chatbots/flow-editor/content-elements/custom-content-elements', 
              ],
              },
              {
                type: 'category',
                collapsible: true,
                label: 'Actions',
                items: [
                  'building-chatbots/flow-editor/actions/built-in-actions',
                  'building-chatbots/flow-editor/actions/custom-actions',
                ],
                },
                {
                  type: 'category',
                  collapsible: true,
                  label: 'Skill Nodes',
                  items: [
                    'building-chatbots/flow-editor/skill-nodes/single-choice',
                    'building-chatbots/flow-editor/skill-nodes/api-call',
                    'building-chatbots/flow-editor/skill-nodes/slot-filling',
                    'building-chatbots/flow-editor/skill-nodes/send-email',
                    'building-chatbots/flow-editor/skill-nodes/auth-gate',
                    'building-chatbots/flow-editor/skill-nodes/custom-skills', 
                  ],
                  },
        ],
        },
        {
          type: 'category',
          collapsible: false,
          label: 'Language Understanding',
          items: [
            'building-chatbots/language-understanding/supported-languages',
            {
              type: 'category',
              collapsible: true,
              label: 'Questions & Answers',
              items: [
                'building-chatbots/language-understanding/questions-&-answers/rich-messages',
                'building-chatbots/language-understanding/questions-&-answers/workflow-triggering',
                'building-chatbots/language-understanding/questions-&-answers/bulk-import-export',
                'building-chatbots/language-understanding/questions-&-answers/feedback',
              ],
              },
              {
                type: 'category',
                collapsible: true,
                label: 'Intents',
                items: [
                  'building-chatbots/language-understanding/intents/slots',
                  'building-chatbots/language-understanding/intents/spell-checking', 
                ],
                },
                {
                  type: 'category',
                  collapsible: true,
                  label: 'Entities',
                  items: [
                    'building-chatbots/language-understanding/entities/system-entities',
                    'building-chatbots/language-understanding/entities/list-entities',
                    'building-chatbots/language-understanding/entities/pattern-entities',
                ],
                },
                'building-chatbots/language-understanding/contexts',
                'building-chatbots/language-understanding/external-nlu-engines',
          ],
          },
        ],
      };