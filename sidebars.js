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
  introSidebar: [
    {
    type: 'category',
    collapsible: false,
    label: 'Intro to Botpress',
    items: [
      'intro-to-botpress/intro',
      'intro-to-botpress/requirements',
      'intro-to-botpress/download-and-start',
      'intro-to-botpress/update',
      {
        type: 'category',
        collapsible: true,
        label: 'Features',
        items: ['intro-to-botpress/features/overall-product-specifications', 'intro-to-botpress/features/features-within-the-solution', 'intro-to-botpress/features/enterprise-specific-features'],
      },
    ],
    },
    {
    type: 'category',
    collapsible: true,
    label: 'Tutorials',
    items: [
      'intro-to-botpress/tutorials/authentication-methods',
      'intro-to-botpress/tutorials/configuration',
      'intro-to-botpress/tutorials/custom-module',
      'intro-to-botpress/tutorials/debug',
      ],
    },
  ],
  adminSidebar: [
    {
    type: 'category',
    collapsible: false,
    label: 'Admin',
    items: ['admin/admin-intro', 'admin/bots', 'admin/logs', 'admin/code-editor', 'admin/source-control', 'admin/server-license', 'admin/languages', 'admin/modules', 'admin/production-checklist', 'admin/monitoring', 'admin/alerting', 'admin/latest-releases'],
    },
    {
    type: 'category',
    collapsible: true,
    label: 'Tutorials',
    items: ['admin/tutorials/use-tabs'],
    },
  ],
  conversationStudioSidebar: [
    {
    type: 'category',
    collapsible: false,
    label: 'Conversation Studio Tabs',
    items: [
      'conversation-studio/conversation-studio-intro', 
      {
        type: 'category',
        collapsible: true,
        label: 'Flows',
        items: ['conversation-studio/flows/node', 'conversation-studio/flows/choice', 'conversation-studio/flows/call-api', 'conversation-studio/flows/slot-filling', 'conversation-studio/flows/send-email'],
      },
      {
        type: 'category',
        collapsible: true,
        label: 'Content Management',
        items: ['conversation-studio/content-management/audio', 'conversation-studio/content-management/button', 'conversation-studio/content-management/card', 'conversation-studio/content-management/carousel-gallery', 'conversation-studio/content-management/dropdown', 'conversation-studio/content-management/file-attachment', 'conversation-studio/content-management/free-text', 'conversation-studio/content-management/image', 'conversation-studio/content-management/location', 'conversation-studio/content-management/quick-replies-single-choice', 'conversation-studio/content-management/translation-centre', 'conversation-studio/content-management/video'],
      },
      'conversation-studio/nlu-overview',
      {
        type: 'category',
        collapsible: true,
        label: 'Q&A',
        items: ['conversation-studio/q-and-a/context-management', 'conversation-studio/q-and-a/rich-messages', 'conversation-studio/q-and-a/workflow-triggering', 'conversation-studio/q-and-a/bulk-import-export', 'conversation-studio/q-and-a/translation-interface','conversation-studio/q-and-a/message-alternatives'],
      },
      'conversation-studio/libraries',
      'conversation-studio/analytics-overview',
      'conversation-studio/bot-improvement',
      'conversation-studio/broadcast',
      {
        type: 'category',
        collapsible: true,
        label: 'Code Editor',
        items: ['conversation-studio/code-editor/actions', 'conversation-studio/code-editor/hooks', 'conversation-studio/code-editor/libraries', 'conversation-studio/code-editor/configurations', 'conversation-studio/code-editor/module-configurations'],
      },
      'conversation-studio/hitl-next-overview',
      'conversation-studio/misunderstood-overview',
      'conversation-studio/testings',
      'conversation-studio/config',
    ],
    },
    {
      type: 'category',
      collapsible: true,
      label: 'Tutorials',
      items: [,
        'conversation-studio/tutorials/create-conversations', 
        'conversation-studio/tutorials/emulator', 
        'conversation-studio/tutorials/use-module', 
        'conversation-studio/tutorials/use-data', 
        'conversation-studio/tutorials/external-api', 
        'conversation-studio/tutorials/existing-backend', 
        'conversation-studio/tutorials/ui-path',
        'conversation-studio/tutorials/shortlinks',
        'conversation-studio/tutorials/listening-file-changes',
        'conversation-studio/tutorials/inter-bot-communication',
        'conversation-studio/tutorials/advanced/aws',
        'conversation-studio/tutorials/advanced/digital-ocean',
        'conversation-studio/tutorials/advanced/cluster',
        'conversation-studio/tutorials/advanced/database',
        'conversation-studio/tutorials/advanced/deploying',
        'conversation-studio/tutorials/advanced/development-lifecycle',
        'conversation-studio/tutorials/advanced/docker',
        'conversation-studio/tutorials/advanced/heroku',
        'conversation-studio/tutorials/advanced/hosting',
        'conversation-studio/tutorials/advanced/performances',
        'conversation-studio/tutorials/advanced/versions',
        {
          type: 'category',
          collapsible: true,
          label: 'Managing Botpress',
          items: ['conversation-studio/tutorials/managing/acting-proactively', 'conversation-studio/tutorials/managing/rbac', 'conversation-studio/tutorials/managing/ssotools', 'conversation-studio/tutorials/managing/azure-oauth2', 'conversation-studio/tutorials/managing/github-oauth2', 'conversation-studio/tutorials/managing/google-oauth2', 'conversation-studio/tutorials/managing/chat-3rd-party-OAuth'],
        }
      ],
    },
  ],
  messagingSidebar: [
    {
      type: 'category',
      collapsible: false,
      label: 'Messaging',
      items: [
        'messaging/messaging-intro',
        'messaging/botpress-webchat',
        'messaging/facebook-messenger',
        'messaging/http-api',
        'messaging/microsoft-teams',
        'messaging/sms-via-twilio',
        'messaging/slack',
        'messaging/telegram',
        'messaging/twilio',
        'messaging/voice-via-google',
        'messaging/whatsapp',
        'messaging/others'
      ],
    },
  ],
  nluSidebar: [
    {
      type: 'category',
      collapsible: false,
      label: 'NLU',
      items: [
        'nlu/nlu-intro',
        'nlu/intent-classification',
        'nlu/entity-extraction',
        'nlu/language-identification',
        'nlu/slot-tagging',
        'nlu/spell-checking',
      ],
    },
  ],
  businessAppsSidebar: [
    {
      type: 'category',
      collapsible: false,
      label: 'Business Apps',
      items: [
        'business-apps/business-apps-intro',
        {
          type: 'category',
          collapsible: true,
          label: 'Analytics',
          items: ['business-apps/analytics/engagement', 'business-apps/analytics/conversations', 'business-apps/analytics/interactions', 'business-apps/analytics/handling-and-understanding'],
        },
        {
          type: 'category',
          collapsible: true,
          label: 'HITL Next',
          items: ['business-apps/hitl-next/dedicated-user-interface', 'business-apps/hitl-next/user-variables', 'business-apps/hitl-next/conversation-queue-preview-history-labeling', 'business-apps/hitl-next/comments-on-conversations', 'business-apps/hitl-next/shortcuts'],
        },
        'business-apps/hitl',

      ],
    },
  ],
};