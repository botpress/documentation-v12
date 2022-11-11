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

## External Libraries

<!--
:::danger Deprecated Warning
`Libraries` is deprecated and will be removed in Botpress 13.
::: -->

Code in actions should be kept relatively simple. You can set counters, format data, fetch data from an api using the included axios library.
If you need to use npm modules / libraries or libraries from other programming languages, we recommend you either set up a server for that purpose, or use serverless functions and then call the api using Botpress Actions. Using Botpress for heavy javascript computation use cases like image / video processing may cause latency issues for your bot. 

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

## Content Types

Content types are the primary way to display content in the chat.

### Audio

The audio component can stream `MP3` audio (`.mp3`). You could use it to stream music from Spotify or YouTube. This component could also stream audio files stored on your server.

<!-- ![Music image](/assets/music.jpg) -->

**Example:**

```
function action(bp: typeof sdk, event: sdk.IO.IncomingEvent, args: any, { user, temp, session } = event.state) {
  /** Your code starts below */

  /**
   * Show how to create a video content type in action.
   * ```
   * {
   *  type: 'audio',
   *  video: 'https://URL_TO_YOUR_VIDEO.mp3',
   *  title: 'Random_video',
   *  typing: true
   * }
   * ```
   * @title Display audio in the action
   * @category Content type
   * @author Botpress
   */
  const myAction = async () => {
    const audio = await bp.cms.renderElement(
      'builtin_audio',
      {
        type: 'audio',
        title: 'Ort Cloud',
        audio: 'https://ia801901.us.archive.org/13/items/Home-Odyssey/Home-Odyssey-04OortCloud.mp3',
        typing: true
      },
      event
    )

    await bp.events.replyToEvent(event, audio)
  }

  return myAction()

  /** Your code ends here */
}
```

### Card

A card is a single element of a carousel. It can be view as one card in a deck of cards. The carousel is the whole deck of card.

<!-- ![Card image](/assets/card.jpg) -->

**Example:**

```
function action(bp: typeof sdk, event: sdk.IO.IncomingEvent, args: any, { user, temp, session } = event.state) {
  /** Your code starts below */

  /**
   * Show how to create an Card content type in action.
   *```
   *   {
   *     type: 'card',
   *     title: 'Botpress',
   *     subtitle: 'Website',
   *     image: 'https://avatars.githubusercontent.com/u/23510677?s=200&v=4',
   *     actions: [{ title: 'Botpress website Documentation', action: 'Open URL', url: 'https://botpress.com/docs' }]
   *   }
   * ```
   * @title Display an Card in the action
   * @category Content type
   * @author Botpress
   */
  const myAction = async () => {
    const audio = await bp.cms.renderElement(
      'builtin_card',
      {
        type: 'card',
        title: 'Botpress',
        subtitle: 'Website',
        image: 'https://avatars.githubusercontent.com/u/23510677?s=200&v=4',
        actions: [{ title: 'Botpress website Documentation', action: 'Open URL', url: 'https://botpress.com/docs' }]
      },
      event
    )

    await bp.events.replyToEvent(event, audio)
  }

  return myAction()

  /** Your code ends here */
}
```

### Dropdown

A dropdown displays a list of choices.

<!-- ![Dropdown image](/assets/dropdown.jpg) -->

**Example:**

```
function action(bp: typeof sdk, event: sdk.IO.IncomingEvent, args: any, { user, temp, session } = event.state) {
  /** Your code starts below */

  /**
   * Show how to create a dropdown content type in action.
   *```
   *   {
   *     type: 'dropdown',
   *     message: 'Dropdown Content type',
   *     buttonText: 'Click me',
   *     placeholderText: 'dropdown placeholder',
   *     options: [{ label: 'Food', value: 'apple' }],
   *     width: 10,
   *     displayInKeyboard: false,
   *     allowCreation: false,
   *     allowMultiple: false,
   *     markdown: true,
   *     typing: true
   *  }
   * ```
   * @title Display a dropdown in an action
   * @category Content type
   * @author Botpress
   */
  const myAction = async () => {
    const dropdown = await bp.cms.renderElement(
      'dropdown',
      {
        type: 'dropdown',
        message: 'Dropdown Content type',
        buttonText: 'Click me',
        placeholderText: 'dropdown placeholder',
        options: [{ label: 'Food', value: 'apple' }],
        markdown: true,
        typing: true
      },
      event
    )

    await bp.events.replyToEvent(event, dropdown)
  }

  return myAction()

  /** Your code ends here */
}
```

