---
sidebar_position: 7
title: Configuration
---

# Configuration des remotes

Gérer les paramètres des remotes via CLI.

## dvs remote set

Définir une valeur de paramètre.

```bash
dvs remote set <name>.<section>.<param> <value>
```

Exemples :
```bash
dvs remote set prod.default.host newserver.example.com
dvs remote set prod.files.path /var/www/newpath
dvs remote set prod.database.db_name newdatabase
```

## dvs remote get

Obtenir une ou plusieurs valeurs.

```bash
dvs remote get <name>[.<section>[.<param>]] [options]
```

### Options

| Option | Description |
|--------|-------------|
| `--format formatted` | Lisible (défaut) |
| `--format raw` | Valeur brute uniquement |
| `--format json` | Sortie JSON |

Exemples :
```bash
# Toute la configuration
dvs remote get prod

# Une section
dvs remote get prod.files

# Une valeur unique (brute)
dvs remote get prod.files.path --format raw
```

## dvs remote unset

Supprimer un paramètre.

```bash
dvs remote unset <name>.<section>.<param>
```

## dvs remote params

Afficher les paramètres disponibles pour un transport.

```bash
dvs remote params <transport>
```

Exemple :
```bash
dvs remote params ssh
```
