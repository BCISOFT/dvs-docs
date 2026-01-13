---
sidebar_position: 7
title: Configuration
---

# Remote Configuration

Manage remote parameters via CLI.

## dvs remote set

Set a parameter value.

```bash
dvs remote set <name>.<section>.<param> <value>
```

Examples:
```bash
dvs remote set prod.default.host newserver.example.com
dvs remote set prod.files.path /var/www/newpath
dvs remote set prod.database.db_name newdatabase
```

## dvs remote get

Get parameter value(s).

```bash
dvs remote get <name>[.<section>[.<param>]] [options]
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
dvs remote get prod

# Get section
dvs remote get prod.files

# Get single value (raw)
dvs remote get prod.files.path --format raw
```

## dvs remote unset

Remove a parameter.

```bash
dvs remote unset <name>.<section>.<param>
```

## dvs remote params

Show available parameters for a transport.

```bash
dvs remote params <transport>
```

Example:
```bash
dvs remote params ssh
```
