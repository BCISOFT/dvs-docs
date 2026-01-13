# db-export

## Usage

```bash
dvs db-export [--optimized|--parallel|--compressed|--dump]
```

Exports the database to the application directory.

## Options

| Option | Description | Output |
|--------|-------------|--------|
| `--optimized` | Auto-detection based on database size (default) | `.sql.gz` or `.tar.gz` |
| `--parallel` | Split tables for parallel import | `.tar.gz` (multi-files) |
| `--compressed` | Single SQL file compressed | `.sql.gz` |
| `--dump` | Single SQL file uncompressed | `.sql` |

## Optimized mode (default)

Automatically selects the best mode based on database size:
- Database > 100 MB → parallel mode
- Database < 100 MB → compressed mode

```bash
$ dvs db-export
Mode: compressed (database < 100 MB)
Database myapp exported to myapp-20251215-105844.sql.gz
```

## Parallel mode

Exports the database structure separately from the data (one file per table), enabling parallel import for faster restoration of large databases.

```bash
$ dvs db-export --parallel
Mode: parallel
Database myapp exported to myapp-20251215-105844-parallel.tar.gz
```

The parallel archive contains:
- `__00_schema.sql` - Database structure (tables, indexes, etc.)
- `tablename.sql` - Data for each table

:::note
Parallel mode is optimized for large databases. For small databases, the overhead may make it slower than compressed mode.
:::

## Compressed mode

Creates a single SQL dump compressed with gzip.

```bash
$ dvs db-export --compressed
Mode: compressed
Database myapp exported to myapp-20251215-105844.sql.gz
```

## Dump mode

Creates a single uncompressed SQL file.

```bash
$ dvs db-export --dump
Mode: dump
Database myapp exported to myapp-20251215-105844.sql
```

## See also

- `db-import`
