# dvs upgrade

Mettre à jour vers la dernière version.

## Description

La commande `upgrade` met à jour à la fois le binaire dvsctl et l'image Docker admin vers leurs dernières versions. Elle vérifie les mises à jour, télécharge les nouvelles versions si disponibles, et effectue les mises à jour système nécessaires.

## Utilisation

```bash
dvs upgrade
```

## Ce qu'elle fait

1. Vérifie les versions actuelles (dvsctl et image admin)
2. Récupère les dernières versions depuis le serveur
3. Compare les versions et détermine si des mises à jour sont nécessaires
4. Valide la licence avant la mise à jour
5. Télécharge et installe le nouveau binaire dvsctl si nécessaire
6. Télécharge et met à jour l'image Docker admin si nécessaire
7. Exécute la mise à jour système interne
8. Nettoie les anciennes images
9. Régénère wrapper.sh
10. Met à jour les scripts de complétion

## Prérequis

- Une installation valide doit exister
- Connexion internet pour télécharger les mises à jour
- La licence doit être valide (la validation est effectuée avant la mise à jour)

## Exemples

```bash
# Vérifier et mettre à jour
dvs upgrade
```

## Processus de mise à jour

Le processus de mise à jour est interactif :

1. Affiche les versions actuelles et dernières
2. Montre ce qui sera mis à jour
3. Demande confirmation
4. Effectue la mise à jour
5. Met à jour les composants associés

## Notes importantes

- **Validation de licence** : La commande valide votre licence avant la mise à jour. Si la validation échoue, elle tente de la corriger avec `dvs sync`.
- **Mise à jour du binaire** : Le binaire dvsctl est mis à jour de manière atomique avec un mécanisme de sauvegarde.
- **Image admin** : L'image Docker admin est mise à jour pour correspondre à la version requise.
- **Redémarrage du shell** : Après la mise à jour, vous devrez peut-être redémarrer votre shell ou sourcer votre fichier de configuration shell.

## Cas d'usage

- Maintenir DevSpaces à jour
- Obtenir les dernières fonctionnalités et corrections de bugs
- Assurer la compatibilité avec le serveur

## Commandes associées

- `dvs version` - Vérifier la version actuelle
- `dvs sync` - Synchroniser la configuration (peut corriger les problèmes de licence)

