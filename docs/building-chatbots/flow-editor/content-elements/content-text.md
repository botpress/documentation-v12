---
id: content-text
title: Content - Text
---

--------------------

The Text content is one of the most important piece of content that you will use. the textual sentences that your chatbot sends. 

You can write HTML in the text content on the web channel, and your chatbot will render it correctly. This opens up the possibility of including iFrames and constructing miniature web pages (commonly known as web views) in your content without creating custom components.

## Add a Text in a Node

1. In the Flow Editor, click the node where you want to add text.
1. Choose where to put your text: **On Enter**, **On Receive**, or **Transitions**.
1. Click the **+** button.
1. Under **Message**, click the box.
    1. In the **Pick Content** dialog, under **Search In**, select **Text**.
    1. You can either:
        - Select an existing text in the list
        :::info 
        This will bring you directly to step 5.
        :::
        - Type a new text in the **Search Text** bar.
    1. Click **Create new Text**.
    1. A new window will be displayed with the following options:
        - The **[Add Alternates](#alternates)** button.
        - The **[Use markdown](#use-markdown)** radio button.
        - The **[Show typing indicators](#show-typing-indicators)** radio button.
    1. Click **Submit**.
1. Click **Add Action (Alt+Enter)**.

Your text is now displayed in green in the selected node.

<img src="/assets/content-text-example.png" width="300" />

## Options

When adding a **Text** content, you can modify some options:

### Insert Variables

When hovering the box where you type your message, the `</>` symbol appears. This button helps you easily insert variables within your message. When you click it, it shows a list of variables that you can use, either `temp.`, `user.`, `session.`, or `event.`.

### Alternates

Alternates are other sentences that mean exactly the same as the text. Those will be sent randomly to your users. 

:::tip Best Practice
Adding alternates is recommended since it makes your chatbot more user-friendly. The more alternates you have, the more your chatbot looks human.
:::

You can easily add alternate answers to your regular text message. You just have to click **Add Alternates** and you will be able to write as many alternates as you want in the boxes.

You can use the trash icon to delete your alternate whenever you want.

### Use Markdown

:::note
The radio button is checked by default. You can uncheck it.
:::

You can use [markdown](https://daringfireball.net/projects/markdown/syntax#overview), which is a markup syntax that allows you to easily add formatting and style in your text. 

:::tip Best Practice
Ensure that the target channel can render this text.
:::

### Show Typing Indicators

:::note
The radio button is checked by default. You can uncheck it.
:::

When your user is chatting with the chatbot, they will see the icon ![Type Indicators](/assets/type_indicators.png) (a bubble with three dots) while the chatbot is "typing" before receiving an answer.