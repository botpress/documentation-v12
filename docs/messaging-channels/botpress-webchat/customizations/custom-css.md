---
id: custom-css
title: Custom CSS
---

--------------------
import Ocean  from './ocean.mdx';
import Chat  from './chat.mdx';


The Botpress webchat interface is fully customizable. You can change any of the styling using CSS. This can be done in two steps. 

1. Firstly create your own cascading style sheet and name it anything you want. Then, paste your stylesheet in the `<botpress_dir>/data/assets/modules/channel-web` folder.
2. Secondly, you need to reference your new style sheet to your integrated chatbot. You can easily do this by referencing your new stylesheet using the `extraStylesheet` property. 

Let us go through these steps in more detail.

### Styling default CSS

Paste the following CSS file in the `<botpress_dir>/data/assets/modules/channel-web/default.css` file. This file is the default css File for the embedded webchat. The original Botpress theme [can be found here](https://github.com/botpress/botpress/blob/master/modules/channel-web/assets/default.css).

<details>
  <summary>Ocean Theme Example of CSS</summary>
  <Ocean/>
</details>


### Loading extra CSS File for theming the webchat

We can instruct Botpress to use a custom CSS file for theming the webchat. Take the following extra CSS and place it under this file `<botpress_dir>/data/assets/modules/channel-web/chat.css` . After, place the following code snippet in the `<botpress_dir>/data/global/hooks/after_bot_mount` folder. In our case, we used `01_create_shortlink.js` as the file name.

<details>
  <summary>Extra CSS file</summary>
  <Chat/>
</details>

```js title="Code Snippet" {6}
const chatOptions = {
  hideWidget: true,
  config: {
    enableReset: true,
    enableTranscriptDownload: true,
    extraStylesheet: '/assets/modules/channel-web/chat.css'
  }
}

const params = {
  m: 'channel-web',
  v: 'Fullscreen',
  options: JSON.stringify(chatOptions)
}

setTimeout(() => {
  try {
    bp.http.deleteShortLink(botId)
  } catch (e) {}

  // Chatbot will be available at $EXTERNAL_URL/s/$BOT_NAME
  bp.http.createShortLink(botId, `${process.EXTERNAL_URL}/lite/${botId}/`, params)
}, 500)
```

Feel free to change the webchat config there. The critical line to keep is the `extraStylesheet` property.

### Result

Restart Botpress Server, and now your chatbot's default webchat will use your custom CSS theme! 

![WebChat Customization](/assets/webchat-customization.png)
