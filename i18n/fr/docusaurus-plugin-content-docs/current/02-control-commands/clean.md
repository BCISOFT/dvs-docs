# dvs clean

Supprimer la configuration locale (sans appeler l'API).

## Description

La commande `clean` supprime uniquement les fichiers de configuration locale sans appeler l'API serveur. Cela signifie que la licence n'est **pas libérée** sur le serveur.

## Utilisation

```bash
dvs clean
```

## Ce qu'elle fait

1. Demande confirmation
2. Supprime uniquement le répertoire de configuration locale (`~/.config/devspaces/`)
3. **N'appelle PAS l'API** (ne libère pas la licence sur le serveur)

## Prérequis

- Une configuration locale doit exister

## Exemples

```bash
# Nettoyer la configuration locale
dvs clean
```

## Cas d'usage

- `dvs remove` a échoué mais vous avez désactivé l'installation manuellement via l'admin Django
- Erreurs de permissions lors du nettoyage automatique
- Nettoyage après un test
- Supprimer la configuration sans libérer la licence

## Notes importantes

- **Pas de libération de licence** : Cette commande n'appelle PAS l'API serveur. La licence reste active sur le serveur.
- **Local uniquement** : Supprime uniquement les fichiers dans `~/.config/devspaces/`.
- **Confirmation requise** : La commande demande confirmation avant suppression.

## Commandes associées

- `dvs remove` - Désinstaller et libérer la licence (appelle l'API)

