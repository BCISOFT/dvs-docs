---
sidebar_position: 3
title: dvs remote list
---

# dvs remote list

Lister les remotes configurés.

## Syntaxe

```bash
dvs remote list
```

## Sortie

```
Configured remotes:
  prod      ssh    prod.example.com
  staging   ssh    staging.example.com
  backup    sftp   backup.example.com
```

## Notes

- Nécessite un contexte d'application (dossier `.devspaces`)
- Affiche les remotes de `<app-dir>/.dvs/remotes/`
