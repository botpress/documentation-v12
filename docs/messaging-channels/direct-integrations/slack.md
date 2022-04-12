---
id: slack
title: Slack
---

---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import SlackLocal from './slack/local.md'
import SlackCloud from './slack/cloud.md'

## Requirements

### HTTPS Endpoint

To connect to Slack, an HTTPS endpoint is required. Set the `externalUrl` field in `botpress.config.json`. You can use the following methods to create this endpoint:

- Create an HTTPS tunnel to your machine using Ngrok. This tutorial works on pretty much any Operating System ([tutorial](https://api.slack.com/tutorials/tunneling-with-ngrok)).
- Using Nginx and Let's Encrypt. This tutorial is based on the Linux Ubuntu 16.04 Operating System ([tutorial](https://www.digitalocean.com/community/tutorials/how-to-secure-nginx-with-let-s-encrypt-on-ubuntu-16-04)).
- Use Serveo to create an HTTPS tunnel to your machine ([tutorial](https://medium.com/automationmaster/how-to-forward-my-local-port-to-public-using-serveo-4979f352a3bf)).

:::note
To test on localhost, you can also use services like [pagekite](https://pagekite.net/) or [tunnelme](https://localtunnel.github.io/www/) to expose your server.
:::

## Setup

### Create Your Bot

First, you need a bot in Botpress. Take note of your bot's ID.

### Connecting Your Bot to Slack

<Tabs>
  <TabItem value="community" label="Local deployment" default>
    <SlackLocal/>
    </TabItem>
    <TabItem value="cloud" label="Botpress Cloud (beta)">
    <SlackCloud/>
  </TabItem>  
</Tabs>
