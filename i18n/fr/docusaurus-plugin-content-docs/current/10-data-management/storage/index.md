---
sidebar_position: 1
title: Vue d'ensemble
---

# Storage

Gestion centralisée des stockages pour les opérations de backup et archive.

## Concept

Un **storage** est une configuration nommée pointant vers une destination (serveur SSH, bucket S3, chemin local). Utilisé par :
- `dvs archive` - Archives chiffrées
- `dvs backup` - Sauvegardes incrémentales (PRO)

## Transports disponibles

| Transport | Protocole | Cas d'usage |
|-----------|-----------|-------------|
| `ssh`     | SSH/SCP   | Serveurs Linux avec accès SSH |
| `sftp`    | SFTP      | Transfert de fichiers sécurisé |
| `ftp`     | FTP/FTPS  | Serveurs FTP legacy |
| `s3`      | S3 API    | AWS S3, MinIO, compatibles |
| `local`   | FS Local  | Répertoires locaux |

## Démarrage rapide

```bash
# Ajouter un storage interactivement
dvs storage add

# Ajouter avec un transport spécifique
dvs storage add mybackup --type sftp

# Lister les storages configurés
dvs storage list

# Tester la connexion
dvs storage test mybackup
```

## Commandes

| Commande | Description |
|----------|-------------|
| [`dvs storage add`](./add) | Ajouter un storage |
| [`dvs storage list`](./list) | Lister les storages |
| [`dvs storage test`](./test) | Tester la connexion |
| [`dvs storage edit`](./edit) | Modifier la configuration |
| [`dvs storage delete`](./delete) | Supprimer un storage |
| [`dvs storage set/get/unset`](./configuration) | Gérer les paramètres |
| [`dvs storage params`](./configuration) | Afficher les paramètres du transport |
