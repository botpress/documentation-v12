---
id: microsoft-teams
title: Microsoft Teams
---

---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import TeamsLocal from './teams/local.md'
import TeamsCloud from './teams/cloud.md'

## Requirements

### Configure Microsoft Account

Your Microsoft Account should have access to Azure and Teams. You can check out the [Azure](https://docs.microsoft.com/en-us/azure/devops/?view=azure-devops) and [Teams](https://docs.microsoft.com/en-us/microsoftteams/) documentation for information on how to make these connections.

## Channel Configuration

<Tabs>
  <TabItem value="cloud" label="Botpress Cloud (beta)" default>
    <TeamsCloud/>
  </TabItem>
  <TabItem value="community" label="Local deployment">
    <TeamsLocal/>
  </TabItem>
</Tabs>
