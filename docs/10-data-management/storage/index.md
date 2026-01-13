---
sidebar_position: 1
title: Overview
---

# Storage

Centralized storage management for backup and archive operations.

## Concept

A **storage** is a named configuration pointing to a destination (SSH server, S3 bucket, local path). Used by:
- `dvs archive` - Encrypted archives
- `dvs backup` - Incremental backups (PRO)

## Available Transports

| Transport | Protocol | Use Case |
|-----------|----------|----------|
| `ssh`     | SSH/SCP  | Linux servers with SSH access |
| `sftp`    | SFTP     | Secure file transfer |
| `ftp`     | FTP/FTPS | Legacy FTP servers |
| `s3`      | S3 API   | AWS S3, MinIO, compatible |
| `local`   | Local FS | Local directories |

## Quick Start

```bash
# Add a storage interactively
dvs storage add

# Add with specific transport
dvs storage add mybackup --type sftp

# List configured storages
dvs storage list

# Test connection
dvs storage test mybackup
```

## Commands

| Command | Description |
|---------|-------------|
| [`dvs storage add`](./add) | Add a new storage |
| [`dvs storage list`](./list) | List storages |
| [`dvs storage test`](./test) | Test connection |
| [`dvs storage edit`](./edit) | Edit configuration |
| [`dvs storage delete`](./delete) | Delete storage |
| [`dvs storage set/get/unset`](./configuration) | Manage parameters |
| [`dvs storage params`](./configuration) | Show transport parameters |
