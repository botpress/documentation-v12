---
id: content_types
title: Content Types
---

# Content Types

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