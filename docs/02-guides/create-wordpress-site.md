# Creating a WordPress Site

This guide explains how to quickly create a WordPress development site using the `dvs create wordpress` command.

## Overview

The `dvs create wordpress` command allows you to set up a complete WordPress environment with a single command. You can either use existing source code or let DevSpaces download and install a specific WordPress version.

## Basic Usage

Navigate to your project directory and run:

```bash
dvs create wordpress -i <version>
```

The `-i` (or `--install`) option is required to specify the WordPress version to install.

<!-- TODO: Add screenshot of create wordpress command -->

To see all available WordPress versions and their compatible PHP versions, use:

```bash
dvs help create wordpress
```

Or:

```bash
dvs create wordpress --help
```

This will display a matrix showing WordPress versions and their recommended PHP versions.

<!-- TODO: Add screenshot of help output showing version matrix -->

## Quick Installation with Options

For a faster setup, you can specify options directly:

```bash
dvs create wordpress -w 'www' -i 6.4 -p 8.1 -l fr_FR
```

This command will:
- `-w 'www'`: Set the web root to the `www` folder
- `-i 6.4`: Install WordPress version 6.4
- `-p 8.1`: Use PHP 8.1
- `-l fr_FR`: Set locale to French

<!-- TODO: Add screenshot of command output during installation -->

## Available Options

### Application Name

By default, the application name is automatically constructed from the current directory name. You can override this by specifying a custom name:

```bash
dvs create wordpress -i 6.4 -n my-wordpress
```

Options:
- `-n, --name`: Application name (default: current directory name)

The application name is used for:
- The site URL: `https://<app-name>.dvs.sh`
- Database name (if not specified with `-D`)
- Database user (if not specified with `-U`)
- Container and configuration names

### Web Root

Specify the folder containing your WordPress source code:

```bash
dvs create wordpress -i 6.4 -w 'www'
```

Options:
- `-w, --web-root`: Folder containing source, must be relative to current folder (default: `./`)
- The folder must exist. Default is `./`.

### PHP Version

Choose the PHP version compatible with your WordPress version:

```bash
dvs create wordpress -i 6.4 -p 8.1
```

If you don't specify a PHP version with `-p`, DevSpaces will automatically select the highest compatible PHP version for the WordPress version you're installing.

WordPress typically works with PHP 7.4 and higher. To see the complete compatibility matrix for all versions, use `dvs help create wordpress`.

### WordPress Version

Install a specific WordPress version automatically:

```bash
dvs create wordpress -i 6.4
```

The `-i` (or `--install`) option is required when creating a new WordPress installation. To see all available versions and their PHP compatibility:

```bash
dvs help create wordpress
```

Or:

```bash
dvs create wordpress --help
```

<!-- TODO: Add screenshot of available versions list -->

### Locale

Set the locale for WordPress installation:

```bash
dvs create wordpress -i 6.4 -l fr_FR
```

Options:
- `-l, --locale`: Change the default locale installed (default: `en_US`)

Common locales:
- `en_US` - English (US)
- `fr_FR` - French
- `de_DE` - German
- `es_ES` - Spanish

### Database Configuration

By default, DevSpaces will:
- Use the first installed SQL service (or `mysql` if none installed)
- Create a database with the app name
- Create a user with the app name
- Generate password automatically

You can override these defaults:

```bash
dvs create wordpress -i 6.4 -H mysql -D my_database -U my_user -P my_password
```

Options:
- `-H, --sql-host`: SQL service name to use (default: first SQL service found, or `mysql`)
- `-D, --sql-dbname`: MySQL database name (default: app name)
- `-U, --sql-user`: MySQL user name (default: app name)
- `-P, --sql-pass`: MySQL password (default: auto-generated)

## Automatic Installation

When you specify the `-i` option with a version number, DevSpaces will:

1. Download the specified WordPress version
2. Extract it to the web root directory
3. Create the `wp-config.php` file
4. Run the WordPress installation
5. Create an admin user with credentials

After installation, you'll see the admin credentials:

```
https://<app-name>.dvs.sh/wp-admin
  user: <app-name>@<domain>
  pass: <generated-password>
```

<!-- TODO: Add screenshot of installation completion with credentials -->

## After Creation

Once the site is created, the command will display the admin panel access information, including:
- Admin panel URL: `https://<app-name>.dvs.sh/wp-admin`
- Admin account credentials (email and password)

<!-- TODO: Add screenshot of command output showing admin credentials -->

You can then:

- Access your site at `https://<app-name>.dvs.sh`
- Access the admin panel using the credentials displayed
- View application info with `dvs info`

<!-- TODO: Add screenshot of dvs info output -->

### Managing User Accounts

To manage user/admin accounts:

- **List all users**: Use `dvs user-list` to see all registered user accounts
- **Change user password**: Use `dvs user-password <email|id> <password>` to update a user's password

For more details, see the [user-list](/docs/recipes/wordpress/user-list) and [user-password](/docs/recipes/wordpress/user-password) command documentation.

## Using WP-CLI

DevSpaces provides a shortcut to WP-CLI commands:

```bash
dvs wp <command>
```

For example:

```bash
# List all plugins
dvs wp plugin list

# Install a plugin
dvs wp plugin install akismet

# Update WordPress core
dvs wp core update
```

<!-- TODO: Add screenshot of wp-cli command output -->

## Next Steps

- Learn how to [access Mailpit](/docs/guides/access-mailpit) to view emails
- Learn how to [use phpMyAdmin](/docs/guides/use-phpmyadmin) to manage your database
- Learn how to [create a shared tunnel](/docs/guides/create-shared-tunnel) to share your site

