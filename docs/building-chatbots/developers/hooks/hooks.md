---
id: hooks
title: Hooks
---

--------------------

Hooks are a handy way to execute JavaScript code (similar to that of actions) when specific events occur.

They are defined globally as JavaScript files in the folder `data/global/hooks/${hookName}`. You can add as many files as you want in this folder; they will be processed sequentially, in alphabetical order.

:::note
Subfolders are allowed but ignored in the ordering.
:::

Hooks have access to the [Botpress SDK](https://botpress.com/reference/).

## Disabling Hooks

Botpress will ignore files starting with a dot (`.`). This way, you can disable a hook or action by prefixing the file's name with a dot.

## Types of Hooks

Hooks are differentiated using the point in the event engine when they are executed. The following are instances where you can inject hooks into your code.

### After Server Starts

This event is called once all modules and bots are loaded and the bot is ready to accept incoming connections.

Location: `data/global/hooks/after_server_start`

Parameters: `bp`

### After Bot Mount

This event is called every time a bot is mounted, be it when the server starts up or when adding new bots at runtime.

Location: `data/global/hooks/after_bot_mount`

Parameters: `bp`, `botId`

### After Bot Unmount

Every time a bot is unmounted, Botpress calls this event to clean up after deleting a bot.

Location: `data/global/hooks/after_bot_unmount`

Parameters: `bp`, `botId`

### Before Incoming Middleware

Botpress calls this hook after receiving an event but before processing any middleware. It is possible to change event properties.

Location: `data/global/hooks/before_incoming_middleware`

Parameters: `bp`, `event`

Botpress often uses this hook to set flags to skip some processing, for example, to prevent the module QNA from processing it when it's a quick reply:

```js
if (event.type === 'quick_reply') {
  event.setFlag(bp.IO.WellKnownFlags.SKIP_QNA_PROCESSING, true)
}
```

### After Incoming Middleware

This hook is called right after all incoming middlewares processed the event but before the Dialog Engine starts processing it. You can access all the required data (including NLU intent) for special processing and decide what happens to the event.

Location: `data/global/hooks/after_incoming_middleware`

Parameters: `bp`, `event`

A typical operation here is to tell Botpress to ignore the event and not process it (e.g., not sending it to the dialog engine).

Here is an example:

```js
const messageTypesToDiscard = ['session_reset', 'typing', 'visit', 'session_reference']

if (messageTypesToDiscard.includes(event.type)) {
  event.setFlag(bp.IO.WellKnownFlags.SKIP_DIALOG_ENGINE, true)
}
```

### Before Outgoing Middleware

The Dialogue Manager calls this hook before the bot's reply is sent to the user.

Location: `data/global/hooks/before_outgoing_middleware`

Parameters: `bp`, `event`

Here you can save the bot's complete response.

### Before Session Timeout

This hook is called right before a user timeouts on a node.

Location: `data/global/hooks/before_session_timeout`

Parameters: `bp`, `event`

### Before Conversation End

This hook is called right before a conversation ends.

Location: `data/global/hooks/before_conversation_end`

Parameters: `bp`, `event`

### Before Suggestions Election

This hook is called after the Decision Engine Ranking but before the Suggestion Election. Doing so allows you to override the Decision Engine's ranking by directly altering the `event.suggestions` array.

Location: `data/global/hooks/before_suggestions_election`

Parameters: `bp`, `event`, `suggestions`, `sessionId`

A typical operation here is to add a new (elected) suggestion when there is no elected winner.

## Built-in Skills

Botpress comes preloaded with some rudimentary skills. Let us look at these; we are confident that you will use them when building your next chatbot!

### Choice Skill
This skill is a spin-off from the realization that most chatbot conversations will eventually have a question with hardcoded choices as answers. Although a content element lets the user select buttons to pick a response, the choice skill adds a few more caveats to that content element, which we will explore here.

![Single Choice Content Element](/assets/single-choice.png)

In addition to just letting you click a button and you are on your way, the choice skill adds a few checks and transitions to the process.

First of all, where freely typed responses are not disabled, the choice skill allows you to add answers which the user might type directly. In this way, the chatbot can understand and classify other responses besides the button click, adding a good measure of flexibility.

![Choice Skill Overview](/assets/choice-skill-entry.png)

The choice skill also allows you to let the user have another go at answering the question asked. In instances where the user might fail to perceive that a button response is required, the chatbot prompts the user to choose from the supplied choices. It is also crucial in cases where the chatbot developer does not pre-empt the freely typed responses. 

If the chatbot doesn't understand a user's answer, it will react by guiding the user on how to respond to the question before asking the question again. 

![Choice Skill Advanced](/assets/choice-skill-tries.png)

The choice skill also offers an option to transition to a different node when the user repeatedly fails to answer a question.

![Choice Skill Flow GUI](/assets/choice-skill-transitions.png)

### Email Skill

The email skill provides a quick way to send emails from within a Botpress workflow.

#### Configuring Email Skill
To send an email using the email skill, you need to configure your chatbot with a transport connection string. Set the configuration string in the directory `...data/global/config/basic-skills.json`. For more information on the mail transporters available and how to configure them, please visit the [Nodemailer documentation](https://nodemailer.com/smtp/#examples)

Here is an example of a configuration using a mail server:

```json
{
  "$schema": "../../assets/modules/basic-skills/config.schema.json",
  "defaultContentElement": "builtin_single-choice",
  "defaultContentRenderer": "#builtin_single-choice",
  "defaultMaxAttempts": 3,
  "disableIntegrityCheck": true,
  "matchNumbers": true,
  "matchNLU": true,
  "transportConnectionString": {
    "host": "192.168.100.200",
    "port": "25",
    "secure": false,
    "tls": {
      "rejectUnauthorized": false
    }
  }
}
```

:::note
Setting `"rejectUnauthorized": false` will prevent the Botpress server from rebooting every time an email fails to send. We recommend that you put in place a fall-back strategy if this happens using the `on failure` transition.
:::

#### Creating your skill
From the Flow Editor view, click on Insert Skill > Send Email. The following interface allows you to insert the information you would fill in using any standard email service.
**From, To, CC & BCC** These fields are filled with email addresses. The _From_ field will be the sender's email address that the recipient will see when receiving an email from your chatbot. You can configure it to any valid email address. 
**Subject** This field contains the subject of the email. You will need to create a content element that will load as the subject line. Please note that it will render as plain text even if you use markdown in the subject line.
**Email Content** Again; this field will load from a content element. Unlike the subject field, you can use markdown, which Botpress will render correctly to the receiver. You can also include HTML to enhance the formatting of your email body further.

It is worthy to note that Botpress supports templating in all fields of your email skill, allowing access to variables stored in [Memory](../main/memory). All `bot`, `user`, `session`, `temp`, and `event` are accessible via templating. To access these variables, reference the memory location.

### Other Skills
Two other skills, namely, the `Call API` and the `Slot Skill` are available in Botpress. You can look up these skills and use them in your chatbot.