###  Image

You can display images. You can use a URL image or a [data URL](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs).

<!-- ![Image of the content type image](/assets/image.jpg) -->

**Example:**

```
function action(bp: typeof sdk, event: sdk.IO.IncomingEvent, args: any, { user, temp, session } = event.state) {
  /** Your code starts below */

  /**
   * Show how to create an image content type in action.
   * ```
   * {
   *  type: 'image',
   *  title: 'Random image',
   *  image: 'URL_YOUR_IMAGE',
   *  typing: true
   * }
   * ```
   * @title Display image in action
   * @category Content type
   * @author Botpress
   */
  const myAction = async () => {
    const image = await bp.cms.renderElement(
      'builtin_image',
      {
        type: 'image',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Sphalerite_-_Creede%2C_Mineral_County%2C_Colorado%2C_USA.jpg/1920px-Sphalerite_-_Creede%2C_Mineral_County%2C_Colorado%2C_USA.jpg',
        typing: true
      },
      event
    )

    await bp.events.replyToEvent(event, image)
  }

  return myAction()

  /** Your code ends here */
}
```

### Location

It displays a place on a map. Location is only enabled in the Vonage channel.

```
function action(bp: typeof sdk, event: sdk.IO.IncomingEvent, args: any, { user, temp, session } = event.state) {
  /** Your code starts below */

  /**
   * Show how to create an location content type in an action.
   * ```
   * {
        type: 'location',
        latitude: '',
        longitude: '',
        address: '',
        title: 'Botpress Office',
        typing: true
   * }
   * ```
   * @title Display an location in the action
   * @category Content type
   * @author Botpress
   */
  const myAction = async () => {
    const audio = await bp.cms.renderElement(
      'builtin_location',
      {
        type: 'location',
        latitude: 46.784541,
        longitude: -71.2909357,
        address: '2480 Ch Ste-Foy Bureau 175, Quebec City, Quebec G1V 1T6',
        title: 'Botpress Office',
        typing: true
      },
      event
    )
    await bp.events.replyToEvent(event, audio)
  }

  return myAction()

  /** Your code ends here */
}
```

### File

Botpress can display PDF file. Currently, we are only supporting PDF.

<!-- ![Image of file](/assets/file.jpg) -->

**Example:**

```
function action(bp: typeof sdk, event: sdk.IO.IncomingEvent, args: any, { user, temp, session } = event.state) {
  /** Your code starts below */

  /**
   * Show how to create an File content type in action.
   * ```
   *   {
   *     type: 'file',
   *     file:
   *       'http://wavelets.ens.fr/BOYCOTT_ELSEVIER/DECLARATIONS/DECLARATIONS/2008_07_01_Aaron_Swartz_Open_Access_Manifesto.pdf',
   *     title: 'Aaron Swartz Guerilla Manifesto',
   *     typing: true
   *   }
   * ```
   * @title Display a file in the action
   * @category Content type
   * @author Botpress
   */
  const myAction = async () => {
    const file = await bp.cms.renderElement(
      'builtin_file',
      {
        type: 'file',
        file:
          'http://wavelets.ens.fr/BOYCOTT_ELSEVIER/DECLARATIONS/DECLARATIONS/2008_07_01_Aaron_Swartz_Open_Access_Manifesto.pdf',
        title: 'Aaron Swartz Guerilla Manifesto',
        typing: true
      },
      event
    )

    await bp.events.replyToEvent(event, file)
  }

  return myAction()

  /** Your code ends here */
}
```

### Single choice

This component carries a message, usually a question, and suggests choices to the user to fulfill the message. The user can only pick one option, and on selecting the preference, you can instruct your chatbot to get a custom value.

<!-- ![single-choice image](/assets/single-choice.jpg) -->

**Example:**

