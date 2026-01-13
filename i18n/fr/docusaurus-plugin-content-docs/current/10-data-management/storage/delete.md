---
sidebar_position: 6
title: dvs storage delete
---

# dvs storage delete

Supprimer une configuration de storage.

## Syntaxe

```bash
dvs storage delete <name>
```

## Exemple

```bash
dvs storage delete mybackup
```

## Confirmation

Demande confirmation avant suppression :

```
Delete storage 'mybackup'? (y/N)
```

## Notes

- Supprime uniquement le fichier de configuration local
- Ne supprime aucune donnée sur le storage distant
- Les archives/backups existants restent accessibles si vous reconfigurez
