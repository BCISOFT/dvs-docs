# dvs prune

Remove orphaned databases, users, and app configurations.

## Description

The `prune` command identifies and removes orphaned resources that are no longer referenced by valid applications:

- **Orphaned MySQL/MariaDB databases**: Databases that are not referenced by any installed application
- **Orphaned SQL users**: MySQL/MariaDB database users that are not referenced by any installed application
- **Orphaned app configurations**: App configuration directories whose `APP_ROOT` or `APP_WEB_ROOT` directories no longer exist

The command analyzes all app configurations and verifies that directories exist. Only apps with valid configurations and existing directories are considered valid.

## Usage

```bash
dvs prune [--dry-run]
```

### Options

- `--dry-run`: Display what would be deleted without actually deleting anything or prompting for confirmation. Useful for previewing the results before running the actual prune command.

## Important Notes

- **Interactive**: The command allows you to select which resources to delete using a multiple choice interface (unless `--dry-run` is used)
- **Selective**: You can choose to delete all resources at once or select specific ones individually
- **Safe**: Only resources not referenced by valid apps are shown for deletion
- **Service Management**: The command automatically starts MySQL/MariaDB services if they are not running
- **Dry-run Mode**: Use `--dry-run` to preview what would be deleted without making any changes

## Examples

### Basic Usage

```bash
$ dvs prune

Prune Analysis:

Orphaned databases:
  - old_app_db
  - test_db

Orphaned SQL users:
  - old_app_user
  - test_user

Select resources to delete (space to toggle, enter to confirm):
  [✓] All
  [ ] app:pipobimbo
  [ ] db:old_app_db
  [ ] db:test_db
  [ ] user:old_app_user
  [ ] user:test_user
  [ ] Cancel

Deleting orphaned resources...
Deleting database old_app_db ... ✔
Deleting database test_db ... ✔
Deleting user old_app_user ... ✔
Deleting user test_user ... ✔

Prune completed.
```

### Dry-run Mode

Preview what would be deleted without making any changes:

```bash
$ dvs prune --dry-run

Prune Analysis:

Orphaned databases:
  - old_app_db (from mysql-8.0)
  - test_db (from mysql-8.0)

Orphaned SQL users:
  - old_app_user (from mysql-8.0)
  - test_user (from mysql-8.0)

Dry-run mode: The following resources would be deleted:

Orphaned databases:
  - old_app_db (from mysql-8.0)
  - test_db (from mysql-8.0)

Orphaned SQL users:
  - old_app_user (from mysql-8.0)
  - test_user (from mysql-8.0)

No changes were made (dry-run mode).
```

## Related Commands

- `dvs mysqlconsole` - Root access to MySQL/MariaDB
- `dvs status` - List services and applications with their status

