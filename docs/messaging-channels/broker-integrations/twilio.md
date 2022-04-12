---
id: twilio
title: Twilio
---

---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import TwilioLocal from './twilio/local.md'
import TwilioCloud from './twilio/cloud.md'

## Prerequisite

- An HTTPS Endpoint to your bot

  - Set the externalUrl field in `botpress.config.json`.
  - Create an HTTPS tunnel to your machine using Ngrok.
  - Using Nginx and Let's Encrypt.

- Create a Twilio account and create a phone number

## Channel Configuration

<Tabs>
  <TabItem value="community" label="Local deployment" default>
    <TwilioLocal/>
  </TabItem>
  <TabItem value="cloud" label="Botpress Cloud (beta)">
    <TwilioCloud/>
  </TabItem>
</Tabs>
