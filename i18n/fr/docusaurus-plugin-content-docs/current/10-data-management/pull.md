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

## Exclusions personnalisées

Vous pouvez personnaliser les fichiers exclus ou inclus lors des opérations pull en créant des fichiers d'exclusion dans `/app/.dvs/remotes/`.

### Priorité des fichiers

| Fichier | Portée |
|---------|--------|
| `files.<remote>.excludes` | Spécifique à un remote (ex: `files.prod.excludes`) |
| `files.excludes` | Global pour tous les remotes |

Le fichier spécifique au remote a priorité sur le fichier global.

### Syntaxe

```
# Les commentaires commencent par #
# Les lignes vides sont ignorées

# Exclure un chemin (standard)
path/to/exclude

# Inclure un chemin (préfixe !)
# Utile pour inclure un sous-dossier d'un dossier exclu
!path/to/include
```

### Exemple : Inclure des images de module avec img-proxy

Lorsque img-proxy est activé, le dossier `img/` est exclu par défaut. Pour inclure les images d'un module spécifique :

```bash title="/app/.dvs/remotes/files.excludes"
# Inclure les images de module nécessaires localement
!img/mdghomecategorypush_categoryblock
!img/my_custom_module
```

Cela va :
1. Inclure `img/mdghomecategorypush_categoryblock/` et tout son contenu
2. Inclure `img/my_custom_module/` et tout son contenu
3. Continuer à exclure le reste de `img/` selon les règles de la recette

### Format des chemins

- Les chemins sont relatifs à la racine web
- Pas de `/` initial requis (ex: `img/folder` et non `/img/folder`)
- Le `/` final est optionnel

## Hooks de recette

Les recettes peuvent définir des transformations post-pull :

| Recette | Hook |
|---------|------|
| WordPress | Remplacement d'URL en base |
| PrestaShop | Mise à jour URL shop et domaine |

Ces transformations s'exécutent automatiquement après l'import de la base.
