---
sidebar_position: 2
---

# dvs remote wizard

Interactive wizard for automatic remote configuration. Detects recipe, MySQL credentials, public URL, and optimal workflow from a remote server.

## Usage

```bash
dvs remote wizard [name] [options]
```

## Arguments

| Argument | Description |
|----------|-------------|
| `[name]` | Name of the remote configuration (e.g., `prod`, `staging`). Used as filename for `.dvs/remotes/<name>.conf` |

## Options

| Option | Description |
|--------|-------------|
| `--host <host>` | SSH hostname (prompted if not provided) |
| `--user <user>` | SSH username (default: www-data) |
| `--port <port>` | SSH port (default: 22) |
| `--pull` | Execute pull after configuration |

## Supported Recipes

The wizard is only compatible with:
- **PrestaShop**
- **WordPress**

Running the wizard on other recipes will display an error.

## Description

The wizard automates the creation of remote configuration by:

1. **Recipe detection**: Identifies WordPress or PrestaShop applications
2. **Installation path**: Finds application installations on the remote server
3. **MySQL credentials**: Extracts database configuration from config files
4. **Database engine detection**: Detects MariaDB vs MySQL and handles engine mismatches
5. **Application version**: Detects PrestaShop/WordPress version
6. **PHP version**: Recommends compatible PHP version based on app version
7. **Public URL**: Detects the site's public URL from database or config
8. **Workflow selection**: Recommends the optimal deployment workflow
9. **Dumps configuration**: Optional configuration for SQL backup dumps

## Examples

### Basic usage

```bash
dvs remote wizard
```

The wizard will prompt for:
- Application name (if not already configured)
- Recipe type (if not already configured)
- SSH host
- SSH user
- SSH port

### With SSH options

```bash
dvs remote wizard prod --host example.com --user deploy
```

### With automatic pull

```bash
dvs remote wizard prod --host example.com --pull
```

## Fresh Directory Setup

The wizard can be run in an empty directory to create a new application:

1. Creates the `.devspaces` configuration file
2. Creates the application config in `/config/apps/<name>/`
3. Sets up the web root folder
4. Configures the remote connection
5. Optionally pulls the data

## Detected Information

### For PrestaShop

- Config file: `app/config/parameters.php` (1.7+) or `config/settings.inc.php` (1.6)
- Database: host, user, password, name, table prefix
- Public URL: from `ps_shop_url` table
- Version: from `defines.inc.php`, `AppKernel.php`, or `composer.json`

### For WordPress

- Config file: `wp-config.php`
- Database: DB_HOST, DB_USER, DB_PASSWORD, DB_NAME
- Public URL: from WP_HOME, WP_SITEURL, or wp_options table
- Version: from `wp-includes/version.php`

## Database Engine Handling

The wizard detects the remote database engine (MariaDB or MySQL) and compares it with locally installed services.

If there's a mismatch:
1. **Install recommended service**: Installs the matching DB service
2. **Use installed service**: Uses an already installed matching service
3. **Continue anyway**: Proceed with cross-engine compatibility (may have issues)

When multiple DB services are installed, the wizard auto-selects the one matching the remote engine.

## SQL Dumps Configuration

If SQL backup dumps are available on the remote server, the wizard can configure the `[dumps]` section:

1. **Path selection**: Browse remote filesystem to select the dumps folder
2. **Pattern**: File pattern to match dumps (default: `*/*.sql*` for subdirectories)
3. **Strategy**: `latest` (auto-select newest) or `interactive` (choose each time)

## Requirements

- SSH access to the remote server (key or password authentication)
- Recipe must be `prestashop` or `wordpress`

## See Also

- [Remote Configuration](./configuration.md) - Manual configuration reference
- [Configure Command](./configure.md) - Interactive configuration (manual)
- [Pull Command](../pull.md) - Pull data from remote
