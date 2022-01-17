---
id: authentication-methods
title: Authentication Methods
---

---------------

:::info
Enterprise only
:::

A standard authentication (called basic) method is delivered with the software, but you might want to modify it. You have 4 different types of authentication methods that you can configure for different workspaces: Basic, SAML, OAuth2, and LDAP. There are 3 different types of authenticated users:

- **Collaborators**: Can access the Admin Dashboard, manage and edit bots base on their roles.
- **Chat Users**: Can communicate with bots and see the bots list in the Admin Dashboard. 
- **External User**: User authentication self-handled with a JWT token identifying the user.

## Basic

The basic authentication allows a user to log in with a simple username and its password. Remember that super admins are able to reset any passwords when using this strategy.

For more security, the password is auto-generated as a random (salt) password. The user has to choose another password at their first login.

:::note Be careful

Only the first user is allowed to register a new account. If you forgot your password and can't access your account, you can clear the list of users by emptying (or deleting) the table `strategy_default`.

:::

To use the basic authentication, add the following code block in your `botpress.config.json` file (and modify it however you need):

```js
{
 "pro": {
    "collaboratorsAuthStrategies": ["default"],
  },
  "authStrategies": {
    "default": {
      "type": "basic",
      "label": "Default Auth",
      "options": {}
    }
  }
}
```

:::info

