---
sidebar_position: 2
title: dvs workflow list
---

# dvs workflow list

List available workflows.

## Syntax

```bash
dvs workflow list
```

## Output

```
Available workflows:

Native:
  deploy           Standard rsync deployment
  deploy-atomic    Atomic deployment with symlink
  deploy-git-pull  Git pull on remote

Application:
  my-deploy        Custom workflow (copied from deploy)
```

## Workflow Locations

| Type | Location |
|------|----------|
| Native | `/admin/workflows/*.yml` |
| Application | `<app-dir>/.dvs/workflows/*.yml` |
