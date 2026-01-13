---
sidebar_position: 7
title: Configuration
---

# Configuration des storages

Gérer les paramètres via CLI.

## dvs storage set

Définir une valeur de paramètre.

```bash
dvs storage set <name>.<section>.<param> <value>
```

Exemples :
```bash
dvs storage set mybackup.default.host server.example.com
dvs storage set mybackup.default.port 2222
dvs storage set mybackup.backup.path /data/restic
```

## dvs storage get

Obtenir une ou plusieurs valeurs.

```bash
dvs storage get <name>[.<section>[.<param>]] [options]
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
dvs storage get mybackup

# Une section
dvs storage get mybackup.default

# Une valeur unique
dvs storage get mybackup.default.host --format raw
```

## dvs storage unset

Supprimer un paramètre.

```bash
dvs storage unset <name>.<section>.<param>
```

Exemple :
```bash
dvs storage unset mybackup.backup.port
```

## dvs storage params

Afficher les paramètres disponibles pour un transport.

```bash
dvs storage params <transport>
```

Exemple :
```bash
dvs storage params ssh
```

Sortie :
```
SSH Transport Parameters:
  host     (required)  Server hostname
  port     (optional)  SSH port (default: 22)
  user     (required)  SSH username
  path     (required)  Remote base path
  key      (optional)  Path to private key
```
