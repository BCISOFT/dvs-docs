# dvs generate-wrapper

Générer le fichier wrapper.sh.

## Description

La commande `generate-wrapper` génère le fichier `wrapper.sh` qui fournit les commandes de base de les variables d'environnement pour le shell.

## Utilisation

```bash
dvs generate-wrapper
```

Le wrapper est automatiquement intégré dans votre configuration shell lors de l'appel à `dvs install`

## Notes

- Le wrapper est automatiquement généré lors de `dvs install`.
- Le wrapper est automatiquement mis à jour lors de `dvs upgrade`.
- La régénération manuelle est rarement nécessaire.
