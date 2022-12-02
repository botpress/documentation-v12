---
title: Misunderstood
---

![Messaging channels](/img/docs/chatbot_mis.png)
The misunderstood module holds information about the user messages that were misunderstood by the chatbot and it is available only for an activated bot.

## How does it work?

The chatbot determines that it didn't understand the user in three ways: 

1. Big ambiguity between two or more intents with nearly the same confidence when matching what the user said
2. When what the user said didn't match with any intent, a "none" intent is selected by the chatbot
3. The user clicked the "thumbs down" emoji on an elected Q&A
   
## Continuous Learning

By consulting the misunderstood module, you guarantee that your bot is continuously learning and growing. Once a user input is identified as misunderstood, you can either:

- **Amend**: You can amend your intent(s) or QnA(s) utterances with what was not understood, or
- **Ignore**: You can choose to ignore a statement, so it is not logged again as misunderstood.

## Automatic Utterance Clustering

In order to make it easier for our builder (conversation designers, developers, etc.) we have added a new functionality in the misunderstood module, which is the automatic utterance clustering. When a builder click an utterance to take a decision about, the user statements are reordered to push all the matching/similar statements to the one the builder have chose. 

So for example, below are the misunderstood statements:

![Misunderstood](/img/docs/chatbot_miss.png)

We can see, food related statements are in the middle, when we select one of them, it is pushed up to the top along with other matching/similar statements.

### Utterance operations:

![Misunderstood](/img/docs/chatbot_miss3.png)

- **Amend**: You can amend your intent(s) or QnA(s) utterances with what was not understood.
- **Ignore**: You can choose to ignore a statement, so it is not logged again as a misunderstood.
- **Revert**: And you can also **Revert** back to previous status.

## Misunderstood Status

The misunderstood messages split into 3 categories:

1. **Pending**: Messages that must either be Ignored or Amended.
2. **Resolved**: Messages that have been Amended.
3. **Ignored**: Messages that have been Ignored.
