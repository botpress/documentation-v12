---
id: content-card
title: Content - Card
---

---

A card is a message with a title and an optional subtitle that contains an image and action buttons.

![Card Example](/assets/card-example.png)

### Options

When adding a **Card** content, you can modify some options:

:::tip
When hovering a box where you can type, the `</>` symbol appears. This button helps you easily insert variables within your message. When you click it, it shows a list of variables that you can use such as `temp.`, `user.`, `session.`, or `event.`.
:::

#### Title

This is the most important information regarding your card. It will be displayed in bold and just under the selected image.

:::tip Best Practice
Your title should be short, precise, and relevant.
:::

#### Subtitle

The subtitle gives extra information (that couldn't be in the title) about the card.

:::tip
The subtitle should be a complement for the title. It should add relevant information for the user.
:::

#### Image

There are two ways to add an image:

- Under **Image**, click the square with an up arrow. Then, you can choose which image you want to add there from your storage.
- Under **Image**, click the **Or enter URL** button at the bottom right of the square. A box will appear and you can type the URL of your image.

:::note
Don't forget to take a look at the list of [supported formats](/building-chatbots/flow-editor/content-elements/content-image#supported-formats).
:::

## Add an Action Button

An action button is a button that triggers an action.

1. When creating your card, there is a **Add Action Button** button that you can click. This will open a new dialog box.
   1. Under **[Title of the button](#title-of-the-button)**, type the name you want to give to your button.
   1. Under **[action](#action)**, you can select either:
      - **Say something**;
      - **Open URL**;
      - **Postback**.
   1. The last box is about entering a text or the ID of a content element that you want to show in the conversation.
1. Click **Submit**.

### Options

When adding an action button, you can modify some options:

#### Title of the button

This title is what the user will see on the button. They will click the button and it will trigger one of the three possible actions.

:::tip
Make sure that the title is something relevant to the user.
:::

#### Action

- **Say something:** when the user clicks the button, it will answer with a text.
- **Open URL:** when the user clicks the button, they will be redirected to a website, opening a new window in their browser.
- **Postback**: when the user clicks the button, the desired data (typed in the payload box) will be sent back to the server. For example, your button could be titled `Buy` with `idOfMyItem` as a payload.
