---
id: misunderstood
title: Misunderstood
---

--------------------

## Misunderstood Module

Botpress ships with a **Misunderstood** module that helps you deal with user questions that the NLU engine did not match to any existing QnA's.

This module will allow you to:
1. View all phrases from the user which your chatbot didn't understand.
2. Assign them to a QnA or workflow.
![The Misunderstood Interface](/assets/misundertood-interface.png)
### Requirements
Activate the module in `.../data/global/botpress.config.json` or from the admin interface.

### Misunderstood Tab
The `Misunderstood` tab contains all user questions to which the chatbot could not find a response from the QnA module's question set. Of course, the answer may already be in this body of solutions. Still, if the calculated confidence level is too low for election, a user's question will end up being "misunderstood" and will appear in this interface.

The misunderstood tab has the following filters:

- **New** is where misunderstood questions that a collaborator has not yet inspected are.
- **Pending**  tab contains questions that have been classified as needing further investigation or which fall in the domain of another collaborator
- **Done** is where misunderstood questions that have been inspected and classified are found.
- **Ignored** tab contains phrases that were later handled by another process in the event engine. An example is keywords

### QnA Thumbs Down Tab
This tab is a replica of the Misunderstood tab. The only difference is that this tab captures answers from the QnA module, which the chatbot user rated with a thumbs-down. Your chatbot user rates this answer using two icons that appear at the bottom left of the message bubble containing a response from the QnA Module.

### Rectifying Misunderstood / Thumbs Down
The Misunderstood module provides tools to help you train your chatbot to understand questions flagged as unknown. You can do this in the _New Misunderstood_ pane, which is in the middle of the interface. In addition, there are three buttons labeled **Ignore**, **Skip**, and **Ammend**.

![The Misunderstood Interface](/assets/mis-interface-new-item.png)

#### Ignore
If you choose this option, a misunderstood phrase will be ignored, which is helpful for keywords that have been captured in the misunderstood module or for users who enter profane language or gibberish.

#### Skip
These are phrases that you may want to investigate further before deciding how you can handle them. Examples are phrases that may require expert knowledge to craft answers. Another collaborator can then go through these phrases, providing solutions and redirects.

#### Amend
The amend button lets you assign the misunderstood phrase to either an **Intent** or a **QnA**. There is a search capability for both of these. If you make a mistake when assigning, you can always use the undo button and assign again.

![The Misunderstood Interface](/assets/mis-solve-ammend.png)

:::note
Currently, you cannot create a new QnA or a new intent from the Misunderstood module. Therefore, when the need arises, go to the module interface for either _QnA_ or _Natural Language Understanding_ and create then return to the Misunderstood module and classify.
:::