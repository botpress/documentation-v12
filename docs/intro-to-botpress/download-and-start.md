---
id: download-and-start
title: Set Botpress Up
---

---------------

## Download Botpress

Before installing the software (and after being totally sold by our incredible product), you have to download it. There are several versions of Botpress. You can download the one you prefer.

:::tip

If you already have created an awesome chatbot, follow the instructions about how to [upgrade](/docs/intro-to-botpress/update) your version.

:::

### Requirements

Make sure that your computer has at least:

- Memory (RAM): 4 GB or above.
- Hard Drive: 64 GB of free space or above.
- A 64 bits architecture
- Permission to read and write in the directory and subdirectories.

#### Latest Version

You want the latest version. Download it on Mac, Windows, or Linux on the official website [download page](https://botpress.com/download).

#### Older Versions

You can also choose between different [older versions](https://s3.amazonaws.com/botpress-binaries/index.html) and operating systems.

:::tip

Always use the latest version if you can.

:::

## Start Botpress

You can choose to start Botpress by the binary or the source code:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="binary" label="Binary">

<strong>Steps:</strong>
<ol>
    <li>Download Binary from Botpress Website.</li>
    <li>Double-click the Executable (.exe).</li>
</ol>

<strong>Pros:</strong>
<ul>
    <li>Much easier to start using</li>
    <li>Offers extensibility/configurability via</li>
        <ul>
        <li>Hooks: Reactive actions (e.g. Database trigger)</li>
        <li>Actions: Proactive (e.g. you call the action)</li>
        <li>Custom Modules: Packages of code that are built to extend capabilities of Botpress Platform</li>
        </ul>
</ul>

<strong>Version Update:</strong>
<p>When migrating to latest release, old chatbots get exported into the new version. Hooks/actions/bots should continue working.</p>
  </TabItem>
  <TabItem value="source-code" label="Source Code" default>
<strong>Steps:</strong>
<ol>
    <li>Download Source Code from GitHub.</li>
    <li>Install it in your servers.</li>
    <li>Open with IDE Tool.</li>
</ol>

<strong>Pros:</strong>
<p><li>Complete configurability of platform</li></p>

<strong>Cons:</strong>
<ul>
    <li>Harder to set up</li>
    <li>Edits have to be done in source code files</li>
    <li>New updates to Source Code have to be manually merged</li>
    <li>Edits in Source Code liable to not work with new version</li>
</ul>
  </TabItem>
</Tabs>

:::tip

You can also use the `./bp` command in the cmd prompt.

:::