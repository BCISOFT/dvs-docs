---
sidebar_position: 8
title: dvs dumps 🔐
---

# dvs dumps

Gérer et récupérer des dumps de base de données depuis des serveurs distants.

:::info Fonctionnalité PRO
Dumps est disponible dans le plan DVS PRO.
:::

## Concept

Récupérer des dumps de base de données depuis des serveurs de backup au lieu de bases de données live :
- Utiliser l'infrastructure de backup existante
- Pas d'impact sur la base de production
- Accès aux dumps historiques

## Syntaxe

```bash
dvs dumps list <remote>
```

## Commandes

| Commande | Description |
|----------|-------------|
| `dvs dumps list <remote>` | Lister les fichiers dump disponibles |

## Configuration

Configurer les dumps dans la config du remote (`<app-dir>/.dvs/remotes/<name>.conf`) :

```ini
[dumps]
transport = ssh
host = backup.example.com
user = backup
path = /home/mysql_backup/files
pattern = *.sql.gz
strategy = interactive
```

### Paramètres

| Paramètre | Description |
|-----------|-------------|
| `transport` | Type de transport : `ssh`, `sftp`, `ftp`, `s3` |
| `host` | Nom d'hôte du serveur |
| `path` | Répertoire contenant les dumps |
| `pattern` | Pattern glob pour matcher les fichiers |
| `strategy` | Sélection : `interactive` ou `latest` |

## Récupérer des dumps

```bash
# Sélection interactive
dvs pull backup --dumps

# Fichier dump spécifique
dvs pull backup --dumps --dump-file "2025-01-08_mydb.sql.gz"
```

## Exemple de sortie

```bash
$ dvs dumps list backup

Available dumps on 'backup':
  2025-01-08_mydb.sql.gz    45 MB    2025-01-08 02:00
  2025-01-07_mydb.sql.gz    44 MB    2025-01-07 02:00
  2025-01-06_mydb.sql.gz    43 MB    2025-01-06 02:00
```
