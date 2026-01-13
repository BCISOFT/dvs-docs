---
sidebar_position: 2
title: dvs workflow list
---

# dvs workflow list

Lister les workflows disponibles.

## Syntaxe

```bash
dvs workflow list
```

## Sortie

```
Available workflows:

Native:
  deploy           Standard rsync deployment
  deploy-atomic    Atomic deployment with symlink
  deploy-git-pull  Git pull on remote

Application:
  my-deploy        Custom workflow (copied from deploy)
```

## Emplacements des workflows

| Type | Emplacement |
|------|-------------|
| Natif | `/admin/workflows/*.yml` |
| Application | `<app-dir>/.dvs/workflows/*.yml` |
