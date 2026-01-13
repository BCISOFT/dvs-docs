---
sidebar_position: 7
title: dvs workflow validate
---

# dvs workflow validate

Valider la syntaxe d'un workflow.

## Syntaxe

```bash
dvs workflow validate <name>
```

## Exemple

```bash
dvs workflow validate my-deploy
```

## Sortie (valide)

```
Workflow 'my-deploy' is valid.
  Steps: 4
  Actions: rsync, ssh-command
```

## Sortie (invalide)

```
Workflow 'my-deploy' has errors:
  Line 12: Unknown action 'invalid-action'
  Line 15: Missing required param 'command'
```

## Actions disponibles

| Action | Description |
|--------|-------------|
| `rsync` | Synchroniser les fichiers via rsync |
| `ssh-command` | Exécuter une commande distante |
| `local-command` | Exécuter une commande locale |
| `mysql-dump` | Exporter la base de données |
| `mysql-import` | Importer la base de données |
