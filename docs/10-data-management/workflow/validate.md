---
sidebar_position: 7
title: dvs workflow validate
---

# dvs workflow validate

Validate workflow syntax.

## Syntax

```bash
dvs workflow validate <name>
```

## Example

```bash
dvs workflow validate my-deploy
```

## Output (valid)

```
Workflow 'my-deploy' is valid.
  Steps: 4
  Actions: rsync, ssh-command
```

## Output (invalid)

```
Workflow 'my-deploy' has errors:
  Line 12: Unknown action 'invalid-action'
  Line 15: Missing required param 'command'
```

## Available Actions

| Action | Description |
|--------|-------------|
| `rsync` | Sync files via rsync |
| `ssh-command` | Execute remote command |
| `local-command` | Execute local command |
| `mysql-dump` | Export database |
| `mysql-import` | Import database |
