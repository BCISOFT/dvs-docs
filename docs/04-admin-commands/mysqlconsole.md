# dvs mysqlconsole

## Description

The `mysqlconsole` command provides `root` access to one of the mySQL or mariaDB services.

## Usage

```bash
dvs mysqlconsole <service> [command]
```

## Arguments

- `service` - name of the SQL service to use among mysql or mariadb
- `command` - SQL command to execute. If not provided, opens a shell with the `root` user
