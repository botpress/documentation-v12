---
id: choice
title: Skill - Choice
---

---------------

:::caution
Sorry, but this page is under construction!
:::

This skill is a spin-off from the realization that most chatbot conversations will eventually have a question with hardcoded choices as answers. Although a content element lets the user select buttons to pick a response, the choice skill adds a few more caveats to that content element, which we will explore here.


In addition to just letting you click a button and you are on your way, the choice skill adds a few checks and transitions to the process.

First of all, where freely typed responses are not disabled, the choice skill allows you to add answers which the user might type directly. In this way, the chatbot can understand and classify other responses besides the button click, adding a good measure of flexibility.


The choice skill also allows you to let the user have another go at answering the question asked. In instances where the user might fail to perceive that a button response is required, the chatbot prompts the user to choose from the supplied choices. It is also crucial in cases where the chatbot developer does not pre-empt the freely typed responses. 

If the chatbot doesn't understand a user's answer, it will react by guiding the user on how to respond to the question before asking the question again. 


The choice skill also offers an option to transition to a different node when the user repeatedly fails to answer a question.