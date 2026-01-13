---
sidebar_position: 3
title: dvs archive list
---

# dvs archive list

Lister les archives disponibles.

## Syntaxe

```bash
dvs archive list --storage <name> [options]
```

## Options

| Option | Description |
|--------|-------------|
| `--storage <name>` | Storage à lister (requis) |
| `--global` | Lister toutes les apps (dans un contexte d'app) |

## Exemples

```bash
# Lister les archives de l'app courante
dvs archive list --storage backup

# Lister toutes les apps
dvs archive list --storage backup --global
```

## Sortie

### App unique

```
Archives for 'myapp':
  ID                        Date                 Size
  myapp-20250108-143052    2025-01-08 14:30:52  57 MB
  myapp-20250107-091500    2025-01-07 09:15:00  56 MB
  myapp-20250106-180000    2025-01-06 18:00:00  55 MB
```

### Global (--global)

```
Archives by application:

myapp (3 archives):
  myapp-20250108-143052    2025-01-08 14:30:52  57 MB
  myapp-20250107-091500    2025-01-07 09:15:00  56 MB

otherapp (2 archives):
  otherapp-20250108-100000  2025-01-08 10:00:00  120 MB
```
