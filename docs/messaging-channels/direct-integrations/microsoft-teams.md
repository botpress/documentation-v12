---
id: microsoft-teams
title: Microsoft Teams
---

---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import TeamsLocal from './teams/local.md'
import TeamsCloud from './teams/cloud.md'

## Requirements

### Configure Microsoft Account

Your Microsoft Account should have access to Azure and Teams. You can check out the [Azure](https://docs.microsoft.com/en-us/azure/devops/?view=azure-devops) and [Teams](https://docs.microsoft.com/en-us/microsoftteams/) documentation for information on how to make these connections.

### Configure HTTPS Endpoint

To connect to Microsoft Teams, an HTTPS endpoint is required. This is set in the `externalUrl` field in `botpress.config.json`. You can use the following methods to create this endpoint:

- Create an HTTPS tunnel to your machine using Ngrok. This tutorial works on pretty much any Operating System ([Tutorial](https://api.slack.com/tutorials/tunneling-with-ngrok)).
- Using Nginx and Let's Encrypt. This tutorial is based on the Linux Ubuntu 16.04 Operating System ([Tutorial](https://www.digitalocean.com/community/tutorials/)how-to-secure-nginx-with-let-s-encrypt-on-ubuntu-16-04)).
- Use Serveo to create an HTTPS tunnel to your machine ([**Tutorial**](https://medium.com/automationmaster/how-to-forward-my-local-port-to-public-using-serveo-4979f352a3bf)).

:::note

To test on localhost, you can also use services like [pagekite](https://pagekite.net/) or [tunnelme](https://localtunnel.github.io/www/) to expose your server.

:::

### Before Getting Started...

Since the framework V4 is still in active development, some of these instructions may be slightly different. If you ever get stuck, check the [Official Bot Framework documentation](https://docs.microsoft.com/en-us/microsoftteams/platform/concepts/bots/bots-create).

## Channel Configuration

  <Tabs>
  <TabItem value="community" label="Local deployment" default>
  <TeamsLocal/>
  </TabItem>
  <TabItem value="cloud" label="Cloud deployment (beta)">
  <TeamsCloud/>
  </TabItem>
  </Tabs>
