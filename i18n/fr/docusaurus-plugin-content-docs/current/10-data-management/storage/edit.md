---
sidebar_position: 5
title: dvs storage edit
---

# dvs storage edit

Éditer directement le fichier de configuration d'un storage.

## Syntaxe

```bash
dvs storage edit <name>
```

## Exemple

```bash
dvs storage edit mybackup
```

Ouvre le fichier dans `$EDITOR` (défaut : `nano`).

## Format de configuration

Les configs storage utilisent le format INI :

```ini
[default]
transport = sftp
host = backup.example.com
port = 22
user = admin
path = /backups

[backup]
# Override pour les opérations backup
path = /backups/restic

[archive]
# Override pour les opérations archive
path = /backups/archives
```

## Sections

| Section | Utilisée par |
|---------|--------------|
| `default` | Configuration de base, héritée par les autres |
| `backup` | Commandes `dvs backup` |
| `archive` | Commandes `dvs archive` |
