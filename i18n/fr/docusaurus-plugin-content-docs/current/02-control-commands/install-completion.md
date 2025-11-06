# dvs install-completion

Installer la complétion pour le shell actuel.

## Description

La commande `install-completion` détecte automatiquement votre shell actuel et installe le script de complétion approprié. Elle ajoute la configuration nécessaire à votre fichier de démarrage shell.

## Utilisation

```bash
dvs install-completion
```

## Shells supportés

- **bash** - Complétion installée dans `~/.bash_completion.d/` ou `~/.local/share/bash-completion/completions/`
- **zsh** - Complétion installée dans `~/.zsh/completions/` ou ajoutée à `fpath`
- **fish** - Complétion installée dans `~/.config/fish/completions/`

## Notes

- La complétion est automatiquement installée lors de `dvs install`.
- La complétion est automatiquement mise à jour lors de `dvs upgrade`.
- L'installation manuelle est rarement nécessaire.

## Commandes associées

- `dvs completion` - Générer le script de complétion sans l'installer

