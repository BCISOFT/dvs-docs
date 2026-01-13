---
sidebar_position: 6
title: dvs archive delete
---

# dvs archive delete

Supprimer une archive spécifique.

## Syntaxe

```bash
dvs archive delete <id> --storage <name>
```

## Options

| Option | Description |
|--------|-------------|
| `--storage <name>` | Storage contenant l'archive (requis) |

## Exemple

```bash
dvs archive delete myapp-20250101-120000 --storage backup
```

## Confirmation

Demande confirmation avant suppression :

```
Delete archive 'myapp-20250101-120000'? (y/N)
```

## Notes

- Supprime définitivement l'archive du storage
- Irréversible
- Utilisez `dvs archive list` pour trouver les IDs d'archives
