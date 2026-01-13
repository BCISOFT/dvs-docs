---
sidebar_position: 3
title: dvs workflow show
---

# dvs workflow show

Afficher la définition d'un workflow.

## Syntaxe

```bash
dvs workflow show <name>
```

## Exemple

```bash
dvs workflow show deploy
```

## Sortie

Affiche la définition YAML du workflow :

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

## Structure d'un workflow

```yaml
name: workflow-name
description: Description lisible

steps:
  - name: step-name
    action: action-type
    params:
      key: value
    when: condition  # optionnel
```
