---
sidebar_position: 8
title: Key Management
---

# Backup Key Management

Manage encryption keys for restic repository protection.

## dvs backup init-key

Initialize the restic repository and encryption key.

```bash
dvs backup init-key
```

Creates a new restic repository with encryption. Required before first backup.

:::warning
Run this once per storage. The key is required to access backups. Back it up!
:::

## dvs backup export-key

Export the backup encryption key.

```bash
dvs backup export-key [--storage <name>] > ~/backup/dvs-backup-key.backup
```

### Options

| Option | Description |
|--------|-------------|
| `--storage <name>` | Storage to export key from |

Store this file securely. You'll need it to:
- Restore backups on a new machine
- Recover from DVS reinstallation
- Access backups from another DVS installation

## dvs backup import-key

Import a previously exported key.

```bash
dvs backup import-key <file> [--storage <name>]
```

### Options

| Option | Description |
|--------|-------------|
| `--storage <name>` | Storage to import key for |

Use this to:
- Set up DVS on a new machine
- Restore key after reinstallation
- Share backup access with another machine

## Key Storage

Backup keys are stored in:
- Global: `$DVS_CONFIG/backup/keys/<storage-name>`
- Per-app: `<app-dir>/.dvs/backup/keys/<storage-name>`

## Security Notes

- Keys are stored encrypted locally
- Never share keys over insecure channels
- Consider using a password manager for key backups
- Each storage has its own repository and key
