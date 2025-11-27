# Using phpMyAdmin

This guide explains how to access and use phpMyAdmin to manage your databases, including how to switch between multiple SQL servers.

## Overview

phpMyAdmin is a web-based MySQL administration tool that allows you to manage databases, tables, and data through an intuitive interface. When installed, it automatically detects all installed SQL services (MySQL, MariaDB) and allows you to switch between them.

## Accessing phpMyAdmin

Once phpMyAdmin is installed, it's accessible at:

```
https://phpmyadmin.svc.dvs.sh
```

Or using your configured domain:

```
https://phpmyadmin.svc.<your-domain>
```

<!-- TODO: Add screenshot of phpMyAdmin login page -->

## Login

phpMyAdmin will automatically use the credentials from your installed SQL services. You typically don't need to enter credentials manually - DevSpaces handles authentication automatically.

<!-- TODO: Add screenshot of phpMyAdmin main interface after login -->

## Switching Between SQL Servers

If you have multiple SQL services installed (e.g., both MySQL and MariaDB), phpMyAdmin allows you to switch between them.

### Using the Server Selection Dropdown

1. Look for the server selection dropdown in the top-left or top-right of the phpMyAdmin interface
2. Click on it to see all available SQL servers
3. Select the server you want to use

<!-- TODO: Add screenshot of server selection dropdown -->

### Available Servers

phpMyAdmin automatically detects:
- All installed MySQL services (mysql-8.0, etc.)
- All installed MariaDB services (mariadb-10.5, etc.)

Each server is listed with its service name and version.

<!-- TODO: Add screenshot showing multiple servers in the list -->

## Managing Databases

### Viewing Databases

The left sidebar shows all databases available on the selected server. Click on a database name to expand it and see its tables.

<!-- TODO: Add screenshot of database list -->

### Creating a Database

1. Click on "New" in the left sidebar
2. Enter a database name
3. Choose collation (optional)
4. Click "Create"

<!-- TODO: Add screenshot of database creation form -->

### Browsing Tables

Click on any database to see its tables. You can then:
- Browse table data
- Edit records
- Run SQL queries
- Export/import data

<!-- TODO: Add screenshot of table view -->

## Running SQL Queries

### SQL Tab

1. Select a database from the left sidebar
2. Click on the "SQL" tab at the top
3. Enter your SQL query
4. Click "Go" to execute

<!-- TODO: Add screenshot of SQL query interface -->

### Query Results

Results are displayed in a table format. You can:
- Edit results directly (if enabled)
- Export results
- View execution time and affected rows

<!-- TODO: Add screenshot of query results -->

## Common Tasks

### Viewing Application Data

To view data from your applications:

1. Select the appropriate SQL server
2. Find the database named after your application
3. Browse tables to see the data structure

<!-- TODO: Add screenshot of application database -->

### Exporting Data

1. Select a database
2. Click on "Export" tab
3. Choose export method (Quick or Custom)
4. Select tables to export
5. Click "Go" to download

<!-- TODO: Add screenshot of export interface -->

### Importing Data

1. Select a database
2. Click on "Import" tab
3. Choose your SQL file
4. Click "Go" to import

<!-- TODO: Add screenshot of import interface -->

## Troubleshooting

### Cannot Access phpMyAdmin

If you can't access phpMyAdmin:

1. Verify the service is installed: `dvs service list`
2. Check service status: `docker ps | grep phpmyadmin`
3. Verify the URL matches your configured domain

### Server Not Listed

If a SQL server doesn't appear in the list:

1. Ensure the SQL service is installed: `dvs service install mysql` (or mariadb)
2. Check service status: `dvs status`
3. Refresh the phpMyAdmin page

### Connection Errors

If you see connection errors:

1. Check that the SQL service is running
2. Verify credentials are correct (usually handled automatically by DevSpaces)
3. Check application logs: `dvs logs`

## Next Steps

- Learn how to [access Mailpit](/docs/guides/access-mailpit) for email testing
- Learn how to [create a PrestaShop site](/docs/guides/create-prestashop-site)
- Learn how to [create a WordPress site](/docs/guides/create-wordpress-site)

