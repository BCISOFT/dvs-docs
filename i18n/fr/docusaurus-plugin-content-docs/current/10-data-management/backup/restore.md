---
sidebar_position: 4
title: dvs backup restore
---

# dvs backup restore

Restaurer depuis un snapshot de backup.

## Syntaxe

```bash
dvs backup restore [id|latest] --storage <name> [options]
```

## Options de sélection

| Option | Description |
|--------|-------------|
| `--storage <name>` | Storage source (requis) |
| `id` | ID du snapshot à restaurer |
| `latest` | Restaurer le snapshot le plus récent |

## Options de restauration

| Option | Description |
|--------|-------------|
| `--files` | Restaurer les fichiers de l'application |
| `--db` | Restaurer la base de données |
| `--config` | Restaurer la configuration de l'app |
| `--remotes` | Restaurer la configuration des remotes |
| `--all` | Tout restaurer |
| `--extract` | Extraire dans un dossier sans appliquer |
| `--target <path>` | Destination pour le mode `--extract` |

## Exemples

```bash
# Sélection interactive
dvs backup restore --storage backup

# Restaurer le dernier, fichiers et base
dvs backup restore latest --storage backup --files --db

# Tout restaurer
dvs backup restore abc123de --storage backup --all

# Extraire dans un dossier pour inspection
dvs backup restore latest --storage backup --extract --target ~/restore-preview
```

## Processus de restauration

1. Sélection du snapshot (interactif ou spécifié)
2. Téléchargement depuis le repository restic
3. Déchiffrement et décompression
4. Application des composants sélectionnés :
   - Files : Copie vers le répertoire de l'app
   - Database : Import du dump
   - Config : Restauration de la configuration

## Sécurité

- Les fichiers sont restaurés en place (écrasement)
- La base de données est entièrement remplacée
- Utilisez `--extract` pour prévisualiser avant d'appliquer
