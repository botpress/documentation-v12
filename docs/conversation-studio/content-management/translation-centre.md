---
id: translation-centre
title: Translation Centre
---

---------------

:::caution
Sorry, but this page is under construction!
:::

Your chatbots can support multiple languages. If a specific translation is not available for the current language, the chatbot will use the default language. When a user chats with your chatbot, we extract the browser's language and save it as a user attribute (available on the event as `user.language`).

Once the `user.language` property is set, it won't be overwritten. Therefore, you can ask the user what his preferred language is or use the NLU engine to detect it.

When rendering content elements, we will try to render the user's configured language; otherwise, it will use the chatbot's default one.