---
id: shortlinks
title: Shortlinks
---

-----------------

You can natively create short links to your chatbot and get the following benefits:

- Short URLs: nobody likes extra long URLs;
- Flexibility: change the parameters without impacting the URL.

## Implementation

In the example below, our new shortlink `/s/fs-wc` will redirect a user to `/lite/botId?m=platform-webchat&v=fullscreen` (the standard webchat interface). You can specify additional parameters in the options object.

Create a bot-scoped `after_bot_mount` hook with the following code:

```js
bp.http.createShortLink('fs-wc', `${process.EXTERNAL_URL}/lite/${botId}/`, {
  m: 'channel-web',
  v: 'fullscreen',
  options: JSON.stringify({
    config: {
      /* Custom config here... */
    }
  })
})
```
## Resources

See the views' [Config](https://github.com/botpress/botpress/blob/master/modules/channel-web/src/views/lite/typings.d.ts#L130) object for all available options.

It is recommended to also create a hook `after_bot_unmount` to remove the shortlink when the chatbot is disabled. Here is the corresponding example:

```js
bp.http.deleteShortLink('fs-wc')
```