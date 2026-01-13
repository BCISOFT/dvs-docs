---
sidebar_position: 4
title: dvs archive restore
---

# dvs archive restore

Restaurer une application depuis une archive.

## Syntaxe

```bash
dvs archive restore [id|latest] --storage <name> [options]
```

## Options

### Sélection

| Option | Description |
|--------|-------------|
| `--storage <name>` | Storage source (requis) |
| `id` | ID de l'archive à restaurer |
| `latest` | Restaurer la plus récente |

### Options de restauration

| Option | Description |
|--------|-------------|
| `--apply` | Appliquer automatiquement les fichiers |
| `--no-config` | Ne pas restaurer les fichiers de config |
| `--password <pass>` | Déchiffrer avec mot de passe |

### Nouvelle app (hors contexte d'app)

| Option | Description |
|--------|-------------|
| `--path <dir>` | Répertoire hôte pour la nouvelle app |
| `--name <app_name>` | Nom de la nouvelle app |

## Exemples

### Dans un contexte d'app

```bash
# Sélection interactive
dvs archive restore --storage backup

# Restaurer la dernière
dvs archive restore latest --storage backup

# Restaurer une archive spécifique
dvs archive restore myapp-20250108-143052 --storage backup
```

### Créer une nouvelle app depuis archive

```bash
dvs archive restore myapp-20250108-143052 \
  --storage backup \
  --path ~/apps/restored-app \
  --name restored-app
```

## Processus de restauration

1. Télécharger l'archive depuis le storage
2. Déchiffrer (si chiffrée)
3. Extraire vers un emplacement temporaire
4. Prévisualiser les changements
5. Appliquer les fichiers (si `--apply` ou confirmé)
6. Importer la base de données (si incluse)
