---
sidebar_position: 3
title: dvs storage list
---

# dvs storage list

List all configured storage remotes.

## Syntax

```bash
dvs storage list
```

## Output

Shows configured storages with their transport type:

```
Storage remotes:
  backup     sftp    backup.example.com:/backups
  archive    s3      s3://mybucket/archives
  local      local   /mnt/backup
```

## Notes

- Works both inside and outside app context
- In app context: shows storages from `<app-dir>/.dvs/storages/`
- Outside app context: shows global storages from `$DVS_CONFIG/storages/`
