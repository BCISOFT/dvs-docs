---
sidebar_position: 1
title: Overview
---

# Workflow

Customizable deployment workflows defined in YAML.

:::info PRO Feature
Workflow customization is available in DVS PRO plan.
:::

## Concept

A **workflow** is a sequence of actions executed during deployment:
- File synchronization
- Database operations
- Remote commands
- Cache clearing

## Native Workflows

DVS includes 3 built-in workflows:

| Workflow | Description |
|----------|-------------|
| `deploy` | Standard rsync deployment |
| `deploy-atomic` | Atomic deployment with symlink switch |
| `deploy-git-pull` | Git-based deployment |

## Quick Start

```bash
# List available workflows
dvs workflow list

# Show workflow details
dvs workflow show deploy

# Deploy using workflow
dvs deploy prod --workflow deploy

# Copy for customization
dvs workflow copy deploy my-deploy
```

## Commands

| Command | Description |
|---------|-------------|
| [`dvs workflow list`](./list) | List workflows |
| [`dvs workflow show`](./show) | Show workflow details |
| [`dvs workflow copy`](./copy) | Copy for customization |
| [`dvs workflow edit`](./edit) | Edit custom workflow |
| [`dvs workflow delete`](./delete) | Delete custom workflow |
| [`dvs workflow validate`](./validate) | Validate syntax |
