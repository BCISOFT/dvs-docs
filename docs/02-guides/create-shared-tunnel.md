# Creating a Shared Tunnel

This guide explains how to create a shared tunnel to expose your local development site to the internet, and how to delete it when no longer needed.

## Overview

Shared tunnels allow you to share your local development environment with others or access it from anywhere. DevSpaces creates secure, public tunnels for your applications.

## Prerequisites

- An active DevSpaces account with tunnel access (Subscription required)
- An application already created and running
- The application must be started: `dvs start`

## Creating a Tunnel

### Step 1: Navigate to Your Application

Make sure you're in your application directory:

```bash
cd /path/to/your/app
```

### Step 2: Start the Tunnel

Start a shared tunnel for your application:

```bash
dvs tunnel start
```

<!-- TODO: Add screenshot of tunnel start command output -->

The command will:
- Create a tunnel to your application
- Automatically reconfigure the application to work with the tunnel
- Generate a public URL
- Display the tunnel information

**Note**: When starting a tunnel, DevSpaces automatically reconfigures your application. Your browser may cache the old version, so you may need to force a refresh (Ctrl+Shift+R or Cmd+Shift+R) to see the updated configuration.

### Step 3: Access Your Shared URL

After the tunnel is created, you'll receive a public URL that looks like:

```
https://<unique-id>.share.dvsapp.sh
```

This URL is accessible from anywhere on the internet.

You can also view the tunnel URL using:

```bash
dvs info
```

The tunnel URL is displayed in the "Links" section of the output.

<!-- TODO: Add screenshot showing the public URL -->

## Viewing Tunnel Status

Check the status of your tunnel:

```bash
dvs tunnel status
```

Example output:

```
Tunnel active for <app>
Public URL: https://f17tttfb1hhf.share.dvsapp.sh
Mode: public
```

This will show:
- Tunnel status (active, stopped, error)
- Public URL
- Application name
- Mode (public)

You can also view the tunnel URL in the application information:

```bash
dvs info
```

The tunnel URL appears in the "Links" section:

```
Links
    Application  https://<app>.dvs.sh
    Backoffice   https://<app>.dvs.sh/adminQkoog8tsEr
    Tunnel       https://f17tttfb1hhf.share.dvsapp.sh
    PHP INFO     https://<app>.dvs.sh/phpinfo
    phpMyAdmin   https://phpmyadmin.svc.dvs.sh
    mailpit      https://mailpit.svc.dvs.sh
```

<!-- TODO: Add screenshot of tunnel status output -->

## Listing All Tunnels

View all active tunnels:

```bash
dvs tunnel list
```

<!-- TODO: Add screenshot of tunnel list output -->

## Stopping a Tunnel

When you no longer need the tunnel, stop it:

```bash
dvs tunnel stop
```

This will:
- Stop the tunnel
- Remove the public URL
- Clean up the tunnel resources

<!-- TODO: Add screenshot of tunnel stop command -->

**Note**: Stopping the tunnel does not affect your local application - it will continue running locally.

## Deleting a Tunnel

If you need to completely remove a tunnel (for example, if it's in an error state):

The `dvs tunnel stop` command removes the tunnel completely. If you need to force removal, you can also use:

```bash
dvs tunnel stop
```

This will delete the tunnel from both your local system and the DevSpaces server.

<!-- TODO: Add screenshot of tunnel deletion -->

## Troubleshooting

### Tunnel Creation Fails

If tunnel creation fails:

1. Verify your account has tunnel access (Subscription required)
2. Check that your application is running: `dvs start`
3. Verify network connectivity
4. Check tunnel limits in your account

### Tunnel Not Accessible

If the public URL doesn't work:

1. Check tunnel status: `dvs tunnel status`
2. Verify the application is running locally
3. Check application logs: `dvs logs`
4. Ensure the tunnel is in "active" status

### Multiple Tunnels

You can have multiple tunnels active at the same time, but only one tunnel per application.

## Security Considerations

- Shared tunnels are public - anyone with the URL can access your site
- Use tunnels only for development and testing
- Don't share tunnel URLs publicly if your site contains sensitive data
- Stop tunnels when not in use

## Next Steps

- Learn how to [create a PrestaShop site](/docs/guides/create-prestashop-site)
- Learn how to [create a WordPress site](/docs/guides/create-wordpress-site)
- Learn how to [access Mailpit](/docs/guides/access-mailpit)

