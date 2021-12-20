---
id: inter-bot-communication
title: Inter-bot Communication / Delegation
---

-----------------

Sometimes your chatbot needs to "delegate" questions or tasks to other bots. We call this concept "inter-bot" communication.

The code in this sample is available in the [examples](https://github.com/botpress/botpress/tree/master/examples/interbot) directory of our GitHub repository (update `workspaces.json` with the three chatbots if you copied them).

### Structure

### Step 1 – Creating the Chatbots
You will need to create three chatbots: one "master" chatbot (the one that will delegate questions to other bots) and two "slave" chatbots (the ones who get asked questions by the master).

Head to the admin interface and create three chatbots with the names, `master`, `sub1`, and `sub2`, respectively, all based on the "empty bot" template.

- Leave the `master` chatbot empty for now.
- In the `sub1` bot, create some QnA entries related to the same domain (pick the default `global` category/context).
- In the `sub2` bot, do the same thing you did with `sub1`, but for another domain.

For example, `sub1` could answer questions about Human Resources, while `sub2` could answer IT Operations questions.

At this point, you should have three bots. Master doesn't do anything, while sub1 and sub2 can answer HR and IT Operations questions respectively when you talk to them individually.

### Step 2 – Delegation Action (Master Bot)

To make the Master chatbot ask the questions to the slave bots, we will create an action called `delegate_to_bots` inside the `master` bot.

This action [can be found here](https://github.com/botpress/botpress/tree/master/examples/interbot/bots/master/actions/delegate_to_bots.js). Just copy and paste this file in your `<data>/bots/master/actions` directory.

Next, create a flow that makes use of that action. For the sake of simplicity, the `master` chatbot will only be able to delegate what you tell him to the slave bots. You could call the action at any time and even adapt the `delegate_to_bots` action to pass in more contexts.

In the `main.flow.json` flow of your master bot, recreate the structure below.

The content of the text element is the following:

```
The chatbot {{temp.delegation.0.botId}} can help you with that question.

[Talk to {{temp.delegation.0.botId}}]({{{temp.delegation.0.botUrl}}})

By the way, {{temp.delegation.0.botId}} is telling you:
> {{{temp.delegation.0.answer}}}
```

> **Tip:** The reason we use triple mustaches (`{{{ ... }}}`) is to prevent Botpress from escaping the special characters found in the variables.

### Conclusion

That's it! You now have the basic structure in place to allow inter-bot collaboration.
