---
id: language-identification
title: Language Identification
---

---------------

:::info
Enterprise only
:::

## Add a Language

In the Admin section > Your bots > Configs you will find a section for **Supported Languages** as in the screenshot below:


## Switch Language

Go back to Studio and switch language.

You'll see a "missing translation" notification on your content.

## Translate Your Content

Edit the content and add a translation

## Change the Language

Botpress uses the browser language to detect the user language. The detected language is stored in the `language` field of the user attributes. Thus, it is possible to change the language of a user by modifying this field.

See [updateAttributes](https://botpress.com/reference/modules/_botpress_sdk_.users.html#updateattributes)

Example usage:

```js
await bp.users.updateAttributes('web', 'someId', { language: 'fr' })
```
