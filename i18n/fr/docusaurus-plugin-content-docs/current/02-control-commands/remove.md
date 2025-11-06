# dvs remove

Désinstalle et libére une installation dvs.

## Description

La commande `remove` désinstalle complètement DevSpaces de votre machine locale et libère la licence sur le serveur, la rendant disponible pour réutilisation.

## Utilisation

```bash
dvs remove
```


## Notes importantes

- **Libération de licence** : La commande appelle l'API serveur pour désactiver l'installation et libérer la licence. Cela rend la licence disponible pour réutilisation.
- **Nettoyage local** : Après une désactivation serveur réussie, les fichiers de configuration locale et les clés sont supprimés.
- **Gestion des échecs** : Si l'appel API échoue (serveur injoignable), la configuration locale est **conservée** et la commande échoue. Cela permet de :
  - Relancer `dvs remove` plus tard quand le serveur sera accessible
  - Désactiver manuellement l'installation via l'admin, puis utiliser `dvs clean` pour supprimer la configuration locale

## Commandes associées

- `dvs clean` - Supprimer la configuration locale sans appeler l'API

