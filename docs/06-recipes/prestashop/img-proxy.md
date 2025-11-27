# img-proxy

The image proxy feature allows redirecting image requests to a remote domain (typically production) through an Apache reverse proxy. This is useful for development environments where you want to use production images without downloading them locally.

## How it works

When enabled, Apache intercepts image requests matching specific patterns and proxies them to the configured remote domain. The following image types are proxied:

- Direct image URLs: `/img/*` (jpg, jpeg, png, gif, webp, avif)
- SEO product URLs: PrestaShop friendly URLs for products (1 to 7 digits)
- SEO category URLs: Category images with various URL patterns
- Fancybox images: `/images_ie/*` images

Local files take precedence: if an image exists locally, it is served directly without proxying.

## Commands

### Status

Display current image proxy configuration:

```bash
dvs img-proxy status
```

Shows:
- Current domain (if set)
- Image proxy mode (enabled/disabled)

### Set domain

Configure the remote domain to proxy images from:

```bash
dvs img-proxy set-domain <domain>
```

Example:
```bash
dvs img-proxy set-domain shop.example.com
```

If the proxy is already enabled, Apache will reload automatically after setting the domain.

### Enable

Enable image proxy mode. Requires a domain to be set first:

```bash
dvs img-proxy enable
```

If no domain is configured, you'll be prompted to set one using `set-domain`.

### Disable

Disable image proxy mode:

```bash
dvs img-proxy disable
```

### Toggle

Toggle image proxy mode on/off:

```bash
dvs img-proxy toggle
```

If enabling and no domain is set, you'll be prompted to configure one first.

## Usage example

```bash
# Check current status
dvs img-proxy status

# Configure remote domain
dvs img-proxy set-domain production.example.com

# Enable proxy
dvs img-proxy enable

# Later, disable it
dvs img-proxy disable
```

## Technical details

- Apache is reloaded automatically when enabling/disabling or changing the domain
- The proxy uses SSL/TLS to connect to the remote domain
- Only image requests are proxied; local files (CSS, JS, theme images) are served normally
