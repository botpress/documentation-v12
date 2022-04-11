## Setup

### Generate an Authorization Token

When you create a Telegram bot, Botfather will automatically generate a token. The token is a string that is required to authorize the bot and send requests to the Bot API. Keep your token secure and store it safely; anyone can use it to control your bot.

If your existing token is compromised or you lost it for some reason, use the `/token` command to generate a new one.

## Configuration

1. Edit `data/bots/<YOUR_BOT_ID>/bot.config.json`. In the `messaging.channels.telegram` section write this configuration :

- `enabled`: set to `true`
- `botToken`: your bot token

  Your `bot.config.json` should look like this:

```json
{
  // ... other data
  "messaging": {
    "channels": {
      "telegram": {
        "enabled": true,
        "botToken": "your_bot_token"
      }
      // ... other channels can also be configured here
    }
  }
}
```

2. Restart Botpress and talk to your Telegram bot. The webhook will be configured automatically to point to `<EXTERNAL_URL>/api/v1/messaging/webhooks/<YOUR_BOT_ID/telegram`.
