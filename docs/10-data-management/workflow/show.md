---
sidebar_position: 3
title: dvs workflow show
---

# dvs workflow show

Display workflow definition.

## Syntax

```bash
dvs workflow show <name>
```

## Example

```bash
dvs workflow show deploy
```

## Output

Shows the YAML workflow definition:

```yaml
name: deploy
description: Standard rsync deployment

steps:
  - name: sync-files
    action: rsync
    params:
      source: "{{ files.local_path }}"
      dest: "{{ files.remote_path }}"
      delete: false
      
  - name: clear-cache
    action: ssh-command
    params:
      command: "cd {{ files.remote_path }} && bin/console cache:clear"
```

## Workflow Structure

```yaml
name: workflow-name
description: Human-readable description

steps:
  - name: step-name
    action: action-type
    params:
      key: value
    when: condition  # optional
```
