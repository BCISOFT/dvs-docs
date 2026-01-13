# db-import

## Usage

```bash
dvs db-import <file>
```

Imports a SQL dump or archive into the application database.

## Supported formats

| Format | Description |
|--------|-------------|
| `.sql` | Standard SQL dump file |
| `.sql.gz` | Gzip compressed SQL file |
| `.zip` | ZIP archive containing a SQL file |
| `.tar.gz` | Compressed archive (standard or parallel export) |

## Standard import

```bash
$ dvs db-import backup.sql
Dump backup.sql imported into myapp

$ dvs db-import backup.sql.gz
Dump backup.sql.gz imported into myapp

$ dvs db-import backup.zip
Dump backup.zip imported into myapp
```

## Parallel import

Archives created with `db-export --parallel` are automatically detected and imported using parallel processing for better performance on large databases.

```bash
$ dvs db-import myapp-20251215-105844-parallel.tar.gz
Mode: parallel import
Extracting parallel export archive...
Importing schema...
Importing data tables...
Parallel import completed: myapp-20251215-105844-parallel.tar.gz -> myapp
```

Parallel import:
- Disables foreign key checks during import
- Imports tables in parallel (8 concurrent jobs)
- Automatic retry on deadlocks (3 attempts)
- Re-enables constraints after completion

## Note

The file path must be provided relative to the application base path.

## See also

- `db-export`
