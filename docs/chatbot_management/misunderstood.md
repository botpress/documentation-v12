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
- **Ignore**: You can choose to ignore a statement, so it is not logged again as a misunderstood and also **Revert** it back.

## Automatic Utterance Clustering

In order to make it easier for our builder (conversation designers, developers, etc.) we have added a new functionality in the misunderstood module, which is the automatic utterance clustering. When a builder click an utterance to take a decision about, the user statements are reordered to push all the matching/similar statements to the one the builder have chose. 

So for example, below are the misunerstood statements:

![image](https://user-images.githubusercontent.com/89806971/202796242-4398de57-db26-4ca9-ba5e-99d7cc44951b.png)

We can see, food related statements are in the middle, when we select one of them, it is pushed up to the top along with other matching/similar statements:

![image](https://user-images.githubusercontent.com/89806971/202796362-44de41c8-655c-435a-8b09-184d1d76c9cd.png)

### Amend
You can amend your intent(s) or QnA(s) utternaces with what was not understood

![image](https://user-images.githubusercontent.com/89806971/200906095-72cff795-9a35-4f33-a29e-c3e828caee37.png)

### Ignore
You can choose to ignore a statement, so it is not logged again as a misunderstood

![image](https://user-images.githubusercontent.com/89806971/200906493-3da3968f-ba27-4532-957c-3ecb6f2d8186.png)

And you can also **Revert** that

![image](https://user-images.githubusercontent.com/89806971/200906745-50a03933-9066-494c-83c6-edf4e12cf90b.png)
## Misunderstood Status

The misunderstood messages split into 3 categories:

1. **Pending**: Messages that must either be Ignored or Amended.
2. **Resolved**: Messages that have been Amended.
3. **Ignored**: Messages that have been Ignored.
