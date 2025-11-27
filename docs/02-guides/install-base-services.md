# Installing Base Services

This guide explains how to quickly install the essential services needed for development: a SQL database engine, Mailpit for email testing, and phpMyAdmin for database management.

## Overview

Base services are shared tools that can be used by multiple applications. The main services you'll need are:

- **SQL Database Engine**: MySQL or MariaDB for storing application data
- **Mailpit**: Email testing tool that intercepts all outgoing emails
- **phpMyAdmin**: Web-based MySQL administration tool

## Installing Services

### Step 1: Install a SQL Database Engine

First, you need to choose and install a SQL database engine. DevSpaces supports both MySQL and MariaDB.

```bash
dvs service install mysql
```

Or for MariaDB:

```bash
dvs service install mariadb
```

<!-- TODO: Add screenshot of service install command output -->

The installation process will:
- Download the Docker image
- Create the service container
- Configure the database server
- Set up default credentials

**Note**: If you don't specify a service name, DevSpaces will show an interactive menu to choose from available services.

<!-- TODO: Add screenshot of interactive service selection menu -->

### Step 2: Install Mailpit

Mailpit is automatically configured to intercept emails sent by your applications. Install it with:

```bash
dvs service install mailpit
```

<!-- TODO: Add screenshot of mailpit installation -->

Once installed, Mailpit will be available at `https://mailpit.svc.dvs.sh`.

### Step 3: Install phpMyAdmin

phpMyAdmin allows you to manage your databases through a web interface. Install it with:

```bash
dvs service install phpmyadmin
```

**Note**: phpMyAdmin will automatically detect installed SQL services and allow you to switch between them.

<!-- TODO: Add screenshot of phpMyAdmin installation -->

phpMyAdmin will be available at `https://phpmyadmin.svc.dvs.sh`.

## Verifying Installation

Check that all services are installed and running:

```bash
dvs service list
```

<!-- TODO: Add screenshot of service list output -->

## Default SQL Service

When creating applications, DevSpaces will automatically use the first installed SQL service as the default database server. If you have multiple SQL services installed, you can specify which one to use when creating an application.

## Next Steps

- Learn how to [create a PrestaShop site](/docs/guides/create-prestashop-site)
- Learn how to [create a WordPress site](/docs/guides/create-wordpress-site)
- Learn how to [access Mailpit](/docs/guides/access-mailpit)
- Learn how to [use phpMyAdmin](/docs/guides/use-phpmyadmin)

