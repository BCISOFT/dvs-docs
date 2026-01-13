---
sidebar_position: 2
title: dvs backup create
---

# dvs backup create

Create a new backup snapshot.

## Syntax

```bash
dvs backup create --storage <name> [options]
```

## Options

| Option | Description |
|--------|-------------|
| `--storage <name>` | Storage to use (required) |

## Example

```bash
dvs backup create --storage backup
```

## Output

```
Creating backup snapshot...
  Scanning files: 1,234 files (45 MB)
  Dumping database: myapp (12 MB)
  
Uploading to restic repository...
  Files new:     45
  Files changed: 12
  Files unchanged: 1,177
  
Snapshot abc123de created
  Total size: 57 MB
  Added to repo: 8 MB (dedup)
```

## What's Backed Up

| Content | Included |
|---------|----------|
| Application files | Yes |
| Database | Yes (dump) |
| App configuration | Yes |
| DVS configuration | Yes |

## Requirements

- Must be in app context
- Storage configured with `[backup]` section
- Restic repository initialized (auto on first use)
