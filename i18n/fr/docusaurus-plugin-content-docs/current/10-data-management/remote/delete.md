---
sidebar_position: 6
title: dvs remote delete
---

# dvs remote delete

Supprimer une configuration de remote.

## Syntaxe

```bash
dvs remote delete <name>
```

## Exemple

```bash
dvs remote delete staging
```

## Confirmation

```
Delete remote 'staging'? (y/N)
```

## Notes

- Supprime `<app-dir>/.dvs/remotes/<name>.conf`
- N'affecte pas le serveur distant
- Les secrets restent dans `<app-dir>/.dvs/secrets`
