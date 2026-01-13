---
sidebar_position: 2
title: dvs archive create
---

# dvs archive create

Create an encrypted archive of the current application.

## Syntax

```bash
dvs archive create --storage <name> [options]
```

## Options

| Option | Description |
|--------|-------------|
| `--storage <name>` | Storage to use (required) |
| `--no-encrypt` | Skip encryption |
| `--no-secrets` | Exclude secrets from archive |
| `--password <pass>` | Use password instead of key |

## Examples

```bash
# Standard encrypted archive
dvs archive create --storage backup

# Unencrypted archive
dvs archive create --storage backup --no-encrypt

# Password-protected (for sharing)
dvs archive create --storage backup --password "secret123"
```

## Requirements

- Must be in an application context
- Encryption key initialized (`dvs archive init-key`) or use `--no-encrypt`/`--password`

## Archive Contents

| Content | Included |
|---------|----------|
| Application files | Always |
| Database | If configured |
| `<app-dir>/.dvs/` config | Always |
| Secrets | Unless `--no-secrets` |

## Output

```
Creating archive...
  Files: 1,234 files (45 MB)
  Database: myapp (12 MB)
  Encrypting...
  Uploading to backup...
Archive created: myapp-20250108-143052.tar.gz.age
```
