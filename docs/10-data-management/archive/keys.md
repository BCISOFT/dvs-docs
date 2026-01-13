---
sidebar_position: 8
title: Key Management
---

# Archive Key Management

Manage encryption keys for archive protection.

## dvs archive init-key

Initialize a new encryption key.

```bash
dvs archive init-key
```

Creates a new Age keypair stored in DVS configuration.

:::warning
Run this once. The key is required to decrypt archives. Back it up!
:::

## dvs archive export-key

Export the encryption key for backup.

```bash
dvs archive export-key > ~/backup/dvs-archive-key.backup
```

Store this file securely. You'll need it to:
- Restore archives on a new machine
- Recover from DVS reinstallation

## dvs archive import-key

Import a previously exported key.

```bash
dvs archive import-key ~/backup/dvs-archive-key.backup
```

Use this to:
- Set up DVS on a new machine
- Restore key after reinstallation

## Key Storage

Keys are stored in:
- Global: `$DVS_CONFIG/archive/key`
- Per-app: `<app-dir>/.dvs/archive/key`

## Alternative: Password Protection

For sharing archives without key exchange:

```bash
# Create with password
dvs archive create --storage backup --password "shared-secret"

# Restore with password
dvs archive restore latest --storage backup --password "shared-secret"
```
