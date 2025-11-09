# dvs mysqlconsole

## Description

La commande `mysqlconsole` permet un accès `root` à l'un des services mySQL ou mariaDB.

## Utilisation

```bash
dvs mysqlconsole <service> [command]
```

## Arguments

- `service` - nom du service SQL à utiliser parmi mysql ou mariadb
- `command` - commande SQL à exécuter. Si non renseigné ouvre un shell avec l'utilisateur `root`
