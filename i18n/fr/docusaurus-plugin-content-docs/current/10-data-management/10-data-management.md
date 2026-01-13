---
sidebar_position: 1
---

# Gestion des données

Outils pour gérer les données de vos applications : configuration des stockages, archivage, backup, synchronisation et déploiement.

## Vue d'ensemble

| Fonctionnalité | Plan | Description |
|----------------|------|-------------|
| [Storage](./storage/) | GRATUIT | Configurer les backends de stockage |
| [Archive](./archive/) | GRATUIT | Archives de projet chiffrées |
| [Backup](./backup/) | PRO | Sauvegardes incrémentales avec restic |
| [Remote](./remote/) | PRO | Configuration des serveurs distants |
| [Workflow](./workflow/) | PRO | Workflows de déploiement personnalisés |
| [Pull](./pull) | PRO | Récupérer les données depuis un remote |
| [Deploy](./deploy) | PRO | Déployer vers un remote |
| [Dumps](./dumps) | PRO | Récupérer depuis des dumps de backup |
| [Secrets](./secrets) | FREE | Gestion sécurisée des secrets |

## Démarrage rapide

### Configuration du storage

```bash
# Ajouter un backend de stockage
dvs storage add mybackup --type sftp

# Tester la connexion
dvs storage test mybackup
```

### Archive (GRATUIT)

```bash
# Initialiser le chiffrement
dvs archive init-key

# Créer une archive
dvs archive create --storage mybackup

# Restaurer
dvs archive restore --storage mybackup
```

### Backup (PRO)

```bash
# Créer une sauvegarde incrémentale
dvs backup create --storage mybackup

# Lister les snapshots
dvs backup list --storage mybackup

# Restaurer
dvs backup restore --storage mybackup
```

### Synchronisation distante (PRO)

```bash
# Configurer un remote
dvs remote configure prod

# Récupérer depuis la production
dvs pull prod --files --database

# Déployer vers la production
dvs deploy prod
```

## Transports disponibles

| Transport | Protocole | Cas d'usage |
|-----------|-----------|-------------|
| `ssh` | SSH/SCP | Serveurs Linux |
| `sftp` | SFTP | Transfert sécurisé |
| `ftp` | FTP/FTPS | Serveurs legacy |
| `s3` | S3 API | AWS, MinIO |
| `local` | FS Local | Répertoires locaux |
