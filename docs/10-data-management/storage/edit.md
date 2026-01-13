---
sidebar_position: 5
title: dvs storage edit
---

# dvs storage edit

Edit storage configuration file directly.

## Syntax

```bash
dvs storage edit <name>
```

## Example

```bash
dvs storage edit mybackup
```

Opens the configuration file in `$EDITOR` (default: `nano`).

## Configuration Format

Storage configs use INI format:

```ini
[default]
transport = sftp
host = backup.example.com
port = 22
user = admin
path = /backups

[backup]
# Override for backup operations
path = /backups/restic

[archive]
# Override for archive operations  
path = /backups/archives
```

## Sections

| Section | Used by |
|---------|---------|
| `default` | Base configuration, inherited by others |
| `backup` | `dvs backup` commands |
| `archive` | `dvs archive` commands |
