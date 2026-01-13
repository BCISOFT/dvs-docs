---
sidebar_position: 6
title: dvs pull 🔐
---

# dvs pull

Pull files and database from a remote server.

:::info PRO Feature
Pull is available in DVS PRO plan.
:::

## Syntax

```bash
dvs pull [remote] [options]
```

## Options

| Option | Description |
|--------|-------------|
| `--files` | Pull files only |
| `--database` | Pull database only |
| `--dumps` | Pull from backup dumps |
| `--dump-file <path>` | Specific dump file |

## Examples

```bash
# Interactive: select remote + components
dvs pull

# Pull files from prod
dvs pull prod --files

# Pull files + database
dvs pull prod --files --database

# Pull from backup dumps
dvs pull backup --dumps

# Specific dump file
dvs pull backup --dumps --dump-file "2025-01-08_mydb.sql.gz"
```

## Remote Selection

- **Single remote**: Auto-selected
- **Multiple remotes**: Interactive menu or explicit name

## Component Selection

- **None specified**: Interactive multi-select
- **Explicit**: `--files`, `--database`, `--dumps`

## Recipe Hooks

Recipes can define post-pull transformations:

| Recipe | Hook |
|--------|------|
| WordPress | URL replacement in database |
| PrestaShop | Shop URL and domain update |

These run automatically after database import.
