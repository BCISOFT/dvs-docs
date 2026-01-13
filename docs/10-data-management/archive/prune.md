---
sidebar_position: 5
title: dvs archive prune
---

# dvs archive prune

Remove old archives, keeping only recent ones.

## Syntax

```bash
dvs archive prune --storage <name> [options]
```

## Options

| Option | Description |
|--------|-------------|
| `--storage <name>` | Storage to prune (required) |
| `--keep-last <n>` | Keep n most recent archives |
| `--global` | Prune all apps (in app context) |
| `--dry-run` | Preview without deleting |
| `-y, --yes, --force` | Skip confirmation |

## Examples

```bash
# Preview what would be deleted
dvs archive prune --storage backup --keep-last 5 --dry-run

# Keep last 3 archives for current app
dvs archive prune --storage backup --keep-last 3

# Prune all apps, keep 5 each
dvs archive prune --storage backup --keep-last 5 --global

# Non-interactive
dvs archive prune --storage backup --keep-last 3 --yes
```

## Behavior

| Context | Behavior |
|---------|----------|
| In app | Prunes current app only |
| In app + `--global` | Prunes all apps |
| Outside app | Prunes all apps |

## Output

```
Pruning archives (keep-last: 5)...

myapp:
  Keep: myapp-20250108-143052, myapp-20250107-091500, ...
  Delete: myapp-20250101-120000, myapp-20241231-100000

Delete 2 archives? (y/N) y
Deleted: myapp-20250101-120000
Deleted: myapp-20241231-100000
```
