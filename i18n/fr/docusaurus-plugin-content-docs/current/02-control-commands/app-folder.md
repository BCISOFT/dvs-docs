# dvs app-folder

Obtenir le chemin du dossier de l'application.

## Description

La commande `app-folder` retourne le chemin du dossier pour une application donnée. C'est utile pour les scripts shell et l'automatisation qui ont besoin de connaître l'emplacement des fichiers d'une application.

## Utilisation

```bash
dvs app-folder <nom-app>
```

## Arguments

- `<nom-app>` - Le nom de l'application

## Ce qu'elle fait

1. Lit la configuration de l'application depuis le contexte Docker
2. Extrait la valeur `APP_ROOT` de la configuration
3. Affiche le chemin (destiné à être utilisé dans les scripts shell)

## Prérequis

- Une installation valide doit exister
- L'application doit être créée et configurée

## Exemples

```bash
# Obtenir le chemin du dossier pour une application
dvs app-folder myapp

# Utiliser dans un script
cd "$(dvs app-folder myapp)"
```

## Sortie

La commande affiche uniquement le chemin, ce qui la rend adaptée à une utilisation dans les scripts shell :

```bash
/chemin/vers/mon/application
```

## Gestion des erreurs

- Si l'application n'est pas trouvée, la commande retourne une erreur
- Si `APP_ROOT` n'est pas trouvé dans la config de l'app, la commande retourne une erreur

