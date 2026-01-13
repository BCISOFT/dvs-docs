---
sidebar_position: 7
title: Configuration
---

# Storage Configuration

Manage storage parameters via CLI.

## dvs storage set

Set a parameter value.

```bash
dvs storage set <name>.<section>.<param> <value>
```

Examples:
```bash
dvs storage set mybackup.default.host server.example.com
dvs storage set mybackup.default.port 2222
dvs storage set mybackup.backup.path /data/restic
```

## dvs storage get

Get parameter value(s).

```bash
dvs storage get <name>[.<section>[.<param>]] [options]
```

### Options

| Option | Description |
|--------|-------------|
| `--format formatted` | Human-readable (default) |
| `--format raw` | Raw value only |
| `--format json` | JSON output |

Examples:
```bash
# Get all configuration
dvs storage get mybackup

# Get section
dvs storage get mybackup.default

# Get single value
dvs storage get mybackup.default.host --format raw
```

## dvs storage unset

Remove a parameter.

```bash
dvs storage unset <name>.<section>.<param>
```

Example:
```bash
dvs storage unset mybackup.backup.port
```

## dvs storage params

Show available parameters for a transport.

```bash
dvs storage params <transport>
```

Example:
```bash
dvs storage params ssh
```

Output:
```
SSH Transport Parameters:
  host     (required)  Server hostname
  port     (optional)  SSH port (default: 22)
  user     (required)  SSH username
  path     (required)  Remote base path
  key      (optional)  Path to private key
```
