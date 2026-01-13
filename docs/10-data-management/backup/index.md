---
sidebar_position: 1
title: Overview
---

# Backup

Incremental backups with deduplication using restic.

:::info PRO Feature
Backup is available in DVS PRO plan.
:::

## Concept

Unlike archives (full snapshots), backups are:
- **Incremental**: Only changed data is transferred
- **Deduplicated**: Identical blocks stored once
- **Versioned**: Multiple snapshots over time
- **Space-efficient**: Typically 10-20% of full backup size

## Quick Start

```bash
# Create backup
dvs backup create --storage backup

# List snapshots
dvs backup list --storage backup

# Restore
dvs backup restore --storage backup
```

## Commands

| Command | Description |
|---------|-------------|
| [`dvs backup create`](./create) | Create snapshot |
| [`dvs backup list`](./list) | List snapshots |
| [`dvs backup restore`](./restore) | Restore snapshot |
| [`dvs backup prune`](./prune) | Remove old snapshots |
| [`dvs backup delete`](./delete) | Delete specific snapshot |
| [Info & Stats](./info) | info, stats, check, config |
| [Key Management](./keys) | init-key, export-key, import-key |

## How It Works

1. **First backup**: Full data upload
2. **Subsequent backups**: Only changed blocks
3. **Deduplication**: Same content = same block ID
4. **Encryption**: All data encrypted before upload

```
Snapshot 1: [A][B][C][D][E]     100%
Snapshot 2: [A][B][C][F][E]     20% (only F changed)
Snapshot 3: [A][B][G][F][E]     20% (only G changed)
```
