# dvs completion

Générer les scripts de complétion shell.

## Description

La commande `completion` génère les scripts de complétion shell pour bash, zsh ou fish. Ces scripts activent la complétion par tabulation pour les commandes dvs.

## Utilisation

```bash
dvs completion <shell>
```

## Arguments

- `<shell>` - Le nom du shell : `bash`, `zsh`, ou `fish`

Affiche le script sur stdout, le script peut être sauvegardé dans un fichier ou sourcé directement.

## Prérequis

- Un nom de shell valide doit être fourni

## Exemples

```bash
# Générer la complétion bash
dvs completion bash

# Générer la complétion zsh
dvs completion zsh

# Générer la complétion fish
dvs completion fish

# Sauvegarder dans un fichier
dvs completion bash > ~/.dvs-completion.bash
```

## Installation

Pour installer la complétion, utilisez la commande `dvs install-completion`, qui détecte automatiquement votre shell et installe le script approprié.

## Commandes associées

- `dvs install-completion` - Installer automatiquement la complétion pour le shell actuel

