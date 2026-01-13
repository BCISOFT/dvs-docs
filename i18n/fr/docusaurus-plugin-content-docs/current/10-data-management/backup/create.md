---
sidebar_position: 2
title: dvs backup create
---

# dvs backup create

Créer un nouveau snapshot de backup.

## Syntaxe

```bash
dvs backup create --storage <name> [options]
```

## Options

| Option | Description |
|--------|-------------|
| `--storage <name>` | Storage à utiliser (requis) |

## Exemple

```bash
dvs backup create --storage backup
```

## Sortie

```
Creating backup snapshot...
  Scanning files: 1,234 files (45 MB)
  Dumping database: myapp (12 MB)
  
Uploading to restic repository...
  Files new:     45
  Files changed: 12
  Files unchanged: 1,177
  
Snapshot abc123de created
  Total size: 57 MB
  Added to repo: 8 MB (dedup)
```

## Contenu sauvegardé

| Contenu | Inclus |
|---------|--------|
| Fichiers de l'application | Oui |
| Base de données | Oui (dump) |
| Configuration de l'app | Oui |
| Configuration DVS | Oui |

## Prérequis

- Doit être dans un contexte d'app
- Storage configuré avec section `[backup]`
- Repository restic initialisé (auto à la première utilisation)
