---
sidebar_position: 7
title: Info & Stats
---

# Backup Information

Commands to inspect backup repository status.

## dvs backup info

Quick overview of backup configuration.

```bash
dvs backup info --storage <name>
```

Output:
```
Backup Configuration:
  Storage: backup
  Repository: initialized
  Last backup: 2025-01-08 14:30:52
  Snapshots: 12
```

## dvs backup stats

Detailed repository statistics.

```bash
dvs backup stats --storage <name> [options]
```

### Options

| Option | Description |
|--------|-------------|
| `--storage <name>` | Storage to check (required) |
| `--detailed` | Include integrity check |

### Output

```
Repository Statistics:
  Total size: 1.2 GB
  Deduplicated: 450 MB
  Compression ratio: 62%
  
  Snapshots: 45
  Unique files: 12,345
  
Deduplication savings: 750 MB (63%)
```

## dvs backup check

Verify repository integrity.

```bash
dvs backup check --storage <name> [options]
```

### Options

| Option | Description |
|--------|-------------|
| `--storage <name>` | Storage to check (required) |
| `--deep` | Read all data (slower, thorough) |

### Output

```
Checking repository integrity...
  Pack files: ✓ OK
  Index: ✓ OK
  Snapshots: ✓ OK
  
Repository is healthy.
```

## dvs backup config

Show backup configuration.

```bash
dvs backup config
```
