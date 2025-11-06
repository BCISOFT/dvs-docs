# dvs remove

Désinstaller et libérer la licence.

## Description

La commande `remove` désinstalle complètement DevSpaces de votre machine locale et libère la licence sur le serveur, la rendant disponible pour réutilisation.

## Utilisation

```bash
dvs remove
```

## Ce qu'elle fait

1. Charge la configuration existante
2. Demande confirmation
3. **Désactive l'installation sur le serveur** (libère la licence)
4. Supprime la configuration locale et les clés de chiffrement

## Prérequis

- Une installation valide doit exister
- Le serveur doit être accessible (pour la libération de licence)

## Exemples

```bash
# Désinstaller DevSpaces
dvs remove
```

## Notes importantes

- **Libération de licence** : La commande appelle l'API serveur pour désactiver l'installation et libérer la licence. Cela rend la licence disponible pour réutilisation.
- **Nettoyage local** : Après une désactivation serveur réussie, les fichiers de configuration locale et les clés sont supprimés.
- **Gestion des échecs** : Si l'appel API échoue (serveur injoignable), la configuration locale est **conservée** et la commande échoue. Cela permet de :
  - Relancer `dvs remove` plus tard quand le serveur sera accessible
  - Désactiver manuellement l'installation via l'admin Django, puis utiliser `dvs clean` pour supprimer la configuration locale

## Cas d'usage

- Désinstaller complètement DevSpaces
- Libérer une licence pour réutilisation
- Nettoyer une installation de test

## Commandes associées

- `dvs clean` - Supprimer la configuration locale sans appeler l'API

