---
sidebar_position: 2
title: dvs remote configure
---

# dvs remote configure

Configure a remote server interactively.

## Syntax

```bash
dvs remote configure <name> [options]
```

## Options

| Option | Description |
|--------|-------------|
| `--type <transport>` | Transport type: `ssh`, `sftp`, `ftp`, `s3` |

## Example

```bash
dvs remote configure prod --type ssh
```

## Interactive Flow

1. **Transport selection** (if not specified)
2. **Connection settings**: host, port, user
3. **Component configuration**:
   - Files: remote path, excludes
   - Database: credentials, database name
   - Dumps: path, pattern (optional)

## Configuration File

Created at `<app-dir>/.dvs/remotes/<name>.conf`:

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

Use `${VAR_NAME}` syntax for sensitive values:

```bash
# Set secret
dvs secrets set PROD_DB_PASSWORD "mysecretpassword"

# Reference in config
db_password = ${PROD_DB_PASSWORD}
```
