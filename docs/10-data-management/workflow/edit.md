---
sidebar_position: 5
title: dvs workflow edit
---

# dvs workflow edit

Edit a custom workflow.

## Syntax

```bash
dvs workflow edit <name>
```

## Example

```bash
dvs workflow edit my-deploy
```

Opens `<app-dir>/.dvs/workflows/my-deploy.yml` in `$EDITOR`.

## Notes

- Only works with application workflows (`<app-dir>/.dvs/workflows/`)
- Cannot edit native workflows directly (use `copy` first)
- Changes take effect immediately on next deploy
