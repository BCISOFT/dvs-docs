---
sidebar_position: 6
title: dvs remote delete
---

# dvs remote delete

Delete a remote configuration.

## Syntax

```bash
dvs remote delete <name>
```

## Example

```bash
dvs remote delete staging
```

## Confirmation

```
Delete remote 'staging'? (y/N)
```

## Notes

- Removes `<app-dir>/.dvs/remotes/<name>.conf`
- Does not affect the remote server
- Secrets remain in `<app-dir>/.dvs/secrets`
