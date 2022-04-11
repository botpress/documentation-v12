---
id: telegram
title: Telegram
---

---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import TelegramCommunity from './telegram/community.md'
import TelegramCloud from './telegram/cloud.md'

## Requirements

- An HTTPS Endpoint to your chatbot:

  - Set the `externalUrl` field in `botpress.config.json`
  - Create an HTTPS tunnel to your machine using Ngrok ([Tutorial](https://api.slack.com/tutorials/tunneling-with-ngrok)).
  - Using Nginx and Let's Encrypt ([Tutorial](https://www.digitalocean.com/community/tutorials/how-to-secure-nginx-with-let-s-encrypt-on-ubuntu-16-04)).

### Create a Bot

To create a bot on Telegram, use Telegram's [BotFather](https://t.me/botfather). The BotFather will ask you for a name and username, then generate an authorization token for your new bot.

The name of your bot is displayed in contact details and elsewhere.

The Username is a short name to be used in mentions and t.me links. Usernames are 5-32 characters long and are case insensitive but may only include Latin characters, numbers, and underscores. Your bot's username must end in `bot`, such as `tetris_bot` or `TetrisBot`.

## Installation

You have 2 ways to setup your slack channel. The commmunity and the cloud version.

  <Tabs>
  <TabItem value="community" label="Community" default>
  <TelegramCommunity/>
  </TabItem>
  <TabItem value="cloud" label="Cloud">
  <TelegramCloud/>
  </TabItem>
  </Tabs>
