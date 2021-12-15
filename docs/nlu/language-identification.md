---
id: language-identification
title: Language Identification
---

---------------

---
id: i18n
title: Internationalization
---

:::info

Enterprise only

:::

## Add a language

In the Admin section > Your bots > Configs you will find a section for **Supported Languages** as in the screenshot below:


## Switch language

Go back to Studio and switch language.

You'll see a "missing translation" notification on your content.

## Translate your content

Edit the content and add a translation

## Change the language

Botpress uses the browser language to detect the user language. The detected language is stored in the `language` field of the user attributes. Thus, it is possible to change the language of a user by modifying this field.

See [updateAttributes](https://botpress.com/reference/modules/_botpress_sdk_.users.html#updateattributes)

Example usage:

```js
await bp.users.updateAttributes('web', 'someId', { language: 'fr' })
```
