---
sidebar_position: 6
title: dvs backup delete
---

# dvs backup delete

Supprimer un snapshot spécifique.

## Syntaxe

```bash
dvs backup delete <id> --storage <name> [options]
```

## Options

| Option | Description |
|--------|-------------|
| `--storage <name>` | Storage contenant le snapshot (requis) |
| `--force, -f, -y` | Ne pas demander de confirmation |

## Exemple

```bash
dvs backup delete abc123de --storage backup
```

## Confirmation

```
Delete snapshot 'abc123de' (2025-01-08 14:30)? (y/N)
```

## Notes

- Supprime le snapshot du repository restic
- Les blocs de données peuvent rester s'ils sont référencés par d'autres snapshots (déduplication)
- Exécutez `dvs backup prune` pour récupérer l'espace des blocs orphelins
