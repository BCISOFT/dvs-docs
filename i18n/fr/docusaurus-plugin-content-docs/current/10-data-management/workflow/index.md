---
sidebar_position: 1
title: Vue d'ensemble
---

# Workflow

Workflows de déploiement personnalisables définis en YAML.

:::info Fonctionnalité PRO
La personnalisation des workflows est disponible dans le plan DVS PRO.
:::

## Concept

Un **workflow** est une séquence d'actions exécutées pendant le déploiement :
- Synchronisation de fichiers
- Opérations de base de données
- Commandes distantes
- Vidage de cache

## Workflows natifs

DVS inclut 3 workflows intégrés :

| Workflow | Description |
|----------|-------------|
| `deploy` | Déploiement rsync standard |
| `deploy-atomic` | Déploiement atomique avec switch symlink |
| `deploy-git-pull` | Déploiement basé sur Git |

## Démarrage rapide

```bash
# Lister les workflows disponibles
dvs workflow list

# Afficher les détails d'un workflow
dvs workflow show deploy

# Déployer avec un workflow
dvs deploy prod --workflow deploy

# Copier pour personnalisation
dvs workflow copy deploy my-deploy
```

## Commandes

| Commande | Description |
|----------|-------------|
| [`dvs workflow list`](./list) | Lister les workflows |
| [`dvs workflow show`](./show) | Afficher les détails |
| [`dvs workflow copy`](./copy) | Copier pour personnalisation |
| [`dvs workflow edit`](./edit) | Modifier un workflow personnalisé |
| [`dvs workflow delete`](./delete) | Supprimer un workflow |
| [`dvs workflow validate`](./validate) | Valider la syntaxe |
