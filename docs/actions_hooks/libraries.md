---
id: libraries
title: Libraries
---

--------------------
## External Libraries

<!--
:::danger Deprecated Warning
`Libraries` is deprecated and will be removed in Botpress 13.
::: -->

Code in actions should be kept relatively simple. You can set counters, format data, fetch data from an api using the included axios library.
If you need to use npm modules / libraries or libraries from other programming languages, we recommend you either set up a server for that purpose, or use serverless functions and then call the api using Botpress Actions. Using Botpress for heavy javascript computation use cases like image / video processing may cause latency issues for your bot. 
