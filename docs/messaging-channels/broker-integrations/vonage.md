---
id: vonage
title: Vonage
---

---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import VonageLocal from './vonage/local.md'
import VonageCloud from './vonage/cloud.md'

:::note
Currently, only WhatsApp is supported on this channel.
:::

## Prerequisite

- An HTTPS Endpoint to your bot

  - Set the externalUrl field in `botpress.config.json`
  - Create an HTTPS tunnel to your machine using Ngrok. Tutorial
  - Using Nginx and Let's Encrypt. Tutorial

- [Create a Vonage Account](https://dashboard.nexmo.com/sign-up)
- [Create a Vonage Application](https://dashboard.nexmo.com/applications/new)

  - Give it a name
  - Under `Authentication`, click **Generate public and private key** (this will download a file called `private.key`. You will need this file later on.)
  - Click **Generate new application**

## Channel Configuration

<Tabs>
  <TabItem value="community" label="Local deployment" default>
    <VonageLocal/>
  </TabItem>
  <TabItem value="cloud" label="Botpress Cloud (beta)">
  <VonageCloud/>
  </TabItem>
</Tabs>
