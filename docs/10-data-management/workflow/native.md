---
sidebar_position: 8
title: Native Workflows
---

# Native Workflows

Built-in deployment workflows.

## deploy

Standard rsync-based deployment.

```bash
dvs deploy prod --workflow deploy
```

**Steps:**
1. Sync files via rsync (no delete)
2. Clear application cache

**Use when:** Simple deployments, direct file sync

## deploy-atomic

Atomic deployment with release directories and symlink switch.

```bash
dvs deploy prod --workflow deploy-atomic
```

**Steps:**
1. Create new release directory
2. Sync files to release
3. Run post-deploy commands
4. Switch symlink to new release
5. Clean old releases

**Use when:** Zero-downtime deployments, easy rollback

**Directory structure:**
```
/var/www/myapp/
├── current -> releases/20250108-143052
├── releases/
│   ├── 20250108-143052/
│   ├── 20250107-091500/
│   └── ...
└── shared/
    ├── uploads/
    └── .env
```

## deploy-git-pull

Git-based deployment via remote pull.

```bash
dvs deploy prod --workflow deploy-git-pull
```

**Steps:**
1. SSH to remote
2. `git fetch origin`
3. `git reset --hard origin/main`
4. Run post-deploy commands

**Use when:** Git-based workflow, remote has repo access

---

## Reference

### deploy.yml

```yaml
name: deploy
description: Standard deployment with file sync

requires:
  components: [files]

parameters:
  include_database:
    default: false
    description: Also deploy database (disabled for e-commerce by default)

steps:
  - action: component.files.push

  - action: component.database.push
    when: $include_database || component.database.empty
```

### deploy-atomic.yml

```yaml
name: deploy-atomic
description: Zero-downtime deployment with symlinks and rollback

requires:
  transport: ssh
  components: [files]

parameters:
  releases_keep:
    default: 5
    description: Number of releases to keep
  shared_folders:
    default: ""
    description: Comma-separated list of shared folders (relative to webroot)
  current_link:
    default: current
    description: Name of the symlink pointing to current release

steps:
  - action: ssh.create_release_dir

  - action: component.files.push
    target: $RELEASE_DIR

  - action: ssh.link_shared_folders
    folders: $shared_folders
    when: $shared_folders

  - action: ssh.switch_symlink
    link: $current_link
    target: $RELEASE_DIR

  - action: ssh.cleanup_releases
    keep: $releases_keep
```

### deploy-git-pull.yml

```yaml
name: deploy-git-pull
description: Deploy by pulling latest code from git repository on remote

requires:
  transport: ssh
  components: [files]

parameters:
  branch:
    default: main
    description: Git branch to pull
  include_database:
    default: false
    description: Also deploy database (disabled for e-commerce by default)
  composer_install:
    default: true
    description: Run composer install after git pull
  cache_clear:
    default: true
    description: Clear application cache after deployment

steps:
  - action: ssh.run
    command: "cd $REMOTE_PATH && git fetch origin && git pull origin $branch"
    description: Pull latest code from git repository

  - action: ssh.run
    command: "cd $REMOTE_PATH && composer install --no-dev --optimize-autoloader"
    when: $composer_install
    description: Install PHP dependencies with composer

  - action: ssh.run
    command: "cd $REMOTE_PATH && php artisan cache:clear 2>/dev/null || rm -rf var/cache/* app/cache/* cache/* 2>/dev/null || true"
    when: $cache_clear
    description: Clear application cache

  - action: component.database.push
    when: $include_database || component.database.empty
    description: Push database to remote
```
