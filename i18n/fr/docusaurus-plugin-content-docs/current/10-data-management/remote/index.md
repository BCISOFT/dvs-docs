---
sidebar_position: 1
title: Vue d'ensemble
---

# Remote

Configurer et gérer les serveurs distants pour la synchronisation de fichiers et bases de données.

:::info Fonctionnalité PRO
Remote sync est disponible dans le plan DVS PRO.
:::

## Concept

Un **remote** représente un serveur de production/staging avec lequel vous voulez vous synchroniser :
- Récupérer fichiers et base de données depuis le remote
- Déployer des modifications vers le remote
- Configurer les paramètres par composant (files, database, dumps)

## Démarrage rapide

```bash
# Configurer un remote interactivement
dvs remote configure prod

# Tester la connexion
dvs remote test prod

# Récupérer depuis le remote
dvs pull prod --files --database

# Déployer vers le remote
dvs deploy prod
```

## Commandes

| Commande | Description |
|----------|-------------|
| [`dvs remote configure`](./configure) | Configurer un remote (interactif) |
| [`dvs remote list`](./list) | Lister les remotes |
| [`dvs remote test`](./test) | Tester la connexion |
| [`dvs remote edit`](./edit) | Modifier la configuration |
| [`dvs remote delete`](./delete) | Supprimer un remote |
| [Configuration](./configuration) | set, get, unset, params |

## Remote vs Storage

| | Storage | Remote |
|-|---------|--------|
| But | Destination de backup | Source/cible de sync |
| Composants | backup, archive | files, database, dumps |
| Opérations | Upload d'archives | Sync bidirectionnelle |
