---
sidebar_position: 3
title: dvs backup list
---

# dvs backup list

Lister les snapshots de backup.

## Syntaxe

```bash
dvs backup list --storage <name> [options]
```

## Options

| Option | Description |
|--------|-------------|
| `--storage <name>` | Storage à lister (requis) |
| `--latest <n>` | Afficher uniquement les n derniers snapshots |
| `--global` | Lister toutes les apps (dans un contexte d'app) |

## Exemples

```bash
# Lister les snapshots de l'app courante
dvs backup list --storage backup

# Afficher uniquement les 5 derniers
dvs backup list --storage backup --latest 5

# Lister toutes les apps
dvs backup list --storage backup --global
```

## Sortie

```
Snapshots for 'myapp':
  ID        Date                 Size
  abc123de  2025-01-08 14:30:52  57 MB
  def456gh  2025-01-07 09:15:00  56 MB
  ghi789jk  2025-01-06 18:00:00  55 MB

Repository stats:
  Total size: 168 MB
  Deduplicated: 72 MB (saved 57%)
```
