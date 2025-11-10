# dvs deactivate

Désactiver l'application actuellement active.

## Description

La commande `deactivate` supprime le paramètre d'application active. Après désactivation, les commandes `dvs` utiliseront votre répertoire de travail actuel comme point de montage.

L'indicateur du prompt sera également supprimé (après redémarrage de votre shell ou rechargement du wrapper).

## Utilisation

```bash
dvs deactivate
```

## Voir aussi

- [dvs activate](./activate.md) - Activer une application
- [dvs app-folder](./app-folder.md) - Obtenir le chemin du dossier d'une app
- [Personnalisation du Prompt](prompt-customization)
