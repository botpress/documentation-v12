---
title: Configuration Variables
---
![Config Variables](/img/docs/chatbot_config.png)
You can define configuration variables that will be accessible inside your Hooks and Actions. 

:::caution

- Values are not synchronized automatically on the cloud and must be configured manually.
- Values set in studio are for development environment and values set in cloud are for production environment.

:::

![Chatbot Details](/img/docs/chatbot_config_steps.png)

1. Go to Chatbot Information > Configuration variables and create a Key and add development environment's value. Click save and republish your chatbot.
2. On your cloud dashboard, under chatbot's Configuration Variables tab, you can set your production_value to the same key.(In case of different values for different environments)

