---
id: external-api
title: Calling an API in an Action
---


In this tutorial, we're going to fetch the list of Botpress repositories on Github and display the description of the first one. We will show you how to call an API, save the response and use the answer in a content element through templating.

### The Action

We will use `axios` as an HTTP client.

Start by creating a new JavaScript file in `/data/global/actions/callApi.js`. Then copy the following code:

```javascript
const axios = require('axios')

/**
 * @title Call the Github API to fetch Botpress repositories
 * @category Turorial
 * @author Botpress, Inc.
 **/
const callApi = async () => {
  // We call the Github API
  const { data } = await axios.get('https://api.github.com/orgs/botpress/repos')

  // We assign the response to the session variable so we can use it later
  session.response = data
}

// Actions are async, so make sure to return a promise
return callApi()
```

:::info
What is the `session` variable? Learn how to [use Memory to store data](/docs/conversation-studio/tutorials/use-data).
:::


### Using the Action

Add an `onEnter` action instruction in your node and select the `callApi` action from the list:

![Action](/assets/tutorial-call-api-action.png)

:::info
What are `onEnter` instructions? Understand how the [node Lifecycle](/docs/conversation-studio/tutorials/create-conversations) works.
:::

### Add a Text Content Element

Create another `onEnter` instruction to make your bot say something. Once the first instruction executes, the response is stored in the session variable.

Here we use templating to get the description of the first repository from the list:

![Content](/assets/tutorial-call-api-element.png)

:::info
What is templating? Take a look at the [Mustache demo](https://mustache.github.io#demo) to understand how templating works in Botpress.
:::

Once everything is completed, this is what your node should look like:

![Node Properties](/assets/tutorial-call-api-node-properties.png)