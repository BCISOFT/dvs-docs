# dvs upgrade

Mettre à jour l'installation.

## Description

La commande `upgrade` met à jour la commande cli, les images docker et les scripts de complétion vers leurs dernières versions.

## Utilisation

```bash
dvs upgrade
```

## Exemples

```bash
# Vérifier et mettre à jour
dvs upgrade
```

## Notes importantes

- **Validation de licence** : La commande valide votre licence avant la mise à jour. Si la validation échoue, elle tente de la corriger avec `dvs sync`.
- **Redémarrage du shell** : Après la mise à jour, vous devrez peut-être redémarrer votre shell ou sourcer votre fichier de configuration shell.

## Commandes associées

- `dvs version` - Vérifier la version actuelle
- `dvs sync` - Synchroniser la configuration (peut corriger les problèmes de licence)

