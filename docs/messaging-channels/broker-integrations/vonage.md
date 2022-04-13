---
id: vonage
title: Vonage
---

---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import VonageLocal from './vonage/local.md'
import VonageCloud from './vonage/cloud.md'

:::note
Currently, only WhatsApp is supported on this channel.
:::

<Tabs>
  <TabItem value="cloud" label="Botpress Cloud (beta)" default>
    <VonageCloud/>
  </TabItem>
  <TabItem value="community" label="Local deployment">
    <VonageLocal/>
  </TabItem>
</Tabs>
