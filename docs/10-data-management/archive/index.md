---
sidebar_position: 1
title: Overview
---

# Archive

Create encrypted archives of your applications for backup and migration.

:::tip FREE Feature
Archive is available in all DVS plans.
:::

## Concept

Archives are complete snapshots of your application:
- Application files
- Database dump
- Configuration
- Encrypted with Age (optional)

## Quick Start

```bash
# Initialize encryption key (once)
dvs archive init-key

# Create archive
dvs archive create --storage backup

# List archives
dvs archive list --storage backup

# Restore
dvs archive restore --storage backup
```

## Commands

| Command | Description |
|---------|-------------|
| [`dvs archive create`](./create) | Create archive |
| [`dvs archive list`](./list) | List archives |
| [`dvs archive restore`](./restore) | Restore archive |
| [`dvs archive download`](./download) | Download without restoring |
| [`dvs archive prune`](./prune) | Remove old archives |
| [`dvs archive delete`](./delete) | Delete specific archive |
| [`dvs archive info`](./info) | Show archive details |
| [Key Management](./keys) | init-key, export-key, import-key |

## Archive Format

Archives are `.tar.gz` files containing:

```
myapp-20250108-143052.tar.gz
├── files/           # Application files
├── database.sql.gz  # Database dump
├── config/          # App configuration
└── metadata.json    # Archive info
```

When encrypted, the archive becomes `.tar.gz.age`.
