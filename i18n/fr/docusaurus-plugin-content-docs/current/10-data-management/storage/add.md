---
sidebar_position: 2
title: dvs storage add
---

# dvs storage add

Ajouter une nouvelle configuration de stockage.

## Syntaxe

```bash
dvs storage add [name] [options]
```

## Options

| Option | Description |
|--------|-------------|
| `--type <transport>` | Type de transport : `ssh`, `sftp`, `ftp`, `s3`, `local` |

## Mode interactif

Sans arguments, démarre la configuration interactive :

```bash
dvs storage add
```

Demande :
1. Nom du storage
2. Type de transport
3. Paramètres spécifiques au transport (host, path, credentials...)

## Mode CLI

```bash
# Ajouter avec type de transport
dvs storage add mybackup --type sftp

# Puis configurer les paramètres
dvs storage set mybackup.default.host backup.example.com
dvs storage set mybackup.default.path /backups
dvs storage set mybackup.default.user admin
```

## Paramètres des transports

### SSH / SFTP

| Paramètre | Requis | Description |
|-----------|--------|-------------|
| `host` | Oui | Nom d'hôte ou IP |
| `port` | Non | Port (défaut : 22) |
| `user` | Oui | Utilisateur SSH |
| `path` | Oui | Chemin distant |
| `key` | Non | Chemin vers la clé privée |

### S3

| Paramètre | Requis | Description |
|-----------|--------|-------------|
| `endpoint` | Oui | URL du endpoint S3 |
| `bucket` | Oui | Nom du bucket |
| `access_key` | Oui | Access key ID |
| `secret_key` | Oui | Secret access key |
| `region` | Non | Région AWS |

### FTP

| Paramètre | Requis | Description |
|-----------|--------|-------------|
| `host` | Oui | Serveur FTP |
| `port` | Non | Port (défaut : 21) |
| `user` | Oui | Utilisateur FTP |
| `password` | Oui | Mot de passe FTP |
| `path` | Oui | Chemin distant |
| `tls` | Non | Activer FTPS (true/false) |

### Local

| Paramètre | Requis | Description |
|-----------|--------|-------------|
| `path` | Oui | Chemin du répertoire local |
