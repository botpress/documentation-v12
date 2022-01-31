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
    overviewSidebar: [
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
          'overview/features',
        ],
        },
       ],
      },
    ],
    buildingChatbotsSiderbar: [
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
                  'building-chatbots/qna/qna-item/question-variations',
                  'building-chatbots/qna/qna-item/answer-and-alternate',
                  'building-chatbots/qna/qna-item/rich-context-as-answer',
                  'building-chatbots/qna/qna-item/context',
                  'building-chatbots/qna/qna-item/trigger-a-flow',
                  'building-chatbots/qna/qna-item/enable-disable',
                  'building-chatbots/qna/qna-item/convert-to-intent',
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
        messagingChannelsSidebar: [
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
          label: 'Broker Integrations',
          items: [
            'messaging-channels/broker-integrations/twilio',
            'messaging-channels/broker-integrations/vonage',
            'messaging-channels/broker-integrations/smooch-sunshine-conversations',
            ],
          },
          {
            type: 'category',
            collapsible: false,
            label: 'Custom Channels',
            items: [
              'messaging-channels/custom-channels/converse-api',
              ],
            },
        ],
        goingToProductionSidebar: [
          {
          type: 'category',
          collapsible: false,
          label: 'On-Premise Deployment',
          items: [
            {
              type: 'category',
              collapsible: true,
              label: 'Deploy',
              items: [
                'going-to-production/deploy/linux',
                'going-to-production/deploy/windows',
                'going-to-production/deploy/aws',
                'going-to-production/deploy/digitalocean',
                'going-to-production/deploy/docker-compose',
                'going-to-production/deploy/enterprise-scaling',
            ],
            },
            {
              type: 'category',
              collapsible: true,
              label: 'Hardware & Software Requirements',
              items: [
                'going-to-production/requirements/benchmarking',
              ],
            },
            'going-to-production/environment-variables',
            'going-to-production/updating',
          ],
        },
            {
            type: 'category',
            collapsible: false,
            label: 'Development Lifecycle',
            items: [
              {
                type: 'category',
                collapsible: true,
                label: 'Environments',
                items: [
                  'going-to-production/development-lifecycle/environments/read-write-production',
                  'going-to-production/development-lifecycle/environments/read-only-production',
                  'going-to-production/development-lifecycle/environments/multi-stage-environment',
                ],
              },
              'going-to-production/development-lifecycle/versioning',
              'going-to-production/development-lifecycle/import-export',
              ],
            },
        {
          type: 'category',
          collapsible: false,
          label: 'Migrations',
          items: [
            'going-to-production/migrations/chatbot-migrations',
            'going-to-production/migrations/environment-migrations',
            ],
          },
        ], 
        chatbotManagementSidebar: [
          {
          type: 'category',
          collapsible: false,
          label: 'Analytics',
          items: [
            {
              type: 'category',
              collapsible: true,
              label: 'Chatbot Analytics',
              items: [
                'chatbot-management/chatbot-analytics/built-in-analytics',
                'chatbot-management/chatbot-analytics/custom-analytics',
            ],
            },
            {
              type: 'category',
              collapsible: true,
              label: 'Language Understanding',
              items: [
                'chatbot-management/language-understanding/misunderstood',
              ],
        },
            {
            type: 'category',
            collapsible: false,
            label: 'Agent Handover',
            items: [
              {
                type: 'category',
                collapsible: true,
                label: 'Human in the Loop (HITL)',
                items: [
                  'chatbot-management/agent-handover/human-in-the-loop/hitl',
                  'chatbot-management/agent-handover/human-in-the-loop/hitlnext',
                  'chatbot-management/agent-handover/human-in-the-loop/integrations',
                ],
              },
            ],
          },
            {
              type: 'category',
              collapsible: false,
              label: 'Broadcast',
              items: [
                'chatbot-management/broadcast',
              ],
            },
        ], 
        },
      ],
      enterpriseSidebar: [
        {
        type: 'category',
        collapsible: false,
        label: 'Enterprise',
        items: [
          {
            type: 'category',
            collapsible: true,
            label: 'Licensing',
            items: [
              'enterprise/licensing/enterprise-licensing',
          ],
          },
          {
            type: 'category',
            collapsible: true,
            label: 'User Management and Security',
            items: [
              {
                type: 'category',
                collapsible: true,
                label: 'Role-Based Access Control (RBAC)',
                items: [
                  'enterprise/user-management-and-security/role-based-access-control/roles',
                  'enterprise/user-management-and-security/role-based-access-control/collaborators',
                ],
              },
              {
                type: 'category',
                collapsible: true,
                label: 'Authentication Methods',
                items: [
                  'enterprise/user-management-and-security/authentication-methods/basic-authentication',
                  'enterprise/user-management-and-security/authentication-methods/saml',
                  'enterprise/user-management-and-security/authentication-methods/oauth2',
                  'enterprise/user-management-and-security/authentication-methods/ldap',
                ],
              },
              {
                type: 'category',
                collapsible: true,
                label: 'Single-Sign On (SSO)',
                items: [
                  'enterprise/user-management-and-security/single-sign-on/sso-with-google-oauth2',
                  'enterprise/user-management-and-security/single-sign-on/sso-with-github-oauth2',
                  'enterprise/user-management-and-security/single-sign-on/azure-oauth2',
                ],
              },
            ],
      },
          {
          type: 'category',
          collapsible: false,
          label: 'Server and CICD Management',
          items: [
            'enterprise/server-and-cicd-management/production-checklist',
            'enterprise/server-and-cicd-management/monitoring',
            'enterprise/server-and-cicd-management/alerting',
            {
              type: 'category',
              collapsible: true,
              label: 'Pipelines',
              items: [
                'enterprise/server-and-cicd-management/pipelines/configure-pipeline',
                'enterprise/server-and-cicd-management/pipelines/promote-through-pipeline',
                'enterprise/server-and-cicd-management/pipelines/revisions-and-rollback',
              ],
            },
          ],
        },
          {
            type: 'category',
            collapsible: false,
            label: 'Advanced Chatbots',
            items: [
              {
                type: 'category',
                collapsible: true,
                label: 'Multi-lingual Chatbots',
                items: [
                  'enterprise/advanced-chatbots/multi-lingual-chatbots/language-understanding',
                  'enterprise/advanced-chatbots/multi-lingual-chatbots/content-management',
                  'enterprise/advanced-chatbots/multi-lingual-chatbots/switching-languages',
                ],
              },
            ],
          },
      ], 
      },
    ],
    };

