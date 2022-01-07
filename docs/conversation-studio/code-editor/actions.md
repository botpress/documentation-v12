---
id: actions
title: Actions
---

---------------

:::caution
Sorry, but this page is under construction!
:::

There are two ways of quickly adding custom code to enrich your chatbot's experience: **Actions** and **Hooks**.

Both are executed in a virtual machine to prevent server crashes in case there is a scripting error. Your scripts may require any module loaded by Botpress by default (for example, lodash, axios, moment, nanoid, and [much more](https://github.com/botpress/botpress/blob/master/package.json)).

You can also use one of the pre-loaded **Skills** to perform tasks that require more complexity than can be added in a normal node.Botpress comes with skills to send emails, call an API, extract entities and give predefined answers.

If you want to include other dependencies not already included, there are two possible ways. You can add the `node_modules` folder containing your dependency in the same folder as your Action.

To help you visualize how it works, check the snippet below. We've commented out a "hidden" portion of the code since all you need to include in your `.js` files is your actual code.

```js
/** const virtual_machine = async function action(bp: typeof sdk, event: sdk.IO.IncomingEvent, args: any, { user, temp, session } = event.state) { */

//The content of your .js file starts here. Example:
const _ = require('lodash')
if (event.type === 'text') {
  const text = _.get(event, 'text')
  console.log(text)
  //...
}
//End of your file

/** } */
```

It is also possible to wrap your code with an async method:

```js
/** const virtual_machine = async function action(bp: typeof sdk, event: sdk.IO.IncomingEvent, args: any, { user, temp, session } = event.state) { */

//The content of your .js file starts here. Example:
const myMethod = async () => {
  await axios.get('...')
  console.log('Hello!')
}

return myMethod()
//End of your file

/** } */
```

:::note
These scripts have hot reloading enabled, which means that changes are picked up on the following function call whenever you edit it, making development a lot faster.
:::

## Actions
Actions are server-side functions executed by the chatbot as part of a conversational flow. Actions have the power to do many things:

- Alter the state of the conversation
- Send customized messages to the conversation
- Execute arbitrary code like calling an API or storing data in the database

Since they are JavaScript functions, they can do pretty much anything. When the Dialog Manager (DM) invokes an Action, it gets access to the following arguments:

- `user`: All attributes of a user.
- `session`: Variables kept for the session's duration.
- `temp`: Variables that are alive only for the course of the flow.
- 'bot`: Object containing global variables for this bot (same for all users)
- `event`: The original (latest) event received from the user in the conversation.
- `args`: The arguments passed to this Action from the Visual Flow Builder.
- `process`: sandboxed VM containing some of the env-variables (starting with `EXPOSED_`)

Check out the page Bot Memory and Data Retention for more details about these objects' lifetime.

### Example of an Action

Here are some possible ways to use these variables

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

### Registering New Actions
The only way to register new actions is to add your javascript code in a `.js` file and put them in the folder `data/global/actions`. There is no way to add new ones during runtime programmatically. You can also write actions directly in the Botpress Studio GUI by navigating to the code editor and using an Action Template.

We use JavaDoc comments to display meaningful information (name, description, arguments, default values) on the dialog flow editor. It is possible to keep an action hidden in the flow editor by adding the flag `@hidden true` in the JavaDoc.

### Built-In Actions
Botpress comes with a built-in set of Actions. For learning purposes, we will examine the most straightforward Action called Wait. It allows the developer to pause the bot before running the next instruction. For example, when the bot presents a long text message, the developer may use the `wait` action to simulate natural typing.

#### Wait Action
-  **Action Title** Wait/Delay
-  **Category** Utility
-  **Author** Botpress, Inc.
-  **Parameters** data_type:number name:delay (default = 1000) - The number of milliseconds to wait

```
const wait = async delay => {
  return new Promise(resolve => setTimeout(() => resolve(), delay))
}

return wait(args.delay || 1000)
```
As you can see, the Action is just a simple asynchronous arrow function that takes the number of milliseconds to `delay` as a parameter. When building an action, you can (and indeed should) specify the action type, its category, the author, and parameters.

#### Append Context
-  **Action Title** Append Context
-  **Category** NLU
-  **Author** Botpress, Inc.
-  **1st Parameter** data_type:string name:contexts - Comma-separated list of contexts
-  **2nd Parameter** data_type:string name:[ttl=1] - Time-To-Live of the context in number of dialog turns. Put `0` to disable expiry.
This Action adds context(s) to the list of contexts used by the NLU Engine for subsequent messages for that chat session.

The TTL (Time-To-Live) is the time during which contexts are valid before automatic removal. For example, the default value of `1` will listen for that context only once (the next time the user speaks).
 
 If a context were already present in the list, the higher TTL would win.
 To override a specific context, use the `removeContext` action before this Action.
 
This method is contextual to the current user chat session. You can specify more than one context by separating them with a comma.

#### Remove Context
-  **Action Title** Remove Context
-  **Category** NLU
-  **Author** Botpress, Inc.
-  **Parameter** data_type:string name:contexts - Comma-separated list of contexts

Use this Action to remove the provided context(s) from the list of contexts used by the NLU Engine for the subsequent messages for that chat session.

This method is contextual to the current user chat session. You can specify more than one context by separating them with a comma.

#### Reset Context
-  **Action Title** Reset Context
-  **Category** NLU
-  **Author** Botpress, Inc.
-  **Parameter** none

 It resets the NLU context to the default scope. This method is contextual to the current user and current chat session.

#### Send Feedback
-  **Action Title** Send Feedback
-  **Category** NDU66
-  **Author** Botpress, Inc.
-  **Parameter**  data_type:number name:value - The feedback value. Use 1 for positive feedback, -1 for negative feedback

Provides feedback (1 for positive or -1 for negative feedback) at the end of a goal (a workflow that the user has completed)

#### Get Global Variable
-  **Action Title** Get global variable
-  **Category** Storage
-  **Author** Botpress, Inc.
-  **1st Parameter** data_type:string name:name - The name of the variable
-  **2nd Parameter** data_type:string name:output - The state variable to ouput to

This Action retrieves a variable that was stored globally using a storage key. Botpress uses a `key: value` storage system to allow complex object storage definitions.

#### Reset Global Variable
-  **Action Title** Reset Global Variable
-  **Category** Storage
-  **Author** Botpress, Inc.
-  **Parameter** data_type:string name:name - The name of the variable to be reset

Use this Action to reset a variable with global scope.

#### Set Global Variable
-  **Action Title** Set global variable
-  **Category** Storage
-  **Author** Botpress, Inc.
-  **1st Parameter** data_type:string name:name - The name of the variable
-  **2nd Parameter** data_type:any name:value - Set the value of the variable
-  **3rd Parameter** data_type:string name:[expiry=never] - Set the expiry of the data, can be "never" or a short string like "6 hours"
-  **4th Parameter** data_type:string name:output - The state variable to output to.

This Action allows you to set a variable globally, with optional expiry.

#### Set Variable
-  **Action Title** Set Variable
-  **Category** Storage
-  **Author** Botpress, Inc.
-  **1st Parameter** data_type:string name:type - Pick between: user, session, temp, bot
-  **2nd Parameter** data_type:string name:name - The name of the variable
-  **3rd Parameter** data_type:any name:value - Set the value of the variable. Type 'null' or leave empty to erase it.

You can use this Action to store data to desired storage based on the time to live expectation.

#### Reset Session
-  **Action Title** Reset Session
-  **Category** Storage
-  **Author** Botpress, Inc.
-  **Parameter** none

This Action resets the user session and clears information stored in `temp` and `session` storage for the user. This action doesn't remove NLU Contexts and Last Messages history.

#### Switch Language
-  **Action Title** Switch Language
-  **Category** Language
-  **Author** Botpress, Inc.
-  **Parameter** data_type:string name:lang - The language code, e.g. "en"

Valid for Enterprise License holders with multilingual bots, this Action lets you change the bot's language for the current user.

Botpress comes pre-packed with a translation engine that helps developers design a bot in one language while catering to users of all supported and configured languages.

## Disabling Actions
Botpress will ignore files starting with a dot (`.`). This way, you can disable a hook or Action by merely prefixing the file's name with a dot.

## Learn More

See [Call API in action](/docs/conversation-studio/tutorials/external-api)