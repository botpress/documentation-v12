#### App Secret

1. Go to your Facebook App.
1. In the left sidebar, expand the **Settings** menu and select **Basic**. Here you can find the App ID and App Secret.
1. Click on the **Show** button in the **App Secret** text box. You can copy the App ID and App Secret to use for your Facebook API calls.

#### Verify Token

Set a long string of your own making as a verify token or use a random string generator service like `random.org` to create a verify token.

## Configurations

The following configurations are required for a connection, enabling you to access your chatbot from your Facebook page.

While the first three are mandatory, the last three configurations (greeting text, get started, and persistent menu) are not.

### Botpress HTTPS Endpoint

- Set the following properties:

  - `appSecret`. You will find this value on your Facebook App page.
  - `verifyToken`. Use a preferably long and cryptic random string and keep it secret. You'll need to copy and paste this token in the Facebook App portal when setting up your webhook.

- Make sure you have an HTTPS URL pointing to your Botpress Server and set the `EXTERNAL_URL` environment variable as follows:
  - Open `data/global/botpress.config.json` and set the value of the `httpServer.externalUrl` configuration variable to the complete hostname of your HTTPS endpoint, for example, `https://bot.botpress.com`. The resulting file should be as below:

```json
  {
  "$schema": "../botpress.config.schema.json",
  "httpServer": {
    "host": "localhost",
    "port": 3000,
    "backlog": 0,
    "bodyLimit": "10mb",
    "cors": {
      "enabled": true
    },
    "externalUrl": "https://bot.botpress.com",
```

- Restart Botpress Server to reload the configuration.

### Individual Chatbot Configuration

Edit `data/bots/<YOUR_BOT_ID>/bot.config.json`. In the `messaging.channels.messenger` section write this configuration :

- `accessToken` has to be set to your page access token. To obtain this token:
  1. Go to products in your Facebook App Dashboard's left sidebar.
  1. Add Messenger, you should see it added to the left sidebar.
  1. Select settings under the sidebar menu item.
  1. Add a Facebook page you manage to your App.
  1. You should see a generate token button. Click and copy that token to the `json` file.
- `enabled` has to be set to `true`
- `appSecret`. You will find this value on your Facebook App page.
  - Go to Settings then Basic. Click show and get your app secret.
- `verifyToken`. A secret random string. See the [webhook](#Facebook Webhook) section for details on how to configure your Webhook.

Your `bot.config.json` should look like this :

```json
{
  // ... other data
  "messaging": {
    "channels": {
      "messenger": {
        "enabled": true,
        "accessToken": "your_access_token",
        "appSecret": "your_app_secret",
        "verifyToken": "your_verify_token"
      }
      // ... other channels can also be configured here
    }
  }
}
```

:::caution
One bot is connected to **one** facebook page.
:::

### Facebook Webhook

Messenger will use a webhook that you'll need to register to communicate with your chatbot.

1. In your Facebook app, click Products.
1. Click **Messenger**.
1. Go in the **Settings**.
1. Click **Webhooks**, then **Setup Webhooks**.
1. Under Callback URL, enter `<EXTERNAL_URL>/api/v1/messaging/webhooks/<YOUR_BOT_ID/messenger`.
1. Paste your `verifyToken` (the random string you generated) in the Verify Token field.
1. Make sure you enable `messages` and `messaging_postbacks` in Subscription Fields.

:::note
When you set up your webhook, Messenger requires a **secured public** address. To test on localhost, we recommend using services like [pagekite](https://pagekite.net/), [ngrok](https://ngrok.com) or [tunnelme](https://localtunnel.github.io/www/) to expose your server.
:::
