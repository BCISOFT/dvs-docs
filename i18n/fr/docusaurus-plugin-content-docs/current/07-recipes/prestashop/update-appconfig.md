# update-appconfig

## Usage

```bash
dvs update-appconfig
```

Met à jour la configuration prestashop:
- identifiants base de données
- table `xx_shop_url`
- envoi des mails vers le service `mailpit` de `dvs`
- met à jour le `.htaccess`
- met à jour le `robots.txt`
- vidage du dossier `var/cache`

## Note

Appelé automatiquement lors d'un `dvs remotes pull`
