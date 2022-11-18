---
title: About Misunderstood
---

# ِAbout Misunderstood
The misunderstood module holds infromation about the user messages that were misunderstood by the chatbot and it is available only for an activated bot.

## How does it work?
The chatbot determines that it didn't understand the user in three ways:
1. Big ambiguty between two or more intents with nearly the same confidence when matching what the user said


2. When what the user said didn't match with any intent, a "none" intent is selected by the chatbot


4. When a QnA is fired, and the user clickd on the "thumbs down" emoji

![image](https://user-images.githubusercontent.com/89806971/200899653-2010d62a-573d-4531-943a-49a62acd262c.png)

## Continous Learning
By checking the misunderstood module, you gurantee that your bot is continously learning and growing.
When a user input is identified as a misunderstood then we can do one of two things:

![image](https://user-images.githubusercontent.com/89806971/200905807-5ea04e46-0550-41f5-9cb8-6fb610b9ac5d.png)

### Automatic Utterance Clustering
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


## Misunderstood Statments Statuses
In general the misunderstood statements are categorized in three categories:

![image](https://user-images.githubusercontent.com/89806971/200909412-08005f33-d532-48e9-99bd-a16d4677b1df.png)

### Pending
Contains all the statements that are not processed yet, not ignored or amended to an intent or a QnA

### Resolved
Contains all the statements that are amended either to an intent or a QnA

### Ignored
Contains all the statements that are marked to by Ignored.
