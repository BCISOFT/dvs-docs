---
sidebar_position: 4
title: dvs storage test
---

# dvs storage test

Tester la connexion et les capacités d'un storage.

## Syntaxe

```bash
dvs storage test <name> [options]
```

## Options

| Option | Description |
|--------|-------------|
| `--section <name>` | Tester une section spécifique (default, backup, archive...) |

## Exemple

```bash
dvs storage test mybackup
```

Sortie :
```
Testing storage 'mybackup'...
  Transport: sftp
  Host: backup.example.com
  Connection: ✓ OK
  Upload: ✓ OK
  Download: ✓ OK
  Delete: ✓ OK
```

## Détection des capacités

Le test vérifie les opérations supportées :

| Capacité | Description |
|----------|-------------|
| `UPLOAD` | Peut uploader des fichiers |
| `DOWNLOAD` | Peut télécharger des fichiers |
| `DELETE` | Peut supprimer des fichiers |
| `LIST` | Peut lister le contenu |
| `MKDIR` | Peut créer des répertoires |
