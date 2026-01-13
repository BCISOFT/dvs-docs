---
sidebar_position: 9
title: dvs secrets 🔐
---

# dvs secrets

Manage secrets for storage, remote, and workflow configurations.

## Concept

Store sensitive values (passwords, API keys) separately from configuration:
- Stored in `.env` format files with restricted permissions
- Referenced in configs with `${secrets:KEY}` syntax
- Automatically resolved at runtime
- Never committed to version control

:::warning Git Exclusion
App secrets for remotes are stored in `<app-dir>/.dvs/secrets/`. Make sure this folder is excluded from git:

```bash
# .gitignore
.dvs/secrets/
```

Global and storage secrets are stored in `$DVS_CONFIG/` directory, which is outside your project and git by default.
:::

## Contexts

Secrets can be stored at two levels:

| Context | Storage Path | Use Case |
|---------|--------------|----------|
| **App** | `$DVS_CONFIG/apps/<app>/secrets/deploy.env` | App-specific secrets |
| **Global** | `$DVS_CONFIG/secrets/global.env` | Shared across all apps |

### Resolution Order

When resolving `${secrets:KEY}`:
1. Search in **app secrets** first (if in app context)
2. Fallback to **global secrets**

This allows overriding global secrets per-app.

## Commands

| Command | Description |
|---------|-------------|
| `dvs secrets list [--global]` | List secret names |
| `dvs secrets set [--global] <name> <value>` | Set a secret |
| `dvs secrets delete [--global] <name>` | Delete a secret |
| `dvs secrets edit [--global]` | Edit secrets file |

## Examples

### App Secrets (in app context)

```bash
# Set app-specific secret
dvs secrets set PROD_DB_PASSWORD "mysecretpassword"

# List app secrets (names only, no values)
dvs secrets list

# Delete app secret
dvs secrets delete PROD_DB_PASSWORD

# Edit app secrets file
dvs secrets edit
```

### Global Secrets

```bash
# Set global secret (shared across apps)
dvs secrets set --global SLACK_WEBHOOK "https://hooks.slack.com/..."

# List global secrets
dvs secrets list --global

# Edit global secrets
dvs secrets edit --global
```

## Using Secrets

Secrets use the syntax `${secrets:KEY}` in configuration files.

### In Storage Configuration

When running `dvs storage add`, passwords are automatically stored as secrets:

```ini
# $DVS_CONFIG/storages/backup.conf
[default]
transport = sftp
host = backup.example.com
user = admin
password = ${secrets:STORAGE_BACKUP_PASS}
```

### In Remote Configuration

Same for `dvs remote configure`:

```ini
# .dvs/remotes/prod.conf
[database]
db_password = ${secrets:REMOTE_PROD_DB_PASS}
```

### In Workflows

Access via `${secrets.NAME}`:

```yaml
steps:
  - action: ssh.run
    command: "curl -X POST ${secrets.SLACK_WEBHOOK} -d 'Deploy complete'"
```

## Automatic Storage

When using interactive commands (`dvs storage add`, `dvs remote configure`), sensitive values like passwords are:
1. Automatically stored in the appropriate secrets file
2. Replaced with `${secrets:KEY}` reference in config
3. Key naming convention: `STORAGE_<name>_<param>` or `REMOTE_<name>_<param>`

Example:
```bash
$ dvs storage add backup --type sftp
# Enter password interactively
# → Stored as STORAGE_BACKUP_PASS in global secrets
# → Config contains: password = ${secrets:STORAGE_BACKUP_PASS}
```

## File Format

Secrets use simple `KEY=value` format:

```bash
# $DVS_CONFIG/secrets/global.env
STORAGE_BACKUP_PASS=mysecretpassword
SLACK_WEBHOOK=https://hooks.slack.com/xxx

# $DVS_CONFIG/apps/myapp/secrets/deploy.env
REMOTE_PROD_DB_PASS=dbpassword
API_KEY=xyz789
```

## Security

- Files created with `600` permissions (owner read/write only)
- Directories created with `700` permissions
- Values masked in command output
- Never stored in git (inside `$DVS_CONFIG/` directory)
- Secrets resolved only at runtime, never written to config files
