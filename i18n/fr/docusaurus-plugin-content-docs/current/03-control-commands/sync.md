# dvs sync

Synchroniser la configuration avec le serveur.

## Description

La commande `sync` synchronise votre configuration locale avec le serveur. Elle récupère la dernière configuration, incluant les certificats SSL, met à jour vos identifiant au registre docker et met à jour votre installation locale.

## Utilisation

```bash
dvs sync
```

## Notes

- Exécuté automatiquement en arrière plan une fois par jour.
- Exécution manuelle utile si l'accès au réseau n'est pas permanent.

