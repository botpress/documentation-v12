---
title: Misunderstood
---
The misunderstood module holds infromation about the user messages that were misunderstood by the chatbot and it is available only for an activated bot.
## How does it work?
The chatbot determines that it didn't understand the user in three ways: 
1. Big ambiguty between two or more intents with nearly the same confidence when matching what the user said
2. When what the user said didn't match with any intent, a "none" intent is selected by the chatbot
3. When a QnA is fired, and the user clicked on the "thumbs down" emoji


## Continous Learning
By checking the misunderstood module, you gurantee that your bot is continously learning and growing.
When a user input is identified as a misunderstood then we can do one of two things:
1. **Amend**: You can amend your intent(s) or QnA(s) utternaces with what was not understood
2. **Ignore**: You can choose to ignore a statement, so it is not logged again as a misunderstood and also **Revert** it back.

## Misunderstood Statments Statuses
In general the misunderstood statements are categorized in three categories:
1. **Pending**: Contains all the statements that are not processed yet, not ignored or amended to an intent or a QnA
2. **Resolved**: Contains all the statements that are amended either to an intent or a QnA
3. **Ignored**: Contains all the statements that are marked to by Ignored.