---
id: vonage
title: Vonage
---

---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import VonageCommunity from './vonage/community.md'
import VonageCloud from './vonage/cloud.md'

## Configuration

You have 2 ways to setup your smooch channel. The commmunity and the cloud version.

:::note
Currently, only WhatsApp is supported on this channel.
:::

  <Tabs>
  <TabItem value="community" label="Local deployment" default>
  <VonageCommunity/>
  </TabItem>
  <TabItem value="cloud" label="Cloud deployment (beta)">
  <VonageCloud/>
  </TabItem>
  </Tabs>
