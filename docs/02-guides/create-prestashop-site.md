# Creating a PrestaShop Site

This guide explains how to quickly create a PrestaShop development site using the `dvs create prestashop` command.

## Overview

The `dvs create prestashop` command allows you to set up a complete PrestaShop environment with a single command. You can either use existing source code or let DevSpaces download and install a specific PrestaShop version.

## Basic Usage

Navigate to your project directory and run:

```bash
dvs create prestashop -i <version>
```

The `-i` (or `--install`) option is required to specify the PrestaShop version to install.

<!-- TODO: Add screenshot of create prestashop command -->

To see all available PrestaShop versions and their compatible PHP versions, use:

```bash
dvs help create prestashop
```

Or:

```bash
dvs create prestashop --help
```

This will display a matrix showing PrestaShop versions and their recommended PHP versions.

<!-- TODO: Add screenshot of help output showing version matrix -->

## Quick Installation with Options

For a faster setup, you can specify options directly:

```bash
dvs create prestashop -w 'www' -i 8.2.2 -p 8.1 -l fr -c FR
```

This command will:
- `-w 'www'`: Set the web root to the `www` folder
- `-i 8.2.2`: Install PrestaShop version 8.2.2
- `-p 8.1`: Use PHP 8.1
- `-l fr`: Set default language to French
- `-c FR`: Set default country to France

<!-- TODO: Add screenshot of command output during installation -->

## Available Options

### Application Name

By default, the application name is automatically constructed from the current directory name. You can override this by specifying a custom name:

```bash
dvs create prestashop -i 8.2.2 -n my-prestashop
```

Options:
- `-n, --name`: Application name (default: current directory name)

The application name is used for:
- The site URL: `https://<app-name>.dvs.sh`
- Database name (if not specified with `-D`)
- Database user (if not specified with `-U`)
- Container and configuration names

### Web Root

Specify the folder containing your PrestaShop source code:

```bash
dvs create prestashop -i 8.2.2 -w 'www'
```

Options:
- `-w, --web-root`: Folder containing source, must be relative to current folder (default: `./`)
- The folder must exist. Default is `./`.

### PHP Version

Choose the PHP version compatible with your PrestaShop version:

```bash
dvs create prestashop -i 8.2.2 -p 8.1
```

If you don't specify a PHP version with `-p`, DevSpaces will automatically select the highest compatible PHP version for the PrestaShop version you're installing:
- Default: PHP 7.2 for PrestaShop 1.7.x
- Default: PHP 8.1 for PrestaShop 8.x

**PrestaShop Version Compatibility Examples:**
- PrestaShop 1.7.7.x: PHP 7.1, 7.2, 7.3
- PrestaShop 1.7.8.x: PHP 7.1, 7.2, 7.3, 7.4
- PrestaShop 8.0.x: PHP 7.2, 7.3, 7.4, 8.0, 8.1
- PrestaShop 8.1.x: PHP 7.2, 7.3, 7.4, 8.0, 8.1
- PrestaShop 8.2.x: PHP 7.2, 7.3, 7.4, 8.0, 8.1

To see the complete compatibility matrix for all versions, use `dvs help create prestashop`.

### PrestaShop Version

Install a specific PrestaShop version automatically:

```bash
dvs create prestashop -i 8.2.2
```

The `-i` (or `--install`) option is required when creating a new PrestaShop installation. To see all available versions and their PHP compatibility:

```bash
dvs help create prestashop
```

Or:

```bash
dvs create prestashop --help
```

<!-- TODO: Add screenshot of available versions list -->

### Language and Country

Set the default language and country for the installation:

```bash
dvs create prestashop -i 8.2.2 -l fr -c FR
```

Options:
- `-l, --lang`: Change the default language installed with PrestaShop (default: `en`)
- `-c, --country`: Change the default country installed with PrestaShop (default: `GB`)

### Database Configuration

By default, DevSpaces will:
- Use the first installed SQL service (or `mysql` if none installed)
- Create a database with the app name
- Create a user with the app name
- Generate password automatically

You can override these defaults:

```bash
dvs create prestashop -i 8.2.2 -H mysql -D my_database -U my_user -P my_password
```

Options:
- `-H, --sql-host`: SQL service name to use (default: first SQL service found, or `mysql`)
- `-D, --sql-dbname`: MySQL database name (default: app name)
- `-U, --sql-user`: MySQL user name (default: app name)
- `-P, --sql-pass`: MySQL password (default: auto-generated)

## After Creation

Once the site is created, the command will display the admin panel access information, including:
- Admin panel URL: `https://<app-name>.dvs.sh/adminXXXX`
- Admin account credentials (email and password)

<!-- TODO: Add screenshot of command output showing admin credentials -->

You can then:

- Access your site at `https://<app-name>.dvs.sh`
- Access the admin panel using the credentials displayed
- View application info with `dvs info`

<!-- TODO: Add screenshot of dvs info output -->

### Managing Admin Accounts

To manage employee/admin accounts:

- **List all employees**: Use `dvs employee-list` to see all registered employee accounts
- **Change employee password**: Use `dvs employee-password <email|id> <password>` to update an employee's password

For more details, see the [employee-list](/docs/recipes/prestashop/employee-list) and [employee-password](/docs/recipes/prestashop/employee-password) command documentation.

## Next Steps

- Learn how to [set up image proxy](/docs/guides/setup-prestashop-image-proxy)
- Learn how to [access Mailpit](/docs/guides/access-mailpit) to view emails
- Learn how to [use phpMyAdmin](/docs/guides/use-phpmyadmin) to manage your database

