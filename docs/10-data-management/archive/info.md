---
sidebar_position: 7
title: dvs archive info
---

# dvs archive info

Show detailed information about an archive.

## Syntax

```bash
dvs archive info <id> --storage <name>
```

## Options

| Option | Description |
|--------|-------------|
| `--storage <name>` | Storage containing the archive (required) |

## Example

```bash
dvs archive info myapp-20250108-143052 --storage backup
```

## Output

```
Archive: myapp-20250108-143052.tar.gz.age

Metadata:
  Application: myapp
  Recipe: prestashop
  Created: 2025-01-08 14:30:52
  Size: 57 MB
  Encrypted: Yes

Contents:
  Files: 1,234 files
  Database: Yes (mysql)
  Config: Yes
  Web Root: public_html

DVS Version: 2.5.0
```

## Use Cases

- Verify archive contents before restore
- Check which recipe/version was used
- Confirm encryption status
