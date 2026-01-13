---
sidebar_position: 4
title: dvs workflow copy
---

# dvs workflow copy

Copier un workflow pour personnalisation.

## Syntaxe

```bash
dvs workflow copy <source> [new-name]
```

## Exemples

```bash
# Copier avec nom auto-généré
dvs workflow copy deploy
# Crée : .dvs/workflows/deploy-custom.yml

# Copier avec nom spécifique
dvs workflow copy deploy my-deploy
# Crée : .dvs/workflows/my-deploy.yml
```

## Cas d'usage

1. Copier un workflow natif
2. Modifier pour ajouter/changer des étapes
3. Utiliser avec `dvs deploy --workflow my-deploy`

## Exemple de personnalisation

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
