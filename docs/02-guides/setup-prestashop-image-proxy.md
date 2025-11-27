# Setting Up PrestaShop Image Proxy

This guide explains how to set up and configure the image proxy feature for PrestaShop, which allows you to serve images from a remote domain through your local development environment.

## Overview

The image proxy feature in PrestaShop allows you to proxy images from a production or staging server to your local development environment. This is useful when you want to work with real product images without downloading them all locally.

## Prerequisites

- A PrestaShop application created with DevSpaces
- Access to the remote domain containing the images you want to proxy

## Checking Image Proxy Status

First, check the current status of the image proxy:

```bash
dvs img-proxy status
```

This will show whether the image proxy is enabled or disabled.

<!-- TODO: Add screenshot of img-proxy status output -->

## Enabling Image Proxy

### Step 1: Set the Domain

Before enabling the image proxy, you need to specify the remote domain:

```bash
dvs img-proxy set-domain example.com
```

Replace `example.com` with the domain of your production or staging server.

<!-- TODO: Add screenshot of set-domain command -->

### Step 2: Enable the Proxy

Enable the image proxy:

```bash
dvs img-proxy enable
```

This will:
- Configure Apache to proxy image requests
- Reload the Apache configuration
- Start proxying images from the specified domain

<!-- TODO: Add screenshot of enable command output -->

## Disabling Image Proxy

To disable the image proxy:

```bash
dvs img-proxy disable
```

This will stop proxying images and serve local images only.

<!-- TODO: Add screenshot of disable command output -->

## Toggling Image Proxy

You can quickly toggle the image proxy on/off:

```bash
dvs img-proxy toggle
```

This will switch between enabled and disabled states.

<!-- TODO: Add screenshot of toggle command output -->

## Changing the Domain

To change the proxy domain, use the `set-domain` command again:

```bash
dvs img-proxy set-domain newdomain.com
```

The configuration is automatically reloaded after changing the domain. The change is applied immediately.

## How It Works

When the image proxy is enabled:

1. Requests for images from the `/img/` directory are intercepted
2. The request is forwarded to the remote domain you specified
3. The image is fetched and served to your local site
4. Subsequent requests may be cached locally

This allows you to:
- Work with production images without downloading them
- Test with real product images
- Reduce local storage requirements

## Verifying the Configuration

After enabling, verify that images are being proxied:

1. Check the status: `dvs img-proxy status`
2. Visit your PrestaShop site and view product images
3. Check the browser network tab to see if images are being loaded from the proxy
4. Check proxy logs: `dvs logs` to see proxy activity

<!-- TODO: Add screenshot of browser network tab showing proxied images -->

## Troubleshooting

### Images Not Loading

If images don't load after enabling the proxy:

1. Verify the domain is correct: `dvs img-proxy status`
2. Check that the remote domain is accessible
3. Verify Apache configuration was reloaded
4. Check application logs: `dvs logs`

### Domain Not Set

If you try to enable without setting a domain:

```bash
dvs img-proxy enable
# Error: domain not provided and not set
```

You must set the domain first:

```bash
dvs img-proxy set-domain example.com
dvs img-proxy enable
```

### Configuration Not Applied

If changes don't seem to apply:

1. Check the status: `dvs img-proxy status`
2. Force a browser refresh (Ctrl+Shift+R or Cmd+Shift+R) to clear cached images
3. Try toggling: `dvs img-proxy toggle`
4. Check Apache logs: `dvs logs`
5. Restart the application: `dvs restart`

## Best Practices

- Use image proxy only when needed (development/testing)
- Disable it when working with local images
- Set the domain to match your staging/production environment
- Test image loading after enabling the proxy

## Next Steps

- Learn how to [create a PrestaShop site](/docs/guides/create-prestashop-site)
- Learn how to [access Mailpit](/docs/guides/access-mailpit)
- Learn how to [use phpMyAdmin](/docs/guides/use-phpmyadmin)

