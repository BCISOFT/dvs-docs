# dvs clean

Supprimer la configuration locale (sans appeler l'API).

## Description

La commande `clean` supprime uniquement les fichiers de configuration locale sans appeler l'API serveur. Cela signifie que la licence n'est **pas libérée** sur le serveur.

## Utilisation

```bash
dvs clean
```

## Notes importantes

- **Pas de libération de licence** : Cette commande n'appelle PAS l'API serveur. La licence reste active sur le serveur.
- **Local uniquement** : Supprime uniquement les fichiers de configuration sur le poste

## Commandes associées

- `dvs remove` - Désinstaller et libérer la licence (appelle l'API)

