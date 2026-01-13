---
sidebar_position: 3
title: dvs storage list
---

# dvs storage list

Lister tous les storages configurés.

## Syntaxe

```bash
dvs storage list
```

## Sortie

Affiche les storages avec leur type de transport :

```
Storage remotes:
  backup     sftp    backup.example.com:/backups
  archive    s3      s3://mybucket/archives
  local      local   /mnt/backup
```

## Notes

- Fonctionne dans et hors contexte d'application
- Dans une app : affiche les storages de `<app-dir>/.dvs/storages/`
- Hors app : affiche les storages globaux de `$DVS_CONFIG/storages/`
