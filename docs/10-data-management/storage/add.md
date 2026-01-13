---
sidebar_position: 2
title: dvs storage add
---

# dvs storage add

Add a new storage remote configuration.

## Syntax

```bash
dvs storage add [name] [options]
```

## Options

| Option | Description |
|--------|-------------|
| `--type <transport>` | Transport type: `ssh`, `sftp`, `ftp`, `s3`, `local` |

## Interactive Mode

Without arguments, starts interactive configuration:

```bash
dvs storage add
```

Prompts for:
1. Storage name
2. Transport type
3. Transport-specific parameters (host, path, credentials...)

## CLI Mode

```bash
# Add with transport type
dvs storage add mybackup --type sftp

# Then configure parameters
dvs storage set mybackup.default.host backup.example.com
dvs storage set mybackup.default.path /backups
dvs storage set mybackup.default.user admin
```

## Transport Parameters

### SSH / SFTP

| Parameter | Required | Description |
|-----------|----------|-------------|
| `host` | Yes | Server hostname or IP |
| `port` | No | Port (default: 22) |
| `user` | Yes | SSH username |
| `path` | Yes | Remote base path |
| `key` | No | Path to private key |

### S3

| Parameter | Required | Description |
|-----------|----------|-------------|
| `endpoint` | Yes | S3 endpoint URL |
| `bucket` | Yes | Bucket name |
| `access_key` | Yes | Access key ID |
| `secret_key` | Yes | Secret access key |
| `region` | No | AWS region |

### FTP

| Parameter | Required | Description |
|-----------|----------|-------------|
| `host` | Yes | FTP server |
| `port` | No | Port (default: 21) |
| `user` | Yes | FTP username |
| `password` | Yes | FTP password |
| `path` | Yes | Remote path |
| `tls` | No | Enable FTPS (true/false) |

### Local

| Parameter | Required | Description |
|-----------|----------|-------------|
| `path` | Yes | Local directory path |
