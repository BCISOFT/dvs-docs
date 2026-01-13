---
sidebar_position: 3
title: dvs remote list
---

# dvs remote list

List configured remotes.

## Syntax

```bash
dvs remote list
```

## Output

```
Configured remotes:
  prod      ssh    prod.example.com
  staging   ssh    staging.example.com
  backup    sftp   backup.example.com
```

## Notes

- Requires app context (`.devspaces` folder)
- Shows remotes from `<app-dir>/.dvs/remotes/`
