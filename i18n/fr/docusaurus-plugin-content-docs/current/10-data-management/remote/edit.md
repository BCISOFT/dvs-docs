---
sidebar_position: 5
title: dvs remote edit
---

# dvs remote edit

Éditer le fichier de configuration d'un remote.

## Syntaxe

```bash
dvs remote edit <name>
```

## Exemple

```bash
dvs remote edit prod
```

Ouvre `<app-dir>/.dvs/remotes/prod.conf` dans `$EDITOR`.

## Sections de configuration

```ini
[default]
# Paramètres de transport de base (hérités par les sections)
transport = ssh
host = prod.example.com
port = 22
user = deploy

[files]
# Synchronisation des fichiers
path = /var/www/myapp
exclude = .git,node_modules,var/cache,var/log

[database]
# Synchronisation de la base de données
transport = ssh
host = prod.example.com
db_host = localhost
db_port = 3306
db_name = myapp_prod
db_user = myapp
db_password = ${PROD_DB_PASSWORD}

[dumps]
# Récupération depuis des dumps de backup existants
transport = ssh
path = /home/mysql_backup/files
pattern = *.sql.gz
strategy = interactive
```
