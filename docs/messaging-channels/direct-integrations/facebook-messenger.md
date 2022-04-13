---
id: facebook-messenger
title: Facebook Messenger
---

---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import FacebookLocal from './facebook/local.md'
import FacebookCloud from './facebook/cloud.md'

<Tabs>
  <TabItem value="cloud" label="Botpress Cloud (beta)" default>
    <FacebookCloud/>
  </TabItem>
  <TabItem value="community" label="Local deployment">
    <FacebookLocal/>
  </TabItem>
</Tabs>

## Content-type

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
