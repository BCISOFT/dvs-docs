---
sidebar_position: 8
title: dvs dumps 🔐
---

# dvs dumps

Manage and pull database dumps from remote servers.

:::info PRO Feature
Dumps is available in DVS PRO plan.
:::

## Concept

Pull database dumps from backup servers instead of live databases:
- Use existing backup infrastructure
- No impact on production database
- Access historical dumps

## Syntax

```bash
dvs dumps list <remote>
```

## Commands

| Command | Description |
|---------|-------------|
| `dvs dumps list <remote>` | List available dump files |

## Configuration

Configure dumps in remote config (`<app-dir>/.dvs/remotes/<name>.conf`):

```ini
[dumps]
transport = ssh
host = backup.example.com
user = backup
path = /home/mysql_backup/files
pattern = *.sql.gz
strategy = interactive
```

### Parameters

| Parameter | Description |
|-----------|-------------|
| `transport` | Transport type: `ssh`, `sftp`, `ftp`, `s3` |
| `host` | Server hostname |
| `path` | Directory containing dumps |
| `pattern` | Glob pattern to match files |
| `strategy` | Selection: `interactive` or `latest` |

## Pull Dumps

```bash
# Interactive selection
dvs pull backup --dumps

# Specific dump file
dvs pull backup --dumps --dump-file "2025-01-08_mydb.sql.gz"
```

## Example Output

```bash
$ dvs dumps list backup

Available dumps on 'backup':
  2025-01-08_mydb.sql.gz    45 MB    2025-01-08 02:00
  2025-01-07_mydb.sql.gz    44 MB    2025-01-07 02:00
  2025-01-06_mydb.sql.gz    43 MB    2025-01-06 02:00
```
