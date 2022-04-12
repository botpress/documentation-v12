---
id: smooch-sunshine-conversations
title: Smooch (Sunshine Conversations)
---

---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import SmoochLocal from './smooch/local.md'
import SmoochCloud from './smooch/cloud.md'

## Requirements

- An HTTPS Endpoint to your chatbot:

  - Set the `externalUrl` field in `botpress.config.json`;
  - Create an HTTPS tunnel to your machine using Ngrok ([tutorial](https://api.slack.com/tutorials/tunneling-with-ngrok));
  - Using Nginx and Let's Encrypt ([tutorial](https://www.digitalocean.com/community/tutorials/how-to-secure-nginx-with-let-s-encrypt-on-ubuntu-16-04)).

- A [smooch.io](https://smooch.io/) account (you will need a business email).

## Setup

### Smooch App

1. On the `app.smooch.io` home page, click on **Create new app.**

2. Enter a name for your app and click **Create App**.

3. Connect a channel to your app (Telegram, Whatsapp, or any other listed channel).

4. You should see a channel in the **Overview** section of your app.

### Botpress Connection

1. Go to the **Settings** section of your app.

2. At the bottom, you will find an **API Keys** menu. Create a new API key.

3. You will need the `id` (the one that starts with app) and `secret` key to setup your bot.

## Channel Configuration

  <Tabs>
  <TabItem value="community" label="Local deployment" default>
  <SmoochLocal/>
  </TabItem>
  <TabItem value="cloud" label="Cloud deployment (beta)">
  <SmoochCloud/>
  </TabItem>
  </Tabs>
