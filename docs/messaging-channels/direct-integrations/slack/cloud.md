## Setup

### Create Your Bot

First, you need a bot in Botpress. Take note of your bot's ID.

### Connecting Your Bot to Slack

1. Go to your [apps page](https://api.slack.com/apps).

2. Click **Create new app**, select **From scratch** then give it a name. Remember your App's name, you'll need it in a few minutes.

3. Open the page **Features**, then select **Interactivity & Shortcuts** and turn the **Interactivity** switch to _On_.

4. Copy the `Webhook URL` from the channels tabs

5. Set the request URL to: The copied value from the step 4.

6. Save your changes.

7. Open the page **Features**. Then, click **OAuth & Permissions** and add `chat:write` under the **Scope** > **Bot Token Scopes** section.

8. Open the page Features**, then click **App Home** and under the **Show Tabs** section, check **Allow users to send Slash commands and messages from the messages tab\*\*.

9. From the **Settings**, go to the **Basic Information**. Then, go to the **Install app** section, install the app by clicking the **Install to Workspace** button. On the next screen, click the **Allow** button.

10. From the **Basic Information** tab. Copy the **Client ID** and **Client Secret** into the App ID and App Secret respectly.
