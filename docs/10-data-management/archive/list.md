---
sidebar_position: 3
title: dvs archive list
---

# dvs archive list

List available archives.

## Syntax

```bash
dvs archive list --storage <name> [options]
```

## Options

| Option | Description |
|--------|-------------|
| `--storage <name>` | Storage to list from (required) |
| `--global` | List all apps (when in app context) |

## Examples

```bash
# List current app archives
dvs archive list --storage backup

# List all apps
dvs archive list --storage backup --global
```

## Output

### Single App

```
Archives for 'myapp':
  ID                        Date                 Size
  myapp-20250108-143052    2025-01-08 14:30:52  57 MB
  myapp-20250107-091500    2025-01-07 09:15:00  56 MB
  myapp-20250106-180000    2025-01-06 18:00:00  55 MB
```

### Global (--global)

```
Archives by application:

myapp (3 archives):
  myapp-20250108-143052    2025-01-08 14:30:52  57 MB
  myapp-20250107-091500    2025-01-07 09:15:00  56 MB

otherapp (2 archives):
  otherapp-20250108-100000  2025-01-08 10:00:00  120 MB
```
