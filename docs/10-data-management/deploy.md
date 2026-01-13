---
sidebar_position: 7
title: dvs deploy 🔐
---

# dvs deploy

Deploy application to a remote server.

:::info PRO Feature
Deploy is available in DVS PRO plan.
:::

## Syntax

```bash
dvs deploy [remote] [options]
```

## Options

| Option | Description |
|--------|-------------|
| `--workflow <name>` | Workflow to use (default: `deploy`) |
| `--only files\|database` | Deploy specific component |
| `--dry-run` | Preview without applying |
| `--delete` | Enable file deletion |
| `--yes, -y` | Confirm destructive operations |
| `--no-interactive` | Disable prompts |

## Examples

```bash
# Interactive: auto-select remote
dvs deploy

# Deploy to specific remote
dvs deploy prod

# Deploy files only
dvs deploy prod --only files

# Preview deployment
dvs deploy prod --dry-run

# Preview with deletions
dvs deploy prod --delete --dry-run

# Execute with deletions
dvs deploy prod --delete --yes

# Use specific workflow
dvs deploy prod --workflow deploy-atomic
```

## Safety

| Flag | Behavior |
|------|----------|
| `--delete` | Implies `--dry-run` (preview first) |
| `--delete --yes` | Executes deletion |
| Default | No file deletion on remote |

## Available Workflows

| Workflow | Description |
|----------|-------------|
| `deploy` | Standard rsync deployment |
| `deploy-atomic` | Atomic with symlink switch |
| `deploy-git-pull` | Git pull on remote |
| Custom | Your `<app-dir>/.dvs/workflows/*.yml` |
