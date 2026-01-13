---
sidebar_position: 3
title: dvs backup list
---

# dvs backup list

List backup snapshots.

## Syntax

```bash
dvs backup list --storage <name> [options]
```

## Options

| Option | Description |
|--------|-------------|
| `--storage <name>` | Storage to list from (required) |
| `--latest <n>` | Show only last n snapshots |
| `--global` | List all apps (in app context) |

## Examples

```bash
# List current app snapshots
dvs backup list --storage backup

# Show only last 5
dvs backup list --storage backup --latest 5

# List all apps
dvs backup list --storage backup --global
```

## Output

```
Snapshots for 'myapp':
  ID        Date                 Size
  abc123de  2025-01-08 14:30:52  57 MB
  def456gh  2025-01-07 09:15:00  56 MB
  ghi789jk  2025-01-06 18:00:00  55 MB

Repository stats:
  Total size: 168 MB
  Deduplicated: 72 MB (saved 57%)
```
