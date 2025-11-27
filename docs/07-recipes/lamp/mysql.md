# mysql

## Usage

```bash
dvs mysql [...]
```

Shortcut to the `mysql` command in the application context.
Opens a shell if executed without parameters.

## Examples

```bash

$ dvs mysql
Reading table information for completion of table and column names
You can turn off this feature to get a quicker startup with -A

Welcome to the MySQL monitor.  Commands end with ; or \g.
Your MySQL connection id is 4299
Server version: 8.0.32 MySQL Community Server - GPL

Copyright (c) 2000, 2023, Oracle and/or its affiliates.

Oracle is a registered trademark of Oracle Corporation and/or its
affiliates. Other names may be trademarks of their respective
owners.

Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

mysql> exit

$ dvs mysql -e "SELECT VERSION()"
+-----------+
| VERSION() |
+-----------+
| 8.0.32    |
+-----------+
```
