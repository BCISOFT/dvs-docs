---
sidebar_position: 5
title: dvs backup prune
---

# dvs backup prune

Remove old snapshots according to retention policy.

## Syntax

```bash
dvs backup prune --storage <name> [options]
```

## Options

| Option | Description |
|--------|-------------|
| `--storage <name>` | Storage to prune (required) |
| `--keep-last <n>` | Keep last n snapshots (default: 7) |
| `--keep-daily <n>` | Keep n daily snapshots (default: 7) |
| `--keep-weekly <n>` | Keep n weekly snapshots (default: 4) |
| `--keep-monthly <n>` | Keep n monthly snapshots |
| `--global` | Prune all apps (in app context) |

## Examples

```bash
# Default retention policy
dvs backup prune --storage backup

# Custom retention
dvs backup prune --storage backup \
  --keep-last 5 \
  --keep-daily 7 \
  --keep-weekly 4 \
  --keep-monthly 6

# Prune all apps
dvs backup prune --storage backup --global
```

## Retention Policy

Restic keeps snapshots matching ANY of the criteria:

| Policy | Keeps |
|--------|-------|
| `--keep-last 7` | 7 most recent snapshots |
| `--keep-daily 7` | 1 per day for 7 days |
| `--keep-weekly 4` | 1 per week for 4 weeks |
| `--keep-monthly 6` | 1 per month for 6 months |

## Output

```
Pruning snapshots...

Keeping:
  abc123de (2025-01-08) - latest
  def456gh (2025-01-07) - daily
  ...

Removing:
  old123ab (2024-12-01)
  old456cd (2024-11-15)

Freed: 234 MB
```
