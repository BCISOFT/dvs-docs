# dvs-workon

Déplace dans le répertoire d'une application
 

## Utilisation

```bash
dvs-workon <nom-app>
```

## Arguments

- `<nom-app>` - Le nom de l'application


## Remarque

Cette commande est un raccourci vers:

```bash
cd "$(dvs app-folder myapp)"
```

## Gestion des erreurs

- Si l'application n'est pas trouvée, la commande ne fait rien

