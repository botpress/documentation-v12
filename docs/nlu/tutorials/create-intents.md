---
id: create-intents
title: Create Intents
---

--------------

## Method 1: Switch Case

Let's create three intents: 
- `book-flight`; 
- `cancel-flight`;
- `get-prices`.

We can tell our chatbot to go to a particular node based on these intents by creating a transition. Click on the `Intent Is` radio button and select the intent of your choice. We will leave `When the condition is met` empty for now because we will manually link the nodes later on.

After adding transition, the entry node now looks like the screenshot below. For some use-cases, it is worthy to note that transitions are executed in sequence. Therefore, when a phrase covers more than one intent, be careful which one you would like to be processed first.

To test whether the intents are being detected correctly, let's link a node to each transition. We will add some text to these nodes, which will confirm our intention. Please make sure that you train the chatbot using the `train chatbot` button in the bottom right corner of the studio interface before testing your chatbot.

Now when we test our chatbot, we will get the expected result. This powerful feature allows you to act on any anticipated user interaction you have created intent for. To get more accurate results, add at least ten training phrases to each intent.

## Method 2: QNA

This method is the easiest way to act on an intent. We didn't showcase it first because QNA uses something very similar to the Switch Case Method in the background.

Let's remove all transitions from our flow. QNA will "jump" to the flow/node of your choice.

In the QNA interface, we will create flight booking questions. Instead of providing an answer to the QnA, we will redirect the user to a specific node when a particular intent is detected.

let's go to Paris
I want to travel to Montreal from the USA
I want to go from Quebec to NYC
I want to book a flight to Tokyo from Namib
Book a flight to London from Paris
I need to fly from Accra to Barcelona
Are there any flights to Florida
I need a flight from Toronto to Ottawa
Is there a flight from Boston to Los Angeles

Testing the chatbot using our new QnA demonstrates how this method works. When a QnA is detected with a high confidence threshold, it's elected, and the user is redirected to the node specified in the QnA.

:::note
This method is not considered best practice, but it does the job for quick demonstrations. However, we recommend using the first method if you have basic intents without any slots.
:::

## Method 3: Combining Switch Case and Slot Skill

The Slot Skill can be used in collaboration with the "Switch Case Method" when intent has one or more slots. For this example, let us add a `destination` slot 'to the `book-flight` intent. You can learn more about adding slots in the entities topic 

After that, we will create a new Slot Skill and select the `destination` slot.

We can now edit our confirmation message so that it confirms the actual destination.

The flow now looks like this:

When we test the conversation, we can see that the bot will confirm the flight booking destination.

:::note
The Slot Skill uses implicit intent matching in the background. So it's not required to have a transition to a Slot Skill.
:::
