---
id: monitoring
title: Monitoring
---

---------------

:::info
Enterprise only.
:::

Monitoring is an essential part of any software deployment. Botpress includes, out of the box, a simple but intuitive dashboard
designed to keep an eye on your servers. Key metrics are collected (like CPU and Memory usage), including a couple of botpress-related metrics.

Metric data is collected and stored using a Redis server.

## Prerequisite

- You must enable Botpress Pro with a valid license key.
- You must use a Redis Server with a version 2.8 or more recent.

## Quick Start

1. Open your `botpress.config.json` file.
1. Set `pro.monitoring.enabled` to `true`.
2. Set an environment variable named `CLUSTER_ENABLED` to `true`.
3. Set another environment variable named `REDIS_URL` which should point to your server (example provided below).
4. Start your Botpress Server.

## Configuration

The default values should be good for most situations. They are described in details directly in the [Botpress Config Definition](https://github.com/botpress/botpress/blob/master/src/bp/core/config/botpress.config.ts)

**Redis Configuration:** The environment variable `REDIS_URL` must be built like this: `redis://user:pass@hostname:port`. If you start it locally, this should do the trick: `REDIS_URL=redis://localhost:6379`.

### Metrics

The following metrics are collected for every node of your Botpress Cluster:

- Average % of CPU usage
- Average % of Memory usage
- Number of HTTP requests processed
- Number of incoming events (when users sends messages to the bot)
- Number of outgoing events (anything the bot sends back to users)
- Number of warnings
- Number of errors
- Latency of HTTP requests