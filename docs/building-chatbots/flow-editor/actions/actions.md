---
id: actions
title: Actions
---

--------------------

Actions are server-side functions executed by the chatbot as part of a conversational flow. Actions have the power to:

- Alter the state of the conversation;
- Send customized messages to the conversation;
- Execute arbitrary code like calling an API or storing data in the database.

Since they are JavaScript functions, they can do pretty much anything and have the following properties:

- `user`: all user attributes.
- `session`: variables kept only for the session.
- `temp`: variables kept only for the flow.
- `bot`: object containing global variables for this bot (same for all users).
- `event`: original (latest) event received from the user.
- `args`: arguments passed to this action from the **Flow** editor.
- `process`: sandboxed VM containing some of the env-variables (starting with `EXPOSED_`).

**Example:**

```js
/** const virtual_machine = async function action(bp: typeof sdk, event: sdk.IO.IncomingEvent, args: any, { user, temp, session } = event.state) { */
user['firstname'] = 'Bob'
user['age'] = 17

temp = {
  text: 'hello there'
}

session.store = [{ id: 1, id: 2, id: 3 }]
/** } */
```

## Registering New Actions

There is two ways to register new actions:

- You can add your JavaScript code in a `.js` file and put it in the folder `data/global/actions`. 
:::note
There is no way to add new ones during runtime programmatically.
::: 

- You can also write actions directly in the Conversation Studio GUI by navigating to the code editor and using an **Action Template**.

We use JavaDoc comments to display meaningful information (such as name, description, arguments, default values) on the dialog flow editor. It is possible to keep an action hidden in the flow editor by adding the flag `@hidden true` in the JavaDoc.

## Disabling Actions

Botpress will ignore files starting with a dot (`.`). This way, you can disable a hook or Action by merely prefixing the file's name with a dot.

## Built-In Actions

### Wait Action

-  **Action Title:** Wait/Delay
-  **Category:** Utility
-  **Author:** Botpress, Inc.
-  **Parameters:** `data_type:number name:delay` (default = 1000) - The number of milliseconds to wait

**Example:**
```
const wait = async delay => {
  return new Promise(resolve => setTimeout(() => resolve(), delay))
}

return wait(args.delay || 1000)
```

:::note
As you can see, the action is just a simple asynchronous arrow function that takes the number of milliseconds to `delay` as a parameter. When building an action, you should specify the action type, its category, the author, and its parameters.
:::

### Append Context

-  **Action Title:** Append Context
-  **Category:** NLU
-  **Author:** Botpress, Inc.
-  **1st Parameter:** `data_type:string name:contexts` - Comma-separated list of contexts
-  **2nd Parameter:** `data_type:string name:[ttl=1]` - Time-To-Live of the context in number of dialog turns. Put `0` to disable expiry.

This action adds context(s) to the list of contexts used by the NLU Engine for subsequent messages for that chat session.

:::note Notes
- If a context were already present in the list, the higher TTL would win.
- To override a specific context, use the `removeContext` action before this action.
:::
 
This method is contextual to the current user chat session. You can specify more than one context by separating them with a comma.

### Remove Context

-  **Action Title:** Remove Context
-  **Category:** NLU
-  **Author:** Botpress, Inc.
-  **Parameter:** `data_type:string name:contexts` - Comma-separated list of contexts

Use this action to remove the provided context(s) from the list of contexts used by the NLU Engine for the subsequent messages for that chat session.

This method is contextual to the current user chat session. You can specify more than one context by separating them with a comma.

### Reset Context

-  **Action Title:** Reset Context
-  **Category:** NLU
-  **Author:** Botpress, Inc.
-  **Parameter:** none

 It resets the NLU context to the default scope. 
 
 This method is contextual to the current user and current chat session.

### Send Feedback

-  **Action Title:** Send Feedback
-  **Category:** NDU66
-  **Author:** Botpress, Inc.
-  **Parameter:**  `data_type:number name:value` - The feedback value. Use `1` for positive feedback, `-1` for negative feedback

Provides feedback (`1` for positive or `-1` for negative feedback) at the end of a goal (a workflow that the user has completed).

### Get Global Variable

-  **Action Title:** Get global variable
-  **Category:** Storage
-  **Author:** Botpress, Inc.
-  **1st Parameter:** `data_type:string name:name` - The name of the variable
-  **2nd Parameter:** `data_type:string name:output` - The state variable to ouput to

This action retrieves a variable that was stored globally using a storage key. Botpress uses a `key: value` storage system to allow complex object storage definitions.

### Reset Global Variable

-  **Action Title:** Reset Global Variable
-  **Category:** Storage
-  **Author:** Botpress, Inc.
-  **Parameter:** `data_type:string name:name` - The name of the variable to be reset

Use this action to reset a variable with global scope.

### Set Global Variable

-  **Action Title:** Set global variable
-  **Category:** Storage
-  **Author:** Botpress, Inc.
-  **1st Parameter:** `data_type:string name:name` - The name of the variable
-  **2nd Parameter:** `data_type:any name:value` - Set the value of the variable
-  **3rd Parameter:** `data_type:string name:[expiry=never]` - Set the expiry of the data, can be `never` or a short string like `6 hours`
-  **4th Parameter:** `data_type:string name:output` - The state variable to output to.

This action allows you to set a variable globally, with optional expiry.

### Set Variable

-  **Action Title:** Set Variable
-  **Category:** Storage
-  **Author:** Botpress, Inc.
-  **1st Parameter:** `data_type:string name:type` - Pick between: user, session, temp, bot
-  **2nd Parameter:**` data_type:string name:name` - The name of the variable
-  **3rd Parameter:** `data_type:any name:value` - Set the value of the variable. Type `null` or leave empty to erase it.

You can use this Action to store data to desired storage based on the time to live expectation.

### Reset Session

-  **Action Title:** Reset Session
-  **Category:** Storage
-  **Author:** Botpress, Inc.
-  **Parameter:** none

This action resets the user session and clears information stored in `temp` and `session` storage for the user. This action doesn't remove NLU Contexts and Last Messages history.

### Switch Language

-  **Action Title:** Switch Language
-  **Category:** Language
-  **Author:** Botpress, Inc.
-  **Parameter:** `data_type:string name:lang` - The language code, e.g. `en`

Valid for Enterprise License holders with multilingual bots, this action lets you change the bot's language for the current user.

Botpress comes pre-packed with a translation engine that helps developers design a bot in one language while catering to users of all supported and configured languages.