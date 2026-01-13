---
sidebar_position: 5
title: dvs archive prune
---

# dvs archive prune

Supprimer les anciennes archives, en conservant uniquement les plus récentes.

## Syntaxe

```bash
dvs archive prune --storage <name> [options]
```

## Options

| Option | Description |
|--------|-------------|
| `--storage <name>` | Storage à nettoyer (requis) |
| `--keep-last <n>` | Conserver les n archives les plus récentes |
| `--global` | Nettoyer toutes les apps (dans un contexte d'app) |
| `--dry-run` | Prévisualiser sans supprimer |
| `-y, --yes, --force` | Ne pas demander de confirmation |

## Exemples

```bash
# Prévisualiser les suppressions
dvs archive prune --storage backup --keep-last 5 --dry-run

# Garder les 3 dernières archives de l'app courante
dvs archive prune --storage backup --keep-last 3

# Nettoyer toutes les apps, garder 5 par app
dvs archive prune --storage backup --keep-last 5 --global

# Non interactif
dvs archive prune --storage backup --keep-last 3 --yes
```

## Comportement

| Contexte | Comportement |
|----------|--------------|
| Dans une app | Nettoie l'app courante uniquement |
| Dans app + `--global` | Nettoie toutes les apps |
| Hors app | Nettoie toutes les apps |

## Sortie

```
Pruning archives (keep-last: 5)...

myapp:
  Keep: myapp-20250108-143052, myapp-20250107-091500, ...
  Delete: myapp-20250101-120000, myapp-20241231-100000

Delete 2 archives? (y/N) y
Deleted: myapp-20250101-120000
Deleted: myapp-20241231-100000
```
