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


## Astuce

Vous pouvez combiner l'activation d'une application et le changement de dossier. Par exemple la fonction bash `dw` ci-dessous permet d'effectuer ces deux opérations en une seule commande:

```bash
dw() {
  if [[ $# -ne 1 ]]; then
    echo "usage: dw <app>"
    exit 1
  fi
  local app="$1"
  export DVS_ACTIVE_APP=$app
  cd "$(dvs app-folder $app)"
}
```