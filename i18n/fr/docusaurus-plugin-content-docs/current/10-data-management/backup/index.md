---
sidebar_position: 1
title: Vue d'ensemble
---

# Backup

Sauvegardes incrémentales avec déduplication utilisant restic.

:::info Fonctionnalité PRO
Backup est disponible dans le plan DVS PRO.
:::

## Concept

Contrairement aux archives (snapshots complets), les backups sont :
- **Incrémentaux** : Seules les données modifiées sont transférées
- **Dédupliqués** : Les blocs identiques sont stockés une seule fois
- **Versionnés** : Plusieurs snapshots dans le temps
- **Économes** : Typiquement 10-20% de la taille d'un backup complet

## Démarrage rapide

```bash
# Créer un backup
dvs backup create --storage backup

# Lister les snapshots
dvs backup list --storage backup

# Restaurer
dvs backup restore --storage backup
```

## Commandes

| Commande | Description |
|----------|-------------|
| [`dvs backup create`](./create) | Créer un snapshot |
| [`dvs backup list`](./list) | Lister les snapshots |
| [`dvs backup restore`](./restore) | Restaurer un snapshot |
| [`dvs backup prune`](./prune) | Supprimer les anciens snapshots |
| [`dvs backup delete`](./delete) | Supprimer un snapshot spécifique |
| [Info & Stats](./info) | info, stats, check, config |
| [Gestion des clés](./keys) | init-key, export-key, import-key |

## Fonctionnement

1. **Premier backup** : Upload complet des données
2. **Backups suivants** : Uniquement les blocs modifiés
3. **Déduplication** : Même contenu = même ID de bloc
4. **Chiffrement** : Toutes les données chiffrées avant upload

```
Snapshot 1: [A][B][C][D][E]     100%
Snapshot 2: [A][B][C][F][E]     20% (seul F a changé)
Snapshot 3: [A][B][G][F][E]     20% (seul G a changé)
```
