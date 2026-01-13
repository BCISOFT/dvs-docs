---
sidebar_position: 8
title: Gestion des clés
---

# Gestion des clés d'archive

Gérer les clés de chiffrement pour la protection des archives.

## dvs archive init-key

Initialiser une nouvelle clé de chiffrement.

```bash
dvs archive init-key
```

Crée une nouvelle paire de clés Age stockée dans la configuration DVS.

:::warning
À exécuter une seule fois. La clé est nécessaire pour déchiffrer les archives. Faites une sauvegarde !
:::

## dvs archive export-key

Exporter la clé de chiffrement pour sauvegarde.

```bash
dvs archive export-key > ~/backup/dvs-archive-key.backup
```

Stockez ce fichier de manière sécurisée. Vous en aurez besoin pour :
- Restaurer des archives sur une nouvelle machine
- Récupérer après une réinstallation de DVS

## dvs archive import-key

Importer une clé précédemment exportée.

```bash
dvs archive import-key ~/backup/dvs-archive-key.backup
```

Utilisez ceci pour :
- Configurer DVS sur une nouvelle machine
- Restaurer la clé après réinstallation

## Stockage des clés

Les clés sont stockées dans :
- Global : `$DVS_CONFIG/archive/key`
- Par app : `<app-dir>/.dvs/archive/key`

## Alternative : Protection par mot de passe

Pour partager des archives sans échange de clé :

```bash
# Créer avec mot de passe
dvs archive create --storage backup --password "shared-secret"

# Restaurer avec mot de passe
dvs archive restore latest --storage backup --password "shared-secret"
```
