---
sidebar_position: 6
title: dvs archive delete
---

# dvs archive delete

Delete a specific archive.

## Syntax

```bash
dvs archive delete <id> --storage <name>
```

## Options

| Option | Description |
|--------|-------------|
| `--storage <name>` | Storage containing the archive (required) |

## Example

```bash
dvs archive delete myapp-20250101-120000 --storage backup
```

## Confirmation

Prompts before deletion:

```
Delete archive 'myapp-20250101-120000'? (y/N)
```

## Notes

- Permanently removes the archive from storage
- Cannot be undone
- Use `dvs archive list` to find archive IDs
