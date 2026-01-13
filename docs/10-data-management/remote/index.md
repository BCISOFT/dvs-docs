---
sidebar_position: 1
title: Overview
---

# Remote

Configure and manage remote servers for file and database synchronization.

:::info PRO Feature
Remote sync is available in DVS PRO plan.
:::

## Concept

A **remote** represents a production/staging server you want to sync with:
- Pull files and database from remote
- Deploy changes to remote
- Configure per-component settings (files, database, dumps)

## Quick Start

```bash
# Configure a remote interactively
dvs remote configure prod

# Test connection
dvs remote test prod

# Pull from remote
dvs pull prod --files --database

# Deploy to remote
dvs deploy prod
```

## Commands

| Command | Description |
|---------|-------------|
| [`dvs remote configure`](./configure) | Configure remote (interactive) |
| [`dvs remote list`](./list) | List remotes |
| [`dvs remote test`](./test) | Test connection |
| [`dvs remote edit`](./edit) | Edit configuration |
| [`dvs remote delete`](./delete) | Delete remote |
| [Configuration](./configuration) | set, get, unset, params |

## Remote vs Storage

| | Storage | Remote |
|-|---------|--------|
| Purpose | Backup destination | Sync source/target |
| Components | backup, archive | files, database, dumps |
| Operations | Upload archives | Bidirectional sync |
