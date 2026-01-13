---
sidebar_position: 8
title: Gestion des clés
---

# Gestion des clés de backup

Gérer les clés de chiffrement pour la protection du repository restic.

## dvs backup init-key

Initialiser le repository restic et la clé de chiffrement.

```bash
dvs backup init-key
```

Crée un nouveau repository restic avec chiffrement. Requis avant le premier backup.

:::warning
À exécuter une seule fois par storage. La clé est nécessaire pour accéder aux backups. Faites une sauvegarde !
:::

## dvs backup export-key

Exporter la clé de chiffrement du backup.

```bash
dvs backup export-key [--storage <name>] > ~/backup/dvs-backup-key.backup
```

### Options

| Option | Description |
|--------|-------------|
| `--storage <name>` | Storage depuis lequel exporter la clé |

Stockez ce fichier de manière sécurisée. Vous en aurez besoin pour :
- Restaurer des backups sur une nouvelle machine
- Récupérer après une réinstallation de DVS
- Accéder aux backups depuis une autre installation DVS

## dvs backup import-key

Importer une clé précédemment exportée.

```bash
dvs backup import-key <file> [--storage <name>]
```

### Options

| Option | Description |
|--------|-------------|
| `--storage <name>` | Storage pour lequel importer la clé |

Utilisez ceci pour :
- Configurer DVS sur une nouvelle machine
- Restaurer la clé après réinstallation
- Partager l'accès aux backups avec une autre machine

## Stockage des clés

Les clés de backup sont stockées dans :
- Global : `$DVS_CONFIG/backup/keys/<storage-name>`
- Par app : `<app-dir>/.dvs/backup/keys/<storage-name>`

## Notes de sécurité

- Les clés sont stockées chiffrées localement
- Ne jamais partager les clés via des canaux non sécurisés
- Envisagez d'utiliser un gestionnaire de mots de passe pour les backups de clés
- Chaque storage a son propre repository et sa propre clé
