---
sidebar_position: 5
title: dvs archive download
---

# dvs archive download

Télécharger une archive depuis le storage sans la restaurer.

## Syntaxe

```bash
dvs archive download <archive_id> --storage <name> [options]
```

## Options

| Option | Description |
|--------|-------------|
| `--storage <name>` | Storage source (requis) |
| `--output <path>` | Chemin de destination (défaut : répertoire courant) |
| `--password <pass>` | Déchiffrer avec mot de passe (si chiffrée avec mot de passe) |

## Exemples

```bash
# Télécharger dans le répertoire courant
dvs archive download myapp-20250108-143052 --storage backup

# Télécharger vers un chemin spécifique
dvs archive download myapp-20250108-143052 --storage backup --output ~/downloads/

# Télécharger une archive protégée par mot de passe
dvs archive download myapp-20250108-143052 --storage backup --password "secret"
```

## Sortie

Le fichier téléchargé est enregistré localement :
- Chiffré : `myapp-20250108-143052.tar.gz.age`
- Déchiffré : `myapp-20250108-143052.tar.gz`

## Cas d'usage

- Inspection manuelle du contenu de l'archive
- Transfert de l'archive vers un autre système
- Conserver une copie locale avant restauration
- Partager l'archive avec l'équipe
