---
id: from-10-to-11
title: From Version 10.x to 11.x
---

---------------

:::note
You can get more details of the Botpress Framework changes in the [Changelog](https://github.com/botpress/botpress/releases).
:::

This guide shows you how to migrate your bot(s) from Botpress 10.x to Botpress 11.x.

## Bot Content

1. [Launch the new Botpress server](/docs/intro-to-botpress/download-and-start#start-botpress).
1. Create a bot with any name. Your bot files will be in `data/bots/bot-name/`.
1. Copy and paste the content of:
    - `generated/content` in `data/bots/bot-name/content-elements`
    - `generated/flows` in `data/bots/bot-name/flows`
    - `generated/intents` in `data/bots/bot-name/intents`
    - `generated/qna` in `data/bots/bot-name/qna`

:::info infos
- We no longer support `bp.dialogEngine.registerActions`. Each registered actions must be in a separate `.js` file in the folder `data/global/actions`.
- We change the concept of custom logic in `index.js`, such as in `bp.hear`: we replaced it with [hooks](/docs/conversation-studio/code-editor/hooks).
- We similarly handle content types, but we bundled the UI and Renderers in a single file.
:::

## Event Parameters Standardization

The term `platform` was replaced with `channel`. We now refer to a user/group with `target`. All other parameters related to the event type are stored in `payload`. 

:::note
When you send a message to a user, the payload is given to the content renderer, which returns the channel-specific payload.
:::

```js
const event = {
  target: 'user1234',
  channel: 'web',
  type: 'text',
  payload: {
    text: 'Hello there',
    typing: true
  }
  preview: 'Hello there'
}
```

## Database - Manual Changes

### Table kvs

The `kvs` table was renamed `srv_kvs` and the column `botId` was added.

### Table web_conversations

The column `botId` was added.

### Table user_tags

This concept is now deprecated, and there is no replacement in 11 versions.

### Table users

The table is now called `srv_channel users`. 

:::note
Custom fields have been removed in favor of attributes. Those are stored as JSON in the `attributes` column, which gives you more flexibility if you want to add more data to users.
:::

### Table notifications

The table was renamed `srv_notifications` and the column `botId` was added.

### Table logs

The table was renamed `srv_logs`. 

:::note
Multiple columns were changed.
:::

### Table hitl_sessions

The column `botId` was added.