There are additional options that can be configured when using this authentication strategy. Please refer to the [configuration file for more information](https://github.com/botpress/botpress/blob/master/packages/bp/src/core/config/botpress.config.ts#L350) :

- `maxLoginAttempt`: Max number of tries allowed before locking out the user
- `lockoutDuration`: Account will be disabled for this amount of time when `maxLoginAttempt` is reached
- `passwordExpiryDelay`: Password will expire after this specified duration
- `passwordMinLength`: Minimum length for the user's password
- `requireComplexPassword`: Requires at least 1 character of 3 categories of characters

:::

## OAuth2

You can gather tokens via OAuth2. There are two types of tokens:

- JWT token: contains all the user's information.
- Special token: used to query the user's information.

To use the OAuth2 authentication, add the following code block in your `botpress.config.json` file (and modify it however you need):

```js
{
 "pro": {
    "collaboratorsAuthStrategies": ["default"],
  },
  "authStrategies": {
    "botpress": {
      "type": "oauth2",
      "options": {
        "authorizationURL": "https://example.auth0.com/authorize",
        "tokenURL": "https://example.auth0.com/oauth/token",
        "clientID": "your-client-id",
        "clientSecret": "your-client-secret",
        "callbackURL": "http://localhost:3000/api/v1/auth/login-callback/oauth2/botpress",
        /**
         * If the token doesn't contain user information, set the userInfoURL
         */
        "userInfoURL": "https://example.auth0.com/userinfo",
        /**
         * If the token already includes all user information,
         * */
        "jwtToken": {
          "audience": "my-audience",
          "issuer": "some-issuer",
          "algorithms": ["HS256"],
          // Either set the certificate, or save it in a file: data/global/oauth2_YOUR_STRATEGY_ID.pub
          "publicKey": ""
        }
        "scope": "openid profile email"
      },
      "fieldMapping": {
        "email": "email"
      }
    }
  }
}
```

## SAML

You can link your SAML Identity Provider seamlessly with Botpress. When enabled, administrators are greeted with a `Sign in with SSO` button on the Admin. 

:::caution

The first user to login using the SSO provider becomes the super admin.

:::

You can either:

- Allow any user to create an account. and set `allowSelfSignup` to `true`.
- Manage users manually, and set `allowSelfSignup` to `false`

To use the SAML authentication:

1. Open `botpress.config.json`.
1. Set the `pro.auth.strategy = 'saml'` parameter to `saml`.
2. Configure the available options. 

:::note 

The complete list of SAML options is [available here](https://github.com/bergie/passport-saml).

:::

Here is a complete example:

```js
"auth": {
  "strategy": "saml",
  "options": {
    "entryPoint": "https://botpress-saml-idp.auth0.com/somestuff/bla",
    "callbackUrl": "http://localhost:3000/admin/login-callback",
    "path": "/login-callback",
    "issuer": "botpress-saml",
    "cert": "MIIDETCCAfmgAwIBAgIJIHQ75dJxjRuEMA0GCSqGSIb3DQEBCwUAMCYxJDAiBgNVBAMTG2JvdHByZXNzLXNhbWwtaWRwLmF1dGgwLmNvbTAeFw0xOTAxMTUxNTAzMDFaFw0zMjA5MjMxNTAzMDFaMCYxJDAiBgNVBAMTG2JvdHByZXNzLXNhbWwtaWRwLmF1dGgwLmNvbTCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBAMUHXzCG3c4iSyU1N1Nzu8LsEIQ8tj5SHG+VtHrhWyfdckq5nP2wy/u6Tt20pdOx+4zu1718x2xVPMwFN9M2uUSJaY6vIXfHofKyn1htuYYzOklLZmnrLX4Pm7YHE2SubAsuwg6e7/sgIZ06T",
    "acceptedClockSkewMs": 5000
  },
  "fieldMapping": {
    "email": "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress",
    "firstname": "cn"
  },
  "allowSelfSignup": false
}
```

## LDAP

To use LDAP authentication:

1. Open `botpress.config.json`.
1. Set the `pro.auth.strategy = 'ldap'` to `ldap`. 
2. Configure the available options. 

[Check the full configuration for more details](https://github.com/botpress/botpress/blob/master/packages/bp/src/core/config/botpress.config.ts).

## Field Mapping

The `fieldMapping` configuration allows you to match your users existing properties Botpress'. You can modify the following properties: 

- `email`;
- `fullname` (or `firstname` with `lastname`); 
- `company`;
- `role`;
- `location`.

For example:

```js
{
  "fieldMapping": {
    "email": "emailAddressOnIdp",
    "fullname": "userFullName",
    "company": "!Botpress",
    "role": "userRole",
    "location": "officeLocation"
  }
}
```

Whenever a user logs in using SAML or LDAP, their details are updated in his Botpress profile.

## User Authentication

When using External Authentication, you can authenticate a user, and validate their identity each time he sends a message to the bot. You can use this in Actions, Hooks, and for Transitions on the Flow Editor.

:::note

To use this authentication, you need this:
- A backend that will authenticate the user and generate the JWT token
- The public key used by the backend. It can be added:
  - directly in the `botpress.config.json` file (on the same line);
  - in a file (remove the ` certificate` property, and Botpress will load the key from `data/global/end_users_auth.pub`).

:::

Here's a summary of the process:

1. User authenticates on your platform.
2. Your platform returns a JWT token to the user and configure the webchat.
3. The token is sent to Botpress every time a message is sent.
4. Botpress validates the token, decrypts the content, and makes it available through `event.credentials`.

To use the user authentication,

1. Edit `data/global/botpress.config.json`.
1. Set `pro.externalAuth.enabled` to `true`.
2. Configure the other variables for the JWT token (issuer, audience, algorithm, publicKey).
3. Restart Botpress.
4. Edit the code of the attached webchat to send the generated JWT token.

[Check the full configuration for more details](https://github.com/botpress/botpress/blob/master/packages/bp/src/core/config/botpress.config.ts).

For example:

```js
"externalAuth": {
  "enabled": true,
  "audience": "users",
  "issuer": "botpress",
  "algorithm": "HS256"
  "publicKey": "MIIDETCCAfmgAwIBAgIJIHQ75dJxjRuEMA0GCSqGSIb3DQEBCwUAMCYxJDAiBgNVBAMTG2JvdHByZXNzLXNhbWwtaWRwLmF1dGgwLmNvbTAeFw0xOTAxMTUxNTAzMDFaFw0zMjA5MjMxNTAzMDFaMCYxJDAiBgNVBAMTG2JvdHByZXNzLXNhbWwtaWRwLmF1dGgwLmNvbTCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBAMUHXzCG3c4iSyU1N1Nzu8LsEIQ8tj5SHG+VtHrhWyfdckq5nP2wy/u6Tt20pdOx+4zu1718x2xVPMwFN9M2uUSJaY6vIXfHofKyn1htuYYzOklLZmnrLX4Pm7YHE2SubAsuwg6e7/sgIZ06T",
  }
}
```

:::note 

You can also create a new Key Pair, but the certificate must be in the PEM format. You can use the below commands to generate one.

```bash
ssh-keygen -t rsa -b 4096 -m PEM -f jwtRS256.key
openssl rsa -in jwtRS256.key -pubout -outform PEM -out jwtRS256.key.pub
cat jwtRS256.key // Your private key
cat jwtRS256.key.pub // Your public key
```

:::

## Authenticate The User

Once you have generated the JWT token, it must be passed down to the web chat. It will then be sent to Botpress with every message and events. Check out the [Connecting to an Existing Backend](/docs/conversation-studio/tutorials/existing-backend).

There are two different situations:

1. The user is authenticated _before_ the webchat is loaded. 

Add the external token as an option to the `init` method:

```js
window.botpressWebChat.init({
  host: 'http://localhost:3000',
  botId: botId,
  externalAuthToken: 'my.jwt.token'
})
```

2. The user _is already discussing_ with the bot, then they authenticate. 

Use the `configure` method to change the option:

```js
window.botpressWebChat.configure({ externalAuthToken: 'my.jwt.token' })
```

## How to Use The Authenticated Payload

When a user is authenticated, the JWT token is automatically decoded. If the token is valid, all the data is available through the `event.credentials` property. You can access it with Hooks, or while using Actions.

After adding a new authentication strategy, and restarting Botpress, a new `strategy_STRATEGYID` table is created. When you give access to a user for a specific workspace, an entry is created in the table `workspace_users` with his role.

If you have more than one authentication strategy, a menu will be displayed to pick a strategy. You can skip the menu and bookmark a specific strategy by changing the page URL: `/admin/login/STRATEGYID`. You can also access a specific workspace by using `/admin/login?workspaceId=WORKSPACEID`

:::note

You can find the definition for the various authentication strategies [here](https://github.com/botpress/botpress/blob/master/packages/bp/src/core/config/botpress.config.ts#L326).

:::

## Storage of The User Token

:::info 

By default, user tokens are stored in the local storage.

:::

We recommend enabling the storage of tokens in cookies, which requires an additional configuration. To enable this feature, set `jwtToken.useCookieStorage` to `true` in the `botpress.config.json` file. 

You also have to configure the CORS parameter of the HTTP Server as followed:

```js
httpServer: {
  cors: {
      enabled: true,
      origin: "http://localhost:3001", // change to your hostname
      credentials: true
      // You can add additional parameters, you can read more about them here:
      // https://expressjs.com/en/resources/middleware/cors.html
    },
}
```

:::note

It is possible to fine-tune the settings for the cookie with `jwtToken.cookieOptions`. Please refer to the options of the Cookies module here: https://github.com/pillarjs/cookies#readme

```js
jwtToken: {
  useCookieStorage: true,
  cookieOptions: {
    secure: true // send only over HTTPS
  }
}
```

:::