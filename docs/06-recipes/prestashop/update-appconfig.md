# update-appconfig

## Usage

```bash
dvs update-appconfig
```

Updates PrestaShop configuration:
- database credentials
- `xx_shop_url` table
- email sending to `dvs` `mailpit` service
- updates `.htaccess`
- updates `robots.txt`
- clears `var/cache` directory

## Note

Automatically called during `dvs remotes pull`
