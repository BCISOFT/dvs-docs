---
sidebar_position: 4
title: dvs archive restore
---

# dvs archive restore

Restore an application from archive.

## Syntax

```bash
dvs archive restore [id|latest] --storage <name> [options]
```

## Options

### Selection

| Option | Description |
|--------|-------------|
| `--storage <name>` | Storage to restore from (required) |
| `id` | Archive ID to restore |
| `latest` | Restore most recent archive |

### Restore Options

| Option | Description |
|--------|-------------|
| `--apply` | Auto-apply restored files |
| `--no-config` | Don't restore config files |
| `--password <pass>` | Decrypt with password |

### New App (outside app context)

| Option | Description |
|--------|-------------|
| `--path <dir>` | Host directory for new app |
| `--name <app_name>` | Name for the new app |

## Examples

### In App Context

```bash
# Interactive selection
dvs archive restore --storage backup

# Restore latest
dvs archive restore latest --storage backup

# Restore specific archive
dvs archive restore myapp-20250108-143052 --storage backup
```

### Create New App from Archive

```bash
dvs archive restore myapp-20250108-143052 \
  --storage backup \
  --path ~/apps/restored-app \
  --name restored-app
```

## Restore Flow

1. Download archive from storage
2. Decrypt (if encrypted)
3. Extract files to temporary location
4. Preview changes
5. Apply files (if `--apply` or confirmed)
6. Import database (if included)
