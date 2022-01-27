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
        {
          type: 'category',
          collapsible: false,
          label: 'Testing & Debugging',
          items: [
            'building-chatbots/testing-&-debugging/emulator',
            'building-chatbots/testing-&-debugging/debugger',
            'building-chatbots/testing-&-debugging/automated-testing',
          ],
          },
          {
            type: 'category',
            collapsible: false,
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
            collapsible: false,
            label: 'QnA',
            items: [
              {
                type: 'category',
                collapsible: true,
                label: 'Questions & Answers',
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
              ],
            },
            {
              type: 'category',
              collapsible: false,
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
      };
