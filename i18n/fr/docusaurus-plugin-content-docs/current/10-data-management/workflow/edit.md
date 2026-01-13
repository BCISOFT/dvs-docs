---
sidebar_position: 5
title: dvs workflow edit
---

# dvs workflow edit

Modifier un workflow personnalisé.

## Syntaxe

```bash
dvs workflow edit <name>
```

## Exemple

```bash
dvs workflow edit my-deploy
```

Ouvre `<app-dir>/.dvs/workflows/my-deploy.yml` dans `$EDITOR`.

## Notes

- Fonctionne uniquement avec les workflows d'application (`<app-dir>/.dvs/workflows/`)
- Ne peut pas modifier les workflows natifs directement (utilisez `copy` d'abord)
- Les modifications prennent effet immédiatement au prochain déploiement
