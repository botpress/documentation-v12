1. Edit `data/bots/<YOUR_BOT_ID>/bot.config.json`.
1. In the `messaging.channels.smooch` section write this configuration:

- `enabled`: set to `true`;
- `keyId`: paste the `id` of your key from the `Settings` section;
- `secret`: paste the `secret` of your key from the `Settings` section.

  Your `bot.config.json` should look like this:

```json
{
  // ... other data
  "messaging": {
    "channels": {
      "smooch": {
        "enabled": true,
        "keyId": "your_key_id",
        "secret": "your_secret"
      }
      // ... other channels can also be configured here
    }
  }
}
```

1. Restart Botpress and test if your chatbot has been successfully connected to your desired channel.
