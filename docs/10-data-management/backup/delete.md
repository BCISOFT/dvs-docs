---
sidebar_position: 6
title: dvs backup delete
---

# dvs backup delete

Delete a specific snapshot.

## Syntax

```bash
dvs backup delete <id> --storage <name> [options]
```

## Options

| Option | Description |
|--------|-------------|
| `--storage <name>` | Storage containing snapshot (required) |
| `--force, -f, -y` | Skip confirmation |

## Example

```bash
dvs backup delete abc123de --storage backup
```

## Confirmation

```
Delete snapshot 'abc123de' (2025-01-08 14:30)? (y/N)
```

## Notes

- Removes snapshot from restic repository
- Data blocks may remain if referenced by other snapshots (deduplication)
- Run `dvs backup prune` to reclaim space from orphaned blocks
