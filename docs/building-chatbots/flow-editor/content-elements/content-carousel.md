---
id: content-carousel
title: Content - Carousel
---

---

A carousel is an array of cards, that can be presented horizontally or vertically.

The carousel has the Postback feature, which allows you to send custom data to the Botpress server when the user clicks a button in the carousel. Using a hook, you can make your Botpress server act upon the received data.

## Example

When our chat user clicks on a button in the carousel, we send a payload with a city code (`mtl` [Montréal] or `nyc` [New York City]).

Then, we create a hook that saves this city code in the memory. The bot then flows to a particular node, depending on the value in memory.

As you can see, the bot first displays a carousel, then a different node based on the value of `temp.cityClicked`. The current transitions do not work yet, let's see the hook.