```
function action(bp: typeof sdk, event: sdk.IO.IncomingEvent, args: any, { user, temp, session } = event.state) {
  /** Your code starts below */

  /**
   * Show how to create a Single-choice content type in action.
   * ```
   *   {
   *     type: 'single-choice',
   *     text: 'Ort Cloud',
   *     isDropdown: 'https://ia801901.us.archive.org/13/items/Home-Odyssey/Home-Odyssey-04OortCloud.mp3',
   *     dropdownPlaceholder: true,
   *     choices: [{ title: 'title', value: 'value' }],
   *     markdown: true,
   *     disableFreeText: true,
   *     typing: true
   *  },
   * ```
   * @title Display a single-choice in the action
   * @category Content type
   * @author Botpress
   */
  const myAction = async () => {
    const single_choice = await bp.cms.renderElement(
      'builtin_single-choice',
      {
        type: 'single-choice',
        text: 'Place to eat',
        isDropdown: true,
        dropdownPlaceholder: true,
        choices: [
          { title: 'Burger Place', value: 'Burger' },
          { title: 'Salad Place', value: 'salad' }
        ],
        markdown: true,
        disableFreeText: true,
        typing: true
      },
      event
    )

    await bp.events.replyToEvent(event, single_choice)
  }

  return myAction()

  /** Your code ends here */
}
```

### Text

The text content type is a regular text message with optional typing indicators and alternates. You can use markdown in your text to add formatting and style, but please ensure that the target channel can render this text.

You can write HTML in the text content on the web channel, and your chatbot will render it correctly. This opens up the possibility of including iFrames and constructing miniature web pages (commonly known as web views) in your content without creating custom components.

<!-- ![image text](/assets/text.jpg) -->


**Example:**

```
function action(bp: typeof sdk, event: sdk.IO.IncomingEvent, args: any, { user, temp, session } = event.state) {
  /** Your code starts below */

  /**
   * Show how to create a text content type in a action.
   * ```
   * {
   *  type: 'text',
   *  text: 'hello World !',
   *  variations: ['Greeting', 'Bonjour tout le monde'],
   *  markdown: true,
   *  typing: true
   * }
   * ```
   * @title Hello World with a Built-in text
   * @category Content type
   * @author Botpress
   */
  const myAction = async () => {
    const text = await bp.cms.renderElement(
      'builtin_text',
      { type: 'text', text: 'Hello World!', typing: true, markdown: true },
      event
    )

    await bp.events.replyToEvent(event, text)
  }

  return myAction()

  /** Your code ends here */
}
```

### Video

You can either upload a video or link to a video file that will be fetched when the content element is invoked.

<!-- ![image text](/assets/video.jpg) -->

**Example:**

```
function action(bp: typeof sdk, event: sdk.IO.IncomingEvent, args: any, { user, temp, session } = event.state) {
  /** Your code starts below */

  /**
   * Show how to create a video content type in a action.
   * ```
   * {
   *  type: 'video',
   *  video: 'https://URL_TO_YOUR_VIDEO.mp4',
   *  title: 'Random_video',
   *  typing: true
   * }
   * ```
   * @title Display an video in the action
   * @category Content type
   * @author Botpress
   */
  const myAction = async () => {
    const video = await bp.cms.renderElement(
      'builtin_video',
      {
        type: 'video',
        title : 'Lady Gaga',
        video: 'https://ia601201.us.archive.org/4/items/Lady_GaGa_Poker_Face_/Lady%20GaGa_Poker%20Face%20.mp4',
        typing: true
      },
      event
    )

    await bp.events.replyToEvent(event, video)
  }

  return myAction()

  /** Your code ends here */
}
```

## Built-in Skills

Botpress comes preloaded with some rudimentary skills. Let us look at these; we are confident that you will use them when building your next chatbot!

### Choice Skill
This skill is a spin-off from the realization that most chatbot conversations will eventually have a question with hardcoded choices as answers. Although a content element lets the user select buttons to pick a response, the choice skill adds a few more caveats to that content element, which we will explore here.

<!-- ![Single Choice Content Element](/assets/single-choice.png) -->

In addition to just letting you click a button and you are on your way, the choice skill adds a few checks and transitions to the process.

