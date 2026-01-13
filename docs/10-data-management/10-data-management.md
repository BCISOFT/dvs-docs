---
sidebar_position: 1
---

# Data Management

Tools for managing application data: storage configuration, archiving, backup, synchronization, and deployment.

## Overview

| Feature | Plan | Description |
|---------|------|-------------|
| [Storage](./storage/) | FREE | Configure storage backends |
| [Archive](./archive/) | FREE | Encrypted project archives |
| [Backup](./backup/) | PRO | Incremental backups with restic |
| [Remote](./remote/) | PRO | Remote server configuration |
| [Workflow](./workflow/) | PRO | Custom deployment workflows |
| [Pull](./pull) | PRO | Pull data from remote |
| [Deploy](./deploy) | PRO | Deploy to remote |
| [Dumps](./dumps) | PRO | Pull from backup dumps |
| [Secrets](./secrets) | FREE | Secure secrets management |

## Quick Start

### Storage Setup

```bash
# Add a storage backend
dvs storage add mybackup --type sftp

# Test connection
dvs storage test mybackup
```

### Archive (FREE)

```bash
# Initialize encryption
dvs archive init-key

# Create archive
dvs archive create --storage mybackup

# Restore
dvs archive restore --storage mybackup
```

### Backup (PRO)

```bash
# Create incremental backup
dvs backup create --storage mybackup

# List snapshots
dvs backup list --storage mybackup

# Restore
dvs backup restore --storage mybackup
```

### Remote Sync (PRO)

```bash
# Configure remote
dvs remote configure prod

# Pull from production
dvs pull prod --files --database

# Deploy to production
dvs deploy prod
```

## Available Transports

| Transport | Protocol | Use Case |
|-----------|----------|----------|
| `ssh` | SSH/SCP | Linux servers |
| `sftp` | SFTP | Secure file transfer |
| `ftp` | FTP/FTPS | Legacy servers |
| `s3` | S3 API | AWS, MinIO |
| `local` | Local FS | Local directories |
