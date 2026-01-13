---
sidebar_position: 4
title: dvs storage test
---

# dvs storage test

Test storage connection and capabilities.

## Syntax

```bash
dvs storage test <name> [options]
```

## Options

| Option | Description |
|--------|-------------|
| `--section <name>` | Test specific section (default, backup, archive...) |

## Example

```bash
dvs storage test mybackup
```

Output:
```
Testing storage 'mybackup'...
  Transport: sftp
  Host: backup.example.com
  Connection: ✓ OK
  Upload: ✓ OK
  Download: ✓ OK
  Delete: ✓ OK
```

## Capabilities Detection

The test verifies which operations the storage supports:

| Capability | Description |
|------------|-------------|
| `UPLOAD` | Can upload files |
| `DOWNLOAD` | Can download files |
| `DELETE` | Can delete files |
| `LIST` | Can list directory contents |
| `MKDIR` | Can create directories |
