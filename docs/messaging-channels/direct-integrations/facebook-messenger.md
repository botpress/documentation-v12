---
id: facebook-messenger
title: Facebook Messenger
---

---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import FacebookCommunity from './facebook/community.md'
import FacebookCloud from './facebook/cloud.md'

## Requirements

Messenger requires you to have a Facebook App and a Facebook Page to connect your chatbot to their platform.

### Create a Facebook App

To create a Facebook App, log in to your Facebook account and ensure you have admin rights for the Facebook page to which you want to connect your chatbot.

After that, go to the [Facebook for Developers website](https://developers.facebook.com/), select **My Apps** from the top menu, and create a new app. For more details and assistance, visit the [Facebook developer documentation](https://developers.facebook.com/docs/development)

### Create a Facebook Page

You require if you do not already have a Facebook page to link your chatbot. [You can find details on how to create a new Facebook page here](https://www.facebook.com/pages/creation/).

To link your chatbot to a pre-existing page, you must have an administrator or developer role.

### HTTPS Endpoint to Your Chatbot

Facebook only integrates its apps and services to secured endpoints. Below are tutorials to help you create an HTTPS endpoint if you do not have one:

- Create an HTTPS tunnel to your machine using Ngrok ([Tutorial](https://api.slack.com/tutorials/tunneling-with-ngrok)).
- Using Nginx and Let's Encrypt. This tutorial bases on the Linux Ubuntu 16.04 Operating System. [**Tutorial**](https://www.digitalocean.com/community/tutorials/how-to-secure-nginx-with-let-s-encrypt-on-ubuntu-16-04).
- Create an HTTPS tunnel to your machine using Serveo ([Tutorial](https://medium.com/automationmaster/how-to-forward-my-local-port-to-public-using-serveo-4979f352a3bf)).

## Installation

You have 2 ways to setup your Messenger channel. The commmunity and the cloud version.

  <Tabs>
  <TabItem value="community" label="Community" default>
  <FacebookCommunity/>
  </TabItem>
  <TabItem value="cloud" label="Cloud">
  <FacebookCloud/>
  </TabItem>
  </Tabs>

### Greeting Text

```json
"greeting": "Hello, I'm your chatbot!"
```

Your chatbot's Messenger profile's greeting property allows you to specify the greeting message people will see on your chatbot's welcome screen. Your chatbot will display the welcome screen for people interacting with your chatbot for the first time.

Read more about [greeting](https://developers.facebook.com/docs/messenger-platform/reference/messenger-profile-api/greeting).

### Get Started

```json
"getStarted": "<GET_STARTED_PAYLOAD>"
```

The **Get Started** button will allow you to send a pro-active message to your chat with the user. The Page Messenger welcome screen displays this **Get Started** button. When clicked, this button the Messenger Platform will send a `messaging_postbacks` event to your webhook. You can also configure a greeting message after you add the **Get Started** button.

Read more about [get started](https://developers.facebook.com/docs/messenger-platform/reference/messenger-profile-api/get-started-button).

### Persistent Menu

The persistent menu allows you to have an always-on user interface element inside Messenger conversations. It is an easy way to help people discover and access your Messenger chatbot's core functionality at any point in the conversation.

Read more about persistent menu [here](https://developers.facebook.com/docs/messenger-platform/send-messages/persistent-menu).

:::note
The persistent menu is cached locally on the user's client, with updates fetched periodically. If you change the persistent menu, it can take some time for the menu to update. You can force a refresh by deleting the conversation and starting a new one.
:::

**Persistent Menu object example**:

```json
 "persistentMenu": [
    {
      "locale": "default",
      "call_to_actions": [
        {
          "title": "My Account",
          "type": "nested",
          "call_to_actions": [
            {
              "title": "Pay Bill",
              "type": "postback",
              "payload": "PAYBILL_PAYLOAD"
            },
            {
              "type": "web_url",
              "title": "Latest News",
              "url": "https://www.messenger.com/",
              "webview_height_ratio": "full"
            }
          ]
        }
      ]
    }
  ]
```
