---
sidebar_position: 2
title: dvs remote configure
---

# dvs remote configure

Configurer un serveur distant interactivement.

## Syntaxe

```bash
dvs remote configure <name> [options]
```

## Options

| Option | Description |
|--------|-------------|
| `--type <transport>` | Type de transport : `ssh`, `sftp`, `ftp`, `s3` |

## Exemple

```bash
dvs remote configure prod --type ssh
```

## Processus interactif

1. **Sélection du transport** (si non spécifié)
2. **Paramètres de connexion** : host, port, user
3. **Configuration des composants** :
   - Files : chemin distant, exclusions
   - Database : credentials, nom de la base
   - Dumps : chemin, pattern (optionnel)

## Fichier de configuration

Créé dans `<app-dir>/.dvs/remotes/<name>.conf` :

```ini
[default]
transport = ssh
host = prod.example.com
user = deploy

[files]
path = /var/www/myapp
exclude = .git,node_modules,var/cache

[database]
transport = ssh
host = prod.example.com
user = deploy
db_host = localhost
db_name = myapp_prod
db_user = myapp
db_password = ${PROD_DB_PASSWORD}

[dumps]
transport = ssh
path = /home/backups/mysql
pattern = *.sql.gz
strategy = interactive
```

## Secrets

Utilisez la syntaxe `${VAR_NAME}` pour les valeurs sensibles :

```bash
# Définir un secret
dvs secrets set PROD_DB_PASSWORD "mysecretpassword"

# Référencer dans la config
db_password = ${PROD_DB_PASSWORD}
```
