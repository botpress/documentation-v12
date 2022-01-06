---
id: overview
title: Flows - Overview
---

---------------

:::caution

Sorry, but this page is under construction!

:::

As you might already know, you need to understand a lot of concepts before freeing your creativity and creating a crazy conversation flow. 

In fact, you certainly have to know the chatbot types, how a chatbot works and what content can be used within it. 


## Chatbot Types
:::note
A chatbot is a computer program that uses conversations as its user interface, called a Conversational User Interface (CUI).
:::

### Rule-Based Chatbots

One word: preconfigured. A rule-based chatbot doesn't understand much about conversations. It usually relies on pre-populated responses (e.g., buttons) or very short answers. As users, our messages rarely influence the chatbot answers. It just moves to the next step after receiving a message or start again with pre-configured replies.

It is:
- cheap;
- easy to implement;
- effective.

And... It solves **specific** issues fast, because the developer built it this way.

### AI-Based Chatbots

:::tip
(Even if you can use both types,) use this kind of chatbot, it's much more user-friendly!
:::

This kind of chatbot understands languages and conversations, and communicates in a human-like way. It extracts useful information from conversations (such as dates, amounts, locations, and so much more) to send you the best possible answer. It also helps streamline conversations by gathering as much information as possible from user responses, making conversations shorter and more concise.

## Chatbot Procedure

The chatbot procedure seems simple when summarized, but trust me, it's not:

1. It _receives_ messages from Messaging channels.
2. It _processes_ these messages to understand, translate, or escalate underlying information.
3. It _decides_ how to respond to the user.

And, then, you can analyze the answers given by your chatbot and customize your bot, so users get more specific and accurate answers to their questions.

### Receiving: Messaging Channels

Think of a channel in the context of communication. Using this definition, we can describe a channel as any chat platform that connects your chatbot to the intended user. Here are the pre-built modules:
 
- Botpress Webchat
- Facebook Messenger
- HTTP API (Converse)
- Microsoft Teams
- SMS via Twilio
- Slack
- Telegram
- Twilio
- Voice via Google
- Whatsapp via Sunshine Conversations, or Vonage, or Twilio
- Others like Instagram, Twitter DM, Viber, etc. via Sunshine Conversations

:::note
In Botpress, channels are installed and configured individually and locally, giving you complete control over the data transmitted between your chatbot and the chat platforms. Botpress does not proxy the messages to a third-party service.
:::

Behind the scenes, Botpress implements a queuing mechanism that processes ingoing and outgoing messages sequentially. If a message fails to be processed or sent for some reason, Botpress will retry the message processing sequence before raising an error to the developer and chatbot administrator.

### Processing: Messages Information

Messages received from messaging channels are then processed. During processing, Botpress extracts data from the text sent by a chat channel user and processes it in the following ways:

1. **Natural Language Understanding (NLU)**

NLU allows your chatbot to process human-written messages into structured data understandable by your chatbot. The main tasks of the NLU engine are:

- Intent Recognition: identifying what the user wants.
- Entity Extraction: obtaining structured information from messages.
- Slot tagging: identifying necessary parameters to fulfill given tasks.
- Language Identification: knowing in which language the user is writing.
- Spell Checking: reviewing for correct spelling, fix typos, and other errors.
- Out of Scope Recognition: identifying instances where the chatbot can't understand.

All of the above will help you create more natural and pleasurable conversations.

2. **Human In The Loop (HITL)**

HITL allows a real person to replace the chatbot within a conversation when the user requests human assistance or when a specific pre-programmed condition is encountered.

Human interventions are often necessary and crucial when the chatbot misunderstand the user intent (such as out-of-scope request or untrained chatbot).

3. **Translation**

In most cases, a chatbot is built using a single language. To reduce chatbot development times, Botpress offers multi-language support with built-in translation tools for users with a Pro license.

### Deciding: Dialog Manager

Once you've received some text from a chat platform and transformed that text into structured data, the next component involved is the Dialog Manager (or DM). The role of the DM is to decide what the chatbot should do or say next.

As you already know, natural dialogs are unpredictable, which increases the complexity of such a state machine exponentially. Adding a bunch of "if" and "else" statements is not a reliable solution. This is why the Flow Editor and the powerful Decision Engine Manager significantly eliminates this complexity. 

Here are quick definitions of these concepts:

1. **Visual Flow Editor**

This interface allows you to configure the conversation flows. It helps you visualize how your chatbot reacts to what kind of messages. You can see the code that will be executed and the messages that will be displayed to the user.

2. **Decision Engine**

This robust component decides whether to follow the next step as dictated by the flow editor or give an alternate response (such as a FAQ from the QnA module or a warning for profane language).

:::note
**Upcoming**: The Botpress core team is currently working on adding statistical decisions to the Dialog Manager, which will allow you to create even more natural experiences while also simplifying development. For instance, if a user asks a question while interacting with a rules-based workflow, the chatbot will answer that question from the QnA module, then return to the workflow.
:::

### Customizing: Extension Points

Botpress allows customization by injecting your self-written code. The two main ways to do so are:

1. **Actions**: called by the Dialog Manager (in the context of a conversation) to retrieve data, call external services, or implement custom reply logic.

2. **Hooks**: code snippets that _always_ get executed in the context they are located. For example, snippets in the `on_server_start` directory get executed when Botpress Server starts.

Here is the file structure that you should use: 

```
bash
botpress-server
├── bp / bp.exe
│
└── data
│ │
│ ├── bots
│ │ └── name-of-your-bot
│ │ ├── bot.config.json # bot-specific configuration
│ │ ├── revisions.json # changelog of bot configurations
│ │ ├── actions <1>
│ │ │ └── custom-code-1.js
│ │ │ └── # etc...
│ │ ├── flows
│ │ └── # etc...(content elements, config, hooks, intents, entities, media, modules, qna)
│ │
│ |── global
│ | ├── actions <1> # shared actions across all bots
│ | ├── hooks <2> # lifecycle hooks (custom code)
│ | ├── botpress.config.json # configuration across all bots
│ | └── # etc... mostly auto-generated by installed modules
| |
│ └── assets
│ ├── modules <1> # assets related to activated modules
│ ├── ui-admin <2> # # assets related to the main admin user interface
│ ├── ui-studio # assets related to the studio user interface
│ └── # etc... 
│
└── modules
├── nlu.tgz
├── webchat.tgz
└── # etc...
```

## Content

After the Dialog Manager has decided how your chatbot should reply to a specific message, the chatbot needs to know the text or other content of the response message and how it should render it on the target chat platform.

### Content Element

A Content Element is a structured object that holds information about what to say (for instance, the text phrase displayed to the user). 

### Content Type

A Content Type defines the nature of what the chatbot sends. Examples are a text message, an image, and a card.

### Content Renderer

A Content Renderer is a function that transforms that structured object into a platform-specific message (for example, making some of the response text bold or italicized on Facebook Messenger).

The purpose of a Content Renderer is to allow developers to specify how the same information should behave (i.e., be displayed) on different chat platforms.

## Modules

A module is an extra component outside of the Botpress Core itself that you can install in your chatbot to add new features to Botpress. Every chatbot uses modules in a way since almost everything in Botpress is a module. 

This modular architecture allows for maximum flexibility and freedom for developers. It also ensures that any customizations are applied without affecting the smooth running of the Botpress Core. 

As a developer, you can create your own custom module to add extra functionalities to your chatbot.

## Event Engine Overview

Below is a complete overview of the components implied in processing an event (ex: a message sent by a user). It is mostly informational, and you won't use most of these components directly. We have included it only to give you an insight into the bigger picture of the elements involved and how they interact.


