---
id: modules
title: Modules
---

---------------

Modules are a powerful way to extend the default functionalities of Botpress. They are very useful to encapsulate functionalities so you can reuse them elsewhere. Botpress comes with its own Modules, but you can also create your [custom modules](/docs/ntro-to-botpress/tutorials/create-modules) for your own needs.

## Features

- Add new actions, content types, hooks, and skills that extends Botpress;
- Add a specific **Module View** to your new functionalities.

## List of existing modules

Check out our [existing modules](https://github.com/botpress/botpress/tree/master/modules) to get a better idea of what's possible.

## Enabling or disabling modules

Modules are already bundled with the server binary for the moment. They are bundled in zip files in the folder `modules`. You can simply toggle the button to remove or add them.

:::tip
You can enable or disable them by opening the file `data/global/botpress.config.json` in a text editor and setting the value to `true` or `false`.
:::

```js
"modules": [
  ...
  {
    "location": "MODULES_ROOT/<module_name>",
    "enabled": true
  }
]
```