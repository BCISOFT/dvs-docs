# dvs check

Check and repair applications, remove orphaned resources.

## Description

The `check` command diagnoses and fixes issues with your DVS installation:

- **Repairable apps**: Applications with missing `.devspaces` file that can be repaired
- **Orphaned MySQL/MariaDB databases**: Databases that are not referenced by any installed application
- **Orphaned SQL users**: MySQL/MariaDB database users that are not referenced by any installed application
- **Orphaned app configurations**: App configuration directories whose `APP_ROOT` or `APP_WEB_ROOT` directories no longer exist

The command first offers to repair any fixable issues, then identifies orphaned resources for cleanup.

## Usage

```bash
dvs check [--dry-run]
```

### Options

- `--dry-run`: Display what would be repaired or deleted without actually making any changes.

## Important Notes

- **Interactive**: The command allows you to select which resources to repair or delete using interactive prompts
- **Repair first**: Repairable apps are handled before orphan cleanup
- **Safe**: Only resources not referenced by valid apps are shown for deletion
- **Service Management**: The command automatically starts MySQL/MariaDB services if they are not running

## Examples

### Repair an app with missing .devspaces file

```bash
$ dvs check

DVS Check

[!] Repairable apps (missing .devspaces file):
  - myapp (/Users/dev/myapp)

⚠ Repair these apps by recreating .devspaces files?
  [No]  [Yes]

→ Yes
[✓] Repaired myapp

Check Analysis:

No orphaned resources found.
```

### Remove orphaned databases

```bash
$ dvs check

DVS Check

Check Analysis:

Orphaned databases:
  - old_app_db (from mysql-8.0)

Select resources to delete (space to toggle, enter to confirm):
  [✓] All
  [ ] db:old_app_db
  [ ] Cancel

Deleting database old_app_db ... ✔

Check completed.
```

### Dry-run Mode

Preview what would be repaired or deleted:

```bash
$ dvs check --dry-run

DVS Check (dry-run)

[!] Repairable apps (missing .devspaces file):
  - myapp (/Users/dev/myapp)

[i] Dry-run: would recreate .devspaces files for these apps

Check Analysis:

Orphaned databases:
  - old_app_db (from mysql-8.0)

Dry-run mode: The following resources would be deleted:
  - old_app_db (from mysql-8.0)

No changes were made (dry-run mode).
```

## Related Commands

- `dvs mysqlconsole` - Root access to MySQL/MariaDB
- `dvs status` - List services and applications with their status
