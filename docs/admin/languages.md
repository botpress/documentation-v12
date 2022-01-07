---
id: languages
title: Languages
---

---------------

:::caution
Sorry, but this page is under construction!
:::

Normally, you only have one language for your chatbot. However, you can add other languages by translating your content. 

:::note
With the Enterprise License, you can easily work with the built-in translation functionality.
:::

## Add a Language

1. In the Admin section, click **Bots**.
2. Click the **Config** button next to the selected bot.
3. In the **General** section:
    1. Under **Default language**, use the dropdown menu to select the desired default language which is gonna be used in the interface.
    2. Under **Supported languages**, with the dropdown menu or by writing it in the box, choose the languages you need.
4. Click **Save Changes**.

### Switch Language

1. At the bottom right, next to the name of your bot, click on the language flag.
2. Select the desired language.

### Translate Your Content

1. Click the **Flow** tab.
2. Edit the text in the **Inspector**.
4. Write a translation (where your text is red with **(missing translation)** next to it).


## Change the Language

Botpress use the browser language to detect the user language. This is stored in the `language` field of the user attributes. It is possible to change the language of a user by modifying this field as the following example shows:

```js
await bp.users.updateAttributes('web', 'someId', { language: 'fr' })
```

:::tip
Take a look at [updateAttributes](https://botpress.com/reference/modules/_botpress_sdk_.users.html#updateattributes) for more information.
:::
