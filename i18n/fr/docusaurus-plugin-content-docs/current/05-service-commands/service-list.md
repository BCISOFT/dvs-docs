# dvs service list

Liste tous les services disponibles et leur statut.

## Utilisation

```bash
dvs service list [--json]
```

## Options

- `--json` - Sortie au format JSON pour l'automatisation et les scripts

## Affichage

La commande affiche tous les services disponibles avec leur statut d'installation :
- `[ ✔ ]` - Installé et en cours d'exécution
- `[ ⚠ ]` - Installé mais arrêté
- `[   ]` - Non installé

## Sortie JSON

```json
{
  "services": [
    {
      "name": "mysql",
      "status": "running",
      "installed": true,
      "url": "https://mysql.svc.dvs.sh"
    },
    {
      "name": "mailpit",
      "status": "not_installed",
      "installed": false,
      "url": ""
    }
  ]
}
```

## Exemple

```bash
$ dvs service list

Available services:
  [ ✔ ]  mysql       https://mysql.svc.dvs.sh
  [ ⚠ ]  mariadb     
  [   ]  mailpit     
  [   ]  phpmyadmin  
```

