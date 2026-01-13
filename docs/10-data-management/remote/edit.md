---
sidebar_position: 5
title: dvs remote edit
---

# dvs remote edit

Edit remote configuration file.

## Syntax

```bash
dvs remote edit <name>
```

## Example

```bash
dvs remote edit prod
```

Opens `<app-dir>/.dvs/remotes/prod.conf` in `$EDITOR`.

## Configuration Sections

```ini
[default]
# Base transport settings (inherited by sections)
transport = ssh
host = prod.example.com
port = 22
user = deploy

[files]
# File synchronization
path = /var/www/myapp
exclude = .git,node_modules,var/cache,var/log

[database]
# Database synchronization
transport = ssh
host = prod.example.com
db_host = localhost
db_port = 3306
db_name = myapp_prod
db_user = myapp
db_password = ${PROD_DB_PASSWORD}

[dumps]
# Pull from existing backup dumps
transport = ssh
path = /home/mysql_backup/files
pattern = *.sql.gz
strategy = interactive
```
