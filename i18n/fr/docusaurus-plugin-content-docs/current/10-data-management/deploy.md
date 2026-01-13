---
sidebar_position: 7
title: dvs deploy 🔐
---

# dvs deploy

Déployer l'application vers un serveur distant.

:::info Fonctionnalité PRO
Deploy est disponible dans le plan DVS PRO.
:::

## Syntaxe

```bash
dvs deploy [remote] [options]
```

## Options

| Option | Description |
|--------|-------------|
| `--workflow <name>` | Workflow à utiliser (défaut : `deploy`) |
| `--only files\|database` | Déployer un composant spécifique |
| `--dry-run` | Prévisualiser sans appliquer |
| `--delete` | Activer la suppression de fichiers |
| `--yes, -y` | Confirmer les opérations destructives |
| `--no-interactive` | Désactiver les prompts |

## Exemples

```bash
# Interactif : auto-sélection du remote
dvs deploy

# Déployer vers un remote spécifique
dvs deploy prod

# Déployer uniquement les fichiers
dvs deploy prod --only files

# Prévisualiser le déploiement
dvs deploy prod --dry-run

# Prévisualiser avec suppressions
dvs deploy prod --delete --dry-run

# Exécuter avec suppressions
dvs deploy prod --delete --yes

# Utiliser un workflow spécifique
dvs deploy prod --workflow deploy-atomic
```

## Sécurité

| Flag | Comportement |
|------|--------------|
| `--delete` | Implique `--dry-run` (prévisualisation d'abord) |
| `--delete --yes` | Exécute la suppression |
| Défaut | Pas de suppression de fichiers sur le remote |

## Workflows disponibles

| Workflow | Description |
|----------|-------------|
| `deploy` | Déploiement rsync standard |
| `deploy-atomic` | Atomique avec switch symlink |
| `deploy-git-pull` | Git pull sur le remote |
| Custom | Vos `<app-dir>/.dvs/workflows/*.yml` |