First of all, where freely typed responses are not disabled, the choice skill allows you to add answers which the user might type directly. In this way, the chatbot can understand and classify other responses besides the button click, adding a good measure of flexibility.

<!-- ![Choice Skill Overview](/assets/choice-skill-entry.png) -->

The choice skill also allows you to let the user have another go at answering the question asked. In instances where the user might fail to perceive that a button response is required, the chatbot prompts the user to choose from the supplied choices. It is also crucial in cases where the chatbot developer does not pre-empt the freely typed responses. 

If the chatbot doesn't understand a user's answer, it will react by guiding the user on how to respond to the question before asking the question again. 

<!-- ![Choice Skill Advanced](/assets/choice-skill-tries.png) -->

The choice skill also offers an option to transition to a different node when the user repeatedly fails to answer a question.

<!-- ![Choice Skill Flow GUI](/assets/choice-skill-transitions.png) -->

### Email Skill

The email skill provides a quick way to send emails from within a Botpress workflow.

#### Configuring Email Skill
To send an email using the email skill, you need to configure your chatbot with a transport connection string. Set the configuration string in the directory `...data/global/config/basic-skills.json`. For more information on the mail transporters available and how to configure them, please visit the [Nodemailer documentation](https://nodemailer.com/smtp/#examples)

Here is an example of a configuration using a mail server:

```json
{
  "$schema": "../../assets/modules/basic-skills/config.schema.json",
  "defaultContentElement": "builtin_single-choice",
  "defaultContentRenderer": "#builtin_single-choice",
  "defaultMaxAttempts": 3,
  "disableIntegrityCheck": true,
  "matchNumbers": true,
  "matchNLU": true,
  "transportConnectionString": {
    "host": "192.168.100.200",
    "port": "25",
    "secure": false,
    "tls": {
      "rejectUnauthorized": false
    }
  }
}
```

:::note
Setting `"rejectUnauthorized": false` will prevent the Botpress server from rebooting every time an email fails to send. We recommend that you put in place a fall-back strategy if this happens using the `on failure` transition.
:::

#### Creating your skill

From the Flow Editor view, click on Insert Skill > Send Email. The following interface allows you to insert the information you would fill in using any standard email service.
**From, To, CC & BCC** These fields are filled with email addresses. The _From_ field will be the sender's email address that the recipient will see when receiving an email from your chatbot. You can configure it to any valid email address. 
**Subject** This field contains the subject of the email. You will need to create a content element that will load as the subject line. Please note that it will render as plain text even if you use markdown in the subject line.
**Email Content** Again; this field will load from a content element. Unlike the subject field, you can use markdown, which Botpress will render correctly to the receiver. You can also include HTML to enhance the formatting of your email body further.

It is worthy to note that Botpress supports templating in all fields of your email skill, allowing access to variables stored in [Memory](/building-chatbots/memory-&-data-persistence/flow-memory). All `bot`, `user`, `session`, `temp`, and `event` are accessible via templating. To access these variables, reference the memory location.

### Other Skills
Two other skills, namely, the `Call API` and the `Slot Skill` are available in Botpress. You can look up these skills and use them in your chatbot.

In this tutorial, we're going to fetch the list of Botpress repositories on Github and display the description of the first one. We will show you how to call an API, save the response and use the answer in a content element through templating.

## Action Example

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
What is the `session` variable? Learn how to [use Memory to store data](/building-chatbots/memory-&-data-persistence/flow-memory).
:::


### Using the Action

Add an `onEnter` action instruction in your node and select the `callApi` action from the list:

<!-- ![Action](/assets/tutorial-call-api-action.png) -->

:::info
What are `onEnter` instructions? Understand how the [node Lifecycle](/building-chatbots/testing-&-debugging/emulator) works.
:::

### Add a Text Content Element

Create another `onEnter` instruction to make your bot say something. Once the first instruction executes, the response is stored in the session variable.

Here we use templating to get the description of the first repository from the list:

<!-- ![Content](/assets/tutorial-call-api-element.png) -->

:::info
What is templating? Take a look at the [Mustache demo](https://mustache.github.io#demo) to understand how templating works in Botpress.
:::

Once everything is completed, this is what your node should look like:

<!-- ![Node Properties](/assets/tutorial-call-api-node-properties.png) -->