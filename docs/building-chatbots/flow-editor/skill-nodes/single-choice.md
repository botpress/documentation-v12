---
id: single-choice
title: Single Choice
---

The choice skill provides a way to select multiple choice in free text format or with button.

![choice](/assets/skills/choice-answer.png)

## Creating Your Skill

1. From the Flow Editor view, click **Insert Skill**.
1. Select **Choice**
   ![select-choice](/assets/skills/choice.png)
1. Select or create a **single choice** content-type
   ![choice-generating](/assets/skills/choice-generating.png)

:::note
You can disabled free text if you are looking for a specific value
:::

### Single Choice options

### Message

The message is the question you ask.

### Choice

Create choice related to a question.

#### Message

Label for the choice

#### Value

Value to expect for the selected option

:::info
Intent can be use in the value. You can use a Intent in the following format
`intent:INTENT_NAME`

Make sure your `INTENT_NAME` exist in the NLU > Intents menu. It's really useful for channel that doesn't support inline button.
:::

![intent](/assets/skills/intent.png)
