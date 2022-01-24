---
id: from-11-to-12
title: To 12.x Versions
---

---------------

:::note
You can get more details of the Botpress Framework changes in the [Changelog](https://github.com/botpress/botpress/releases).
:::

This guide shows you how to migrate your bot(s) to a Botpress version 12.x.

## Auto-migrate

No database or config files manipulation is required when upgrading from now on.

## Database Changes

- Users from `workspaces.json` are now in the `workspace_user` table.
- User credentials are stored in the database alongside their authentication strategy.
- Events are stored in the `events` table.

## SQLite

:::caution
Create a backup of your `/data` folder before making any changes.
:::

1. Download and extract the new version of Botpress.
2. Copy the content of your previous `/data` folder.
3. Paste it in the new `/data`. 
4. Delete the `assets` folder.
5. Start Botpress with `--auto-migrate` on the command line or `AUTO_MIGRATE=true` environment variable.

## PostgreSQL

:::caution
Create a backup of your `/data` folder before making any changes.
:::

1. Download and extract the new version of Botpress.
2. Start Botpress with `--auto-migrate` on the command line or `AUTO_MIGRATE=true` environment variable.

To start the latest version of Botpress on a new database, you will need to pull `/data` to your filesystem:

1. In the old version, in the admin:
    1. Click **Profile**. 
    1. Click **Server**.
    1. Click **Version Control**.
    1. Copy the command from **Version Control**, or click **Download archive**.
3. Open a terminal from the old version and execute the command. `/data` is now synced to the filesystem.
4. Copy `/data` and paste it in the new version's root. 
:::note
If you downloaded the archive, extract its contents to `/data`.
:::
5. Set the environment variable `DATABASE_URL` to the new database.
6. Start Botpress. 

The filesystem will sync to the database automatically.

## Custom Assets

For both database systems, if you have any custom assets, do these extra steps:

1. Start Botpress.
1. Wait for the server to be ready, then stop it. 
:::note
Doing this creates the updated assets for all components.
:::
1. Restore your custom asset files. 
1. Check and make sure they are compatible with your latest version.
1. Restart Botpress.