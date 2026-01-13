---
sidebar_position: 1
title: Vue d'ensemble
---

# Archive

Créer des archives chiffrées de vos applications pour la sauvegarde et la migration.

:::tip Fonctionnalité GRATUITE
Archive est disponible dans tous les plans DVS.
:::

## Concept

Les archives sont des snapshots complets de votre application :
- Fichiers de l'application
- Dump de base de données
- Configuration
- Chiffrement avec Age (optionnel)

## Démarrage rapide

```bash
# Initialiser la clé de chiffrement (une fois)
dvs archive init-key

# Créer une archive
dvs archive create --storage backup

# Lister les archives
dvs archive list --storage backup

# Restaurer
dvs archive restore --storage backup
```

## Commandes

| Commande | Description |
|----------|-------------|
| [`dvs archive create`](./create) | Créer une archive |
| [`dvs archive list`](./list) | Lister les archives |
| [`dvs archive restore`](./restore) | Restaurer une archive |
| [`dvs archive download`](./download) | Télécharger sans restaurer |
| [`dvs archive prune`](./prune) | Supprimer les anciennes archives |
| [`dvs archive delete`](./delete) | Supprimer une archive spécifique |
| [`dvs archive info`](./info) | Afficher les détails |
| [Gestion des clés](./keys) | init-key, export-key, import-key |

## Format d'archive

Les archives sont des fichiers `.tar.gz` contenant :

```
myapp-20250108-143052.tar.gz
├── files/           # Fichiers de l'application
├── database.sql.gz  # Dump de la base
├── config/          # Configuration de l'app
└── metadata.json    # Infos de l'archive
```

Quand chiffrée, l'archive devient `.tar.gz.age`.
