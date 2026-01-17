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

## Custom File Excludes

You can customize which files are excluded or included during pull operations by creating exclude files in `/app/.dvs/remotes/`.

### File Priority

| File | Scope |
|------|-------|
| `files.<remote>.excludes` | Specific to a remote (e.g., `files.prod.excludes`) |
| `files.excludes` | Global for all remotes |

The remote-specific file takes priority over the global one.

### Syntax

```
# Comments start with #
# Empty lines are ignored

# Exclude a path (standard)
path/to/exclude

# Include a path (prefix with !)
# Useful to include a subfolder of an excluded folder
!path/to/include
```

### Example: Include Module Images with img-proxy

When using img-proxy, the `img/` folder is excluded by default. To include a specific module's images:

```bash title="/app/.dvs/remotes/files.excludes"
# Include module images that are required locally
!img/mdghomecategorypush_categoryblock
!img/my_custom_module
```

This will:
1. Include `img/mdghomecategorypush_categoryblock/` and all its contents
2. Include `img/my_custom_module/` and all its contents
3. Still exclude the rest of `img/` as per recipe defaults

### Path Format

- Paths are relative to the webroot
- No leading `/` required (e.g., `img/folder` not `/img/folder`)
- Trailing `/` is optional

## Recipe Hooks

Recipes can define post-pull transformations:

| Recipe | Hook |
|--------|------|
| WordPress | URL replacement in database |
| PrestaShop | Shop URL and domain update |

These run automatically after database import.
