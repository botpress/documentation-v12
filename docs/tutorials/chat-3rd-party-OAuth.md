---
id: chat-3rd-party-OAuth
title: Authenticate a user against a 3rd Party OAuth
---

------------------------

In this tutorial, you will build a simple module that authenticates a user to Twitter and save its credentials to its attributes so it can be used to query its Twitter account.

:::info Important
We assume that:
- You have a knowledge on how to create a custom Botpress module.
- You have a basic knowledge of the [botpress sdk](https://botpress.com/reference/) as you'll as prior experience with `botpress.config.json`.
- You created a [Twitter app](https://developer.twitter.com/en/docs/basics/getting-started) and that you have some previous experience with [Passport.js](http://www.passportjs.org/docs/).
:::

The code for this example is available in the [examples](https://github.com/botpress/botpress/tree/master/examples/chat-3rd-party-OAuth) directory of our GitHub repository.

## Register the Module

Botpress modules provide a simple yet powerful way extend your bot capabilities without altering the core features. If you think about our use case here, the only thing that our module has to do is to offer an API so you can perform the steps to authenticate the user to Twitter. No UI, no middlewares, only an api and some configs are required.

1. Create an `src` directory with 2 sub dirs `backend` and `views`.
1. Write a simple module entry point (`backend/index.ts`) as follows:

```ts
import * as sdk from 'botpress/sdk'

const onServerStarted = async (bp: typeof sdk) => {}

const onServerReady = async (bp: typeof sdk) => {}

const onBotMount = async (bp: typeof sdk, botId: string) => {}

const entryPoint: sdk.ModuleEntryPoint = {
  onServerStarted,
  onServerReady,
  onBotMount,
  definition: {
    name: 'twitter-auth',
    fullName: 'Twitter oAuth1 example',
    homepage: 'https://botpress.com',
    noInterface: true
  }
}

export default entryPoint
```

Now that you have the shell of your module setup, you need to activate it in our `botpress.config.json` so the Botpress module builder can easily find and build it:

```js
{
  // MODULES_ROOTS is the modules directory, you can use your own location
  "location": "MODULES_ROOT/twitter-auth",
  "enabled": true
}
```

## Module Implementation

1. You will use `Passport.js` along with a Twitter Strategy to implement the OAuth flow: install those deps. 
1. You need to add your Twitter App api keys so that your bot can properly authenticate the user to Twitter. Just creating a module config file for each bot. Config here is pretty simple, obviously you can customize it for your needs. 
1. Add the following file in the config directory of desired bots:

```js
// bots/yourbot/config/twitter-auth.json
{
  "enabled": true,
  "apiKey": "YOUR_TWITTER_APP_API_KEY"
  "apiSecret": "YOUR_TWITTER_APP_SECRET_KEY"
}
```

Next step is to implement the `onBotMount` function the in our `module/src/index.ts` that will configure the Passport Twitter strategy for each bot.

```ts
const onBotMount = async (bp: typeof sdk, botId) => {
  const modConfig = (await bp.config.getModuleConfigForBot('twitter-auth', botId)) as Config
  if (!modConfig.enabled) {
    return
  }

  // you use process variables that are set on server start from botpress config file, you could use the configs
  // const bpConfig = await bp.config.getBotpressConfig()
  // const baseCallbackUrl = bpConfig.externalUrl || `http://${bpConfig.host}:${bpConfig.port}`
  const baseCallbackUrl = process.EXTERNAL_URL || `http://${process.HOST}:${process.PORT}`

  passport.use(
    new TwitterStrategy(
      {
        consumerKey: modConfig.apiKey,
        consumerSecret: modConfig.apiSecret,
        callbackUrl: `${baseCallbackUrl}/api/v1/bots/${botId}/mod/twitter-auth/callback`
      },
      (token: string, tokenSecret: string, profile: any, done: Function) => {
        done(undefined, { token, tokenSecret, profile })
      }
    )
  )
}
```

Now if you try to run Botpress, you will have an error because the Passport Twitter Strategy needs a server session which is disabled by default, enable it in your Botpress config and set `httpServer.session.enabled` to `true`. 

If you start the server again, Botpress should be running properly. You'll implement a callback URL with the SDK `createRouterForBot` that allows you to define a custom module router for a specific bot. You'll define our router in the `onServerReady` function of our module entry point:

```ts
const onServerReady = async (bp: typeof sdk) => {
  const router = bp.http.createRouterForBot('twitter-auth', { checkAuthentication: false }) as Router

  router.get('/callback', async (req: ReqWithSession, res) => {
    passport.authenticate('twitter', {}, async (err, twitterUserDat) => {
      if (err) {
        /*
          Twitter authentication error
          Your Error handling code goes here
         */
        res.redirect('/')
      }

      try {
        await bp.users.updateAttributes(req.session.channel, req.session.userId, { twitter: twitterUserDat })
        // This will simply close the authentication window
        res.send('<div>Twitter auth success!</div><script>window.setTimeout(window.close, 1500)</script>')
      } catch (err) {
        /*
          Update user attributes error
          Your Error handling code goes here
         */
        res.redirect('/CUSTOM_AUTH_ERROR_ROUTE')
      }
    })(req, res)
  })
}
```

The only step missing is to find a way to send the user to Twitter Authentication. You will define a route in your router in which you call `passport` to initiate the authentication flow. The following route in custom router does the trick:

```ts
router.get('/auth', async (req: ReqWithSession, res) => {
  req.session.channel = req.query.channel
  req.session.userId = req.query.userId

  passport.authenticate('twitter')(req, res)
})
```

You can now use read Twitter Authentication properties in the users's attributes. Depending on your business logic, when a user needs to be authenticated to Twitter, you now simply have to check if the `twitter` property set in the users attributes. If note, you need to suggest to your user to to authenticate to Twitter, you could for instance display a builtin card element with `OpenUrl` as action with our authentication route as URL value : `http://yourbot.host/api/v1/bots/${botId}/mod/twitter-auth/auth?channel=${chanelId}&userId=${userId}`. Notice that you pass `channel` & `userId` as query params so you can set it in the user's session, it'll be used to find the user when our callback route is called by Twitter.

:::tip
Define a shortlink for our auth bot module route to make it easy to use on your flow or content.
:::

That's about it. As a quick recap, in this tutorial, you built a very simple module with no interface from scratch that allows a Twitter OAuth flow in a chat session. Of course you could (and should) extend this module for your own needs. The simplicity of this implementation shows that the same concepts can be applied to other Auth Providers. You could even combine different Authentication Providers so you can perform different actions on the authenticated user's behalf for instance book a Uber Ride and share it to twitter (not that this is a useful usecase). Full code example is available on [GitHub](https://github.com/Botpress/botpress/tree/master/examples/chat-3rd-party-OAuth).