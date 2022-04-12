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

1. Restart Botpress and talk to your Telegram bot. The webhook will be configured automatically to point to `<EXTERNAL_URL>/api/v1/messaging/webhooks/<YOUR_BOT_ID/telegram`.
