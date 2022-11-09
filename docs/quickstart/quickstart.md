---
title: Introduction
slug: /
hide_title: true
---


![Messaging channels](/img/docs/quickstart.png "Quickstart")

# 🔥 Quickstart

This guide will help you build and deploy your chatbot to botpress cloud in 5 easy steps.

1. [Login/Sign Up to Botpress Cloud Dashboard](/quickstart/login)
2. [Downloading Botpress Studio](/quickstart/create-your-first-chatbot)
3. [Creating a chatbot in the Studio](/quickstart/create-your-first-chatbot)
4. [Publishing your chatbot to the cloud dashboard](/quickstart/publishing-your-chatbot)
5. [Testing your chatbot](/quickstart/testing-your-chatbot)



### Login

To use Botpress Cloud services, you need to log in to the cloud platform. From the cloud platform, you can find other valuable services like

- Manage Chatbots
- Billing
- Audits
- Settings
- Account Management
- Collaboration

<!-- :::info
For more information on Administration:
For more information on Collaboration:
For more information on Managing your Account:
::: -->

### Available Types of Login

![Login](/img/docs/login.png "login")

Botpress provides three types of login that you can use to log in to the Botpress Cloud.

Go to the [Botpress Cloud Dashboard](https://app.botpress.cloud).

From there, choose the suitable authentication provider.

### Sign Up using Email

![Sign up](/img/docs/signup.png "signup")

1. Enter your Email ID, password and select your country.
2. Click `Sign Up`. You will be receiving a verification link to your email for your account activation.
3. Sign in with your credentials


## Github
You can securely access your account's resources by authenticating through GitHub.


![Sign up](/img/docs/github.png "signup")

Click on `Continue with GitHub` and authorize github permissions.

## Google

Signing up with Google means you can log in with your Google account, making it extra easy and secure to log in to Botpress Cloud.

### Download Studio

Experience the speed of using Botpress Studio, a continuously enhanced interface designed for all chatbot builder's needs.

![Sign up](/img/docs/studio.png "signup")


### Create chatbot

Now that you are [logged in](/login-signup) in to your account. Next, we should download the suitable Botpress Studio version.

Click the Studio version that is suitable for your OS. The Studio will get downloaded. After it is downloaded, install it and start it.

![Create a chatbot](/img/docs/create-chatbot.png "Create a chatbot")

You can start with an Empty Bot or pick one from the templates provided by botpress.

Click on `Create` button and select the destination folder to save your bots locally.

### Publishing chatbot

![PAT](/img/docs/pat.png)

Once you're done with making changes to the bot in the studio, click  `Publish` button to deploy your chatbot to your cloud dashboard.

You need to get your Personal Access Token from cloud dashboard.

![Create a token](/img/docs/pat-created.png)
1. Go to your [Botpress Cloud Dashboard](https://app.botpress.cloud).
On the bottom-left corner, click on your account name and click on `Settings` 
1. Now, click on `Generate new token`, give it a name and save it.
2. Copy the generated key token and paste it in your studio.

### Testing 

After the bot is successfully published to the cloud, you can test it from the cloud dashboard. 

![Testing chatbot](/img/docs/testing-chatbot.png)


1. Go to the [cloud dashboard](https://app.botpress.cloud) and select your deployed chatbot from `chatbots` tab from sidebar.
2. In the top navigation menu, click on `Chat`
3. Chat with a Hi to test if bot responds back.
   
Hurray! 🎉 You've successfully created and published your bot on botpress cloud.


:::info
Learn how to [integrate different messaging channels](/messaging-channels/supported-channels) with botpress cloud
:::