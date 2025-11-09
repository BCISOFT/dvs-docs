# wp

## Usage

```bash
dvs wp [...]
```

Shortcut to the `wp-cli` command in the application context.

## Example

```bash
# Display wp-cli help
$ dvs wp
NAME

  wp

DESCRIPTION

  Manage WordPress through the command-line.

SYNOPSIS

  wp <command>

SUBCOMMANDS

  cache                 Adds, removes, fetches, and flushes the WP Object Cache object.
  cap                   Adds, removes, and lists capabilities of a user role.
  cli                   Reviews current WP-CLI info, checks for updates, or views defined aliases.
  comment               Creates, updates, deletes, and moderates comments.
  config                Generates and reads the wp-config.php file.
  core                  Downloads, installs, updates, and manages a WordPress installation.
...

# Display existing menus
$ dvs wp menu list
+---------+------+------+-----------+-------+
| term_id | name | slug | locations | count |
+---------+------+------+-----------+-------+
+---------+------+------+-----------+-------+
```
