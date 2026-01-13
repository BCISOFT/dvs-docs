---
sidebar_position: 6
title: dvs pull 🔐
---

# dvs pull

Récupérer fichiers et base de données depuis un serveur distant.

:::info Fonctionnalité PRO
Pull est disponible dans le plan DVS PRO.
:::

## Syntaxe

```bash
dvs pull [remote] [options]
```

## Options

| Option | Description |
|--------|-------------|
| `--files` | Récupérer uniquement les fichiers |
| `--database` | Récupérer uniquement la base de données |
| `--dumps` | Récupérer depuis des dumps de backup |
| `--dump-file <path>` | Fichier dump spécifique |

## Exemples

```bash
# Interactif : sélection remote + composants
dvs pull

# Récupérer les fichiers de prod
dvs pull prod --files

# Récupérer fichiers + base de données
dvs pull prod --files --database

# Récupérer depuis des dumps de backup
dvs pull backup --dumps

# Fichier dump spécifique
dvs pull backup --dumps --dump-file "2025-01-08_mydb.sql.gz"
```

## Sélection du remote

- **Remote unique** : Auto-sélectionné
- **Plusieurs remotes** : Menu interactif ou nom explicite

## Sélection des composants

- **Aucun spécifié** : Multi-sélection interactive
- **Explicite** : `--files`, `--database`, `--dumps`

## Hooks de recette

Les recettes peuvent définir des transformations post-pull :

| Recette | Hook |
|---------|------|
| WordPress | Remplacement d'URL en base |
| PrestaShop | Mise à jour URL shop et domaine |

Ces transformations s'exécutent automatiquement après l'import de la base.
