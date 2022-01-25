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
    sidebar: [
      {
      type: 'category',
      collapsible: false,
      label: 'Botpress Documentation',
      items: [
      'releases/migrate',
        {
        type: 'category',
        collapsible: true,
        label: 'Getting Started',
        items: [
          'introduction',
          'requirements',
          'installation',
          'quickstart',
          ],
        },
      {
      type: 'category',
      collapsible: true,
      label: 'Building a Chatbot',
      items: [
        'main/overview2',
        'main/content',
        'main/dialog',
        'main/memory',
        'main/emulator',
        'main/qna-module',
        'main/code',
        'main/module',
        'main/broadcast',
        'main/glossary',
        ],
      },
      {
      type: 'category',
      collapsible: true,
      label: 'Natural Language Understanding',
      items: [
        'nlu/intro-nlu',
        'nlu/intent-matching',
        'nlu/entity-extraction',
        'nlu/skill-slot',
        'nlu/improvement',
        'nlu/3rd-party-NLU',
        'nlu/i18n',
        ],
      },
      {
      type: 'category',
      collapsible: true,
      label: 'Channels',
      items: [
        'channels/web',
        'channels/converse',
        'channels/messenger',
        'channels/telegram',
        'channels/teams',
        'channels/twilio',
        'channels/slack',
        'channels/smooch',
        'channels/vonage',
        'channels/faq',
        ],
      },
      {
      type: 'category',
      collapsible: true,
      label: 'Deployment and Infrastructure',
      items: [
        'infrastructure/deploying',
        'infrastructure/hosting',
        'infrastructure/database',
        'infrastructure/aws',
        'infrastructure/docker',
        'infrastructure/performances',
        'infrastructure/pipeline',
        'infrastructure/versions',
        'infrastructure/cluster',
        'infrastructure/digital-ocean',
        ],
      },
      {
      type: 'category',
      collapsible: true,
      label: 'Managing Bots and Users',
      items: [
        'managing/rbac',
        'managing/authentication',
        'managing/ssotools',
        'managing/user-auth',
        'managing/monitoring',
        'managing/proactive',
        'managing/hitl',
        'managing/hitlnext',
        'managing/features',
        ],
      },
      {
      type: 'category',
      collapsible: true,
      label: 'Integrating External Services',
      items: [
        'integrating/existing-backend',
        'integrating/skill-call-api',
        'integrating/external-api',
        'integrating/uipath',
        ],
      },
      {
      type: 'category',
      collapsible: true,
      label: 'Improving Your Chatbot',
      items: [
        'tutorials/carousel-postback',
        'tutorials/skill-email',
        'tutorials/timeouts',
        'tutorials/jump-to',
        'tutorials/contextual-faq',
        ],
      },
      {
      type: 'category',
      collapsible: true,
      label: 'Enterprise Edition',
      items: ['pro/about-pro', 'pro/licensing']
      },
      {
      type: 'category',
      collapsible: true,
      label: 'Advanced Guides',
      items: [
        'advanced/debug',
        'advanced/authentication',
        'advanced/configuration',
        'advanced/custom-module',
        'infrastructure/development-pipeline',
        'advanced/content-type-action',
        'advanced/monitoring',
        ],
      },
      ],
    },
  ],
};