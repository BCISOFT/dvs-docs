---
sidebar_position: 4
title: dvs backup restore
---

# dvs backup restore

Restore from a backup snapshot.

## Syntax

```bash
dvs backup restore [id|latest] --storage <name> [options]
```

## Selection Options

| Option | Description |
|--------|-------------|
| `--storage <name>` | Storage to restore from (required) |
| `id` | Snapshot ID to restore |
| `latest` | Restore most recent snapshot |

## Restore Options

| Option | Description |
|--------|-------------|
| `--files` | Restore application files |
| `--db` | Restore database |
| `--config` | Restore app configuration |
| `--remotes` | Restore remotes configuration |
| `--all` | Restore everything |
| `--extract` | Extract to folder without applying |
| `--target <path>` | Destination for `--extract` mode |

## Examples

```bash
# Interactive selection
dvs backup restore --storage backup

# Restore latest, files and database
dvs backup restore latest --storage backup --files --db

# Restore everything
dvs backup restore abc123de --storage backup --all

# Extract to folder for inspection
dvs backup restore latest --storage backup --extract --target ~/restore-preview
```

## Restore Flow

1. Select snapshot (interactive or specified)
2. Download from restic repository
3. Decrypt and decompress
4. Apply selected components:
   - Files: Copy to app directory
   - Database: Import dump
   - Config: Restore configuration

## Safety

- Files are restored in-place (existing files overwritten)
- Database is replaced entirely
- Use `--extract` to preview before applying
