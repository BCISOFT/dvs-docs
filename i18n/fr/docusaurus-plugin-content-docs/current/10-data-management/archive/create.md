---
sidebar_position: 2
title: dvs archive create
---

# dvs archive create

Créer une archive chiffrée de l'application courante.

## Syntaxe

```bash
dvs archive create --storage <name> [options]
```

## Options

| Option | Description |
|--------|-------------|
| `--storage <name>` | Storage à utiliser (requis) |
| `--no-encrypt` | Ne pas chiffrer |
| `--no-secrets` | Exclure les secrets |
| `--password <pass>` | Utiliser un mot de passe au lieu de la clé |

## Exemples

```bash
# Archive chiffrée standard
dvs archive create --storage backup

# Archive non chiffrée
dvs archive create --storage backup --no-encrypt

# Protégée par mot de passe (pour partage)
dvs archive create --storage backup --password "secret123"
```

## Prérequis

- Doit être dans un contexte d'application
- Clé de chiffrement initialisée (`dvs archive init-key`) ou utiliser `--no-encrypt`/`--password`

## Contenu de l'archive

| Contenu | Inclus |
|---------|--------|
| Fichiers de l'app | Toujours |
| Base de données | Si configurée |
| Config `<app-dir>/.dvs/` | Toujours |
| Secrets | Sauf si `--no-secrets` |

## Sortie

```
Creating archive...
  Files: 1,234 files (45 MB)
  Database: myapp (12 MB)
  Encrypting...
  Uploading to backup...
Archive created: myapp-20250108-143052.tar.gz.age
```
