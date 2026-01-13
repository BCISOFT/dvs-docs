---
sidebar_position: 9
title: dvs secrets 🔐
---

# dvs secrets

Gérer les secrets pour les configurations de storage, remote et workflows.

## Concept

Stocker les valeurs sensibles (mots de passe, clés API) séparément de la configuration :
- Stockés dans des fichiers au format `.env` avec permissions restreintes
- Référencés dans les configs avec la syntaxe `${secrets:KEY}`
- Résolus automatiquement à l'exécution
- Jamais committés en version control

:::warning Exclusion Git
Les secrets d'app pour les remotes sont stockés dans `<app-dir>/.dvs/secrets/`. Assurez-vous que ce dossier est exclu de git :

```bash
# .gitignore
.dvs/secrets/
```

Les secrets globaux et de storage sont stockés dans le répertoire `$DVS_CONFIG/`, qui est en dehors de votre projet et de git par défaut.
:::

## Contextes

Les secrets peuvent être stockés à deux niveaux :

| Contexte | Chemin de stockage | Cas d'usage |
|----------|-------------------|-------------|
| **App** | `$DVS_CONFIG/apps/<app>/secrets/deploy.env` | Secrets spécifiques à l'app |
| **Global** | `$DVS_CONFIG/secrets/global.env` | Partagés entre toutes les apps |

### Ordre de résolution

Lors de la résolution de `${secrets:KEY}` :
1. Recherche dans les **secrets app** d'abord (si dans un contexte d'app)
2. Fallback vers les **secrets globaux**

Cela permet de surcharger les secrets globaux par app.

## Commandes

| Commande | Description |
|----------|-------------|
| `dvs secrets list [--global]` | Lister les noms de secrets |
| `dvs secrets set [--global] <name> <value>` | Définir un secret |
| `dvs secrets delete [--global] <name>` | Supprimer un secret |
| `dvs secrets edit [--global]` | Éditer le fichier de secrets |

## Exemples

### Secrets d'app (dans un contexte d'app)

```bash
# Définir un secret spécifique à l'app
dvs secrets set PROD_DB_PASSWORD "mysecretpassword"

# Lister les secrets de l'app (noms uniquement, pas les valeurs)
dvs secrets list

# Supprimer un secret d'app
dvs secrets delete PROD_DB_PASSWORD

# Éditer le fichier de secrets de l'app
dvs secrets edit
```

### Secrets globaux

```bash
# Définir un secret global (partagé entre les apps)
dvs secrets set --global SLACK_WEBHOOK "https://hooks.slack.com/..."

# Lister les secrets globaux
dvs secrets list --global

# Éditer les secrets globaux
dvs secrets edit --global
```

## Utilisation des secrets

Les secrets utilisent la syntaxe `${secrets:KEY}` dans les fichiers de configuration.

### Dans la configuration des storages

Lors de l'exécution de `dvs storage add`, les mots de passe sont automatiquement stockés en secrets :

```ini
# $DVS_CONFIG/storages/backup.conf
[default]
transport = sftp
host = backup.example.com
user = admin
password = ${secrets:STORAGE_BACKUP_PASS}
```

### Dans la configuration des remotes

Idem pour `dvs remote configure` :

```ini
# .dvs/remotes/prod.conf
[database]
db_password = ${secrets:REMOTE_PROD_DB_PASS}
```

### Dans les workflows

Accès via `${secrets.NAME}` :

```yaml
steps:
  - action: ssh.run
    command: "curl -X POST ${secrets.SLACK_WEBHOOK} -d 'Deploy complete'"
```

## Stockage automatique

Lors de l'utilisation des commandes interactives (`dvs storage add`, `dvs remote configure`), les valeurs sensibles comme les mots de passe sont :
1. Automatiquement stockées dans le fichier de secrets approprié
2. Remplacées par une référence `${secrets:KEY}` dans la config
3. Convention de nommage : `STORAGE_<name>_<param>` ou `REMOTE_<name>_<param>`

Exemple :
```bash
$ dvs storage add backup --type sftp
# Entrer le mot de passe interactivement
# → Stocké comme STORAGE_BACKUP_PASS dans les secrets globaux
# → Config contient : password = ${secrets:STORAGE_BACKUP_PASS}
```

## Format de fichier

Les secrets utilisent un format simple `KEY=value` :

```bash
# $DVS_CONFIG/secrets/global.env
STORAGE_BACKUP_PASS=mysecretpassword
SLACK_WEBHOOK=https://hooks.slack.com/xxx

# $DVS_CONFIG/apps/myapp/secrets/deploy.env
REMOTE_PROD_DB_PASS=dbpassword
API_KEY=xyz789
```

## Sécurité

- Fichiers créés avec permissions `600` (lecture/écriture propriétaire uniquement)
- Répertoires créés avec permissions `700`
- Valeurs masquées dans les sorties de commandes
- Jamais stockés dans git (dans le répertoire `$DVS_CONFIG/`)
- Secrets résolus uniquement à l'exécution, jamais écrits dans les fichiers de config
