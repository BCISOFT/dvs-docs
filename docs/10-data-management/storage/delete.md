---
sidebar_position: 6
title: dvs storage delete
---

# dvs storage delete

Delete a storage configuration.

## Syntax

```bash
dvs storage delete <name>
```

## Example

```bash
dvs storage delete mybackup
```

## Confirmation

Prompts for confirmation before deletion:

```
Delete storage 'mybackup'? (y/N)
```

## Notes

- Only deletes the local configuration file
- Does not delete any data on the remote storage
- Existing archives/backups on the remote remain accessible if you reconfigure
