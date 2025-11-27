# dvs app-folder

Obtenir le chemin du dossier de l'application.

## Description

La commande `app-folder` retourne le chemin du dossier pour une application donnée. Utilé dans les scripts shell et automatisation pour connaître l'emplacement des fichiers d'une application.

## Utilisation

```bash
dvs app-folder <nom-app>
```

## Arguments

- `<nom-app>` - Le nom de l'application


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

