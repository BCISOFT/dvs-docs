---
sidebar_position: 7
title: Info & Stats
---

# Informations de backup

Commandes pour inspecter l'état du repository de backup.

## dvs backup info

Aperçu rapide de la configuration de backup.

```bash
dvs backup info --storage <name>
```

Sortie :
```
Backup Configuration:
  Storage: backup
  Repository: initialized
  Last backup: 2025-01-08 14:30:52
  Snapshots: 12
```

## dvs backup stats

Statistiques détaillées du repository.

```bash
dvs backup stats --storage <name> [options]
```

### Options

| Option | Description |
|--------|-------------|
| `--storage <name>` | Storage à vérifier (requis) |
| `--detailed` | Inclure la vérification d'intégrité |

### Sortie

```
Repository Statistics:
  Total size: 1.2 GB
  Deduplicated: 450 MB
  Compression ratio: 62%
  
  Snapshots: 45
  Unique files: 12,345
  
Deduplication savings: 750 MB (63%)
```

## dvs backup check

Vérifier l'intégrité du repository.

```bash
dvs backup check --storage <name> [options]
```

### Options

| Option | Description |
|--------|-------------|
| `--storage <name>` | Storage à vérifier (requis) |
| `--deep` | Vérification approfondie (lit toutes les données, plus lent) |

### Sortie

```
Checking repository integrity...
  Pack files: ✓ OK
  Index: ✓ OK
  Snapshots: ✓ OK
  
Repository is healthy.
```

## dvs backup config

Afficher la configuration de backup.

```bash
dvs backup config
```
