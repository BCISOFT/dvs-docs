---
sidebar_position: 5
title: dvs archive download
---

# dvs archive download

Download an archive from storage without restoring it.

## Syntax

```bash
dvs archive download <archive_id> --storage <name> [options]
```

## Options

| Option | Description |
|--------|-------------|
| `--storage <name>` | Storage to download from (required) |
| `--output <path>` | Output file path (default: current directory) |
| `--password <pass>` | Decrypt with password (if encrypted with password) |

## Examples

```bash
# Download to current directory
dvs archive download myapp-20250108-143052 --storage backup

# Download to specific path
dvs archive download myapp-20250108-143052 --storage backup --output ~/downloads/

# Download password-protected archive
dvs archive download myapp-20250108-143052 --storage backup --password "secret"
```

## Output

The downloaded file is saved locally:
- Encrypted: `myapp-20250108-143052.tar.gz.age`
- Decrypted: `myapp-20250108-143052.tar.gz`

## Use Cases

- Manual inspection of archive contents
- Transfer archive to another system
- Keep a local copy before restoration
- Share archive with team members
