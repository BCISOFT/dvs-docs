---
sidebar_position: 4
title: dvs workflow copy
---

# dvs workflow copy

Copy a workflow for customization.

## Syntax

```bash
dvs workflow copy <source> [new-name]
```

## Examples

```bash
# Copy with auto-generated name
dvs workflow copy deploy
# Creates: .dvs/workflows/deploy-custom.yml

# Copy with specific name
dvs workflow copy deploy my-deploy
# Creates: .dvs/workflows/my-deploy.yml
```

## Use Case

1. Copy native workflow
2. Edit to add/modify steps
3. Use with `dvs deploy --workflow my-deploy`

## Example Customization

```yaml
name: my-deploy
description: Custom deployment with notifications

steps:
  - name: notify-start
    action: ssh-command
    params:
      command: "curl -X POST https://slack.webhook/... -d 'Deploy starting'"

  - name: sync-files
    action: rsync
    params:
      source: "{{ files.local_path }}"
      dest: "{{ files.remote_path }}"

  - name: clear-cache
    action: ssh-command
    params:
      command: "cd {{ files.remote_path }} && php bin/console cache:clear"

  - name: notify-done
    action: ssh-command
    params:
      command: "curl -X POST https://slack.webhook/... -d 'Deploy complete'"
```
