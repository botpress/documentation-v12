---
id: languages
title: Languages
---

---------------

:::caution

Sorry, but this page is under construction!

:::

## Add a Language

### Edit Your Bot Configs

In the Admin section > Your bots > Configs

### Switch Language

Go back to Studio and switch language


You'll see a "missing translation" notification on your content


### Translate Your Content

Edit the content and add a translation

## Change the Language

Botpress use the browser language to detect the user language. This is stored in the `language` field of the user attributes. It is possible to change the language of a user by modifying this field.

See [updateAttributes](https://botpress.com/reference/modules/_botpress_sdk_.users.html#updateattributes)

Example usage:

```js
await bp.users.updateAttributes('web', 'someId', { language: 'fr' })
```
