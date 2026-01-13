---
sidebar_position: 5
title: dvs backup prune
---

# dvs backup prune

Supprimer les anciens snapshots selon la politique de rétention.

## Syntaxe

```bash
dvs backup prune --storage <name> [options]
```

## Options

| Option | Description |
|--------|-------------|
| `--storage <name>` | Storage à nettoyer (requis) |
| `--keep-last <n>` | Conserver les n derniers snapshots (défaut : 7) |
| `--keep-daily <n>` | Conserver n snapshots quotidiens (défaut : 7) |
| `--keep-weekly <n>` | Conserver n snapshots hebdomadaires (défaut : 4) |
| `--keep-monthly <n>` | Conserver n snapshots mensuels |
| `--global` | Nettoyer toutes les apps (dans un contexte d'app) |

## Exemples

```bash
# Politique de rétention par défaut
dvs backup prune --storage backup

# Rétention personnalisée
dvs backup prune --storage backup \
  --keep-last 5 \
  --keep-daily 7 \
  --keep-weekly 4 \
  --keep-monthly 6

# Nettoyer toutes les apps
dvs backup prune --storage backup --global
```

## Politique de rétention

Restic conserve les snapshots correspondant à N'IMPORTE QUEL critère :

| Politique | Conserve |
|-----------|----------|
| `--keep-last 7` | Les 7 snapshots les plus récents |
| `--keep-daily 7` | 1 par jour pendant 7 jours |
| `--keep-weekly 4` | 1 par semaine pendant 4 semaines |
| `--keep-monthly 6` | 1 par mois pendant 6 mois |

## Sortie

```
Pruning snapshots...

Keeping:
  abc123de (2025-01-08) - latest
  def456gh (2025-01-07) - daily
  ...

Removing:
  old123ab (2024-12-01)
  old456cd (2024-11-15)

Freed: 234 MB
```
