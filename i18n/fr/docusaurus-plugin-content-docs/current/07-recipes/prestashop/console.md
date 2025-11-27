# console

## Usage

```bash
dvs console [...]
```

Raccourci vers la commande `bin/console` dans le contexte de l'application.

## Exemples

```bash
$ dvs console -V
Symfony 4.4.51 (env: dev, debug: true) #StandWithUkraine https://sf.to/ukraine

$ dvs console help list
Description:
  List commands

Usage:
  list [options] [--] [<namespace>]

Arguments:
  namespace            The namespace name

Options:
      --raw            To output raw command list
      --format=FORMAT  The output format (txt, xml, json, or md) [default: "txt"]

Help:
  The list command lists all commands:

    php /var/www/html/bin/console list

  You can also display the commands for a specific namespace:

    php /var/www/html/bin/console list test

  You can also output the information in other formats by using the --format option:

    php /var/www/html/bin/console list --format=xml

  It's also possible to get raw list of commands (useful for embedding command runner):

    php /var/www/html/bin/console list --raw

$ dvs console about
 -------------------- ------------------------------------------
  Symfony
 -------------------- ------------------------------------------
  Version              4.4.51
  Long-Term Support    Yes
  End of maintenance   11/2022 Expired
  End of life          11/2023 Expired
 -------------------- ------------------------------------------
  Kernel
 -------------------- ------------------------------------------
  Type                 AppKernel
  Environment          dev
  Debug                true
  Charset              UTF-8
  Cache directory      ./var/cache/dev (4.5 MiB)
  Log directory        ./var/logs (5 KiB)
 -------------------- ------------------------------------------
  PHP
 -------------------- ------------------------------------------
  Version              8.1.33
  Architecture         64 bits
  Intl locale          en_US_POSIX
  Timezone             Europe/Paris (2025-11-09T15:04:33+01:00)
  OPcache              true
  APCu                 false
  Xdebug               false
 -------------------- ------------------------------------------


```
