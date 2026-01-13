---
sidebar_position: 4
title: dvs remote test
---

# dvs remote test

Tester la connexion au remote et l'accès aux composants.

## Syntaxe

```bash
dvs remote test <name>
```

## Exemple

```bash
dvs remote test prod
```

## Sortie

```
Testing remote 'prod'...

[default] SSH Connection
  Host: prod.example.com:22
  User: deploy
  Connection: ✓ OK

[files] File Access
  Path: /var/www/myapp
  Read: ✓ OK
  Write: ✓ OK

[database] Database Access
  Host: localhost
  Database: myapp_prod
  Connection: ✓ OK
  
All tests passed.
```

## Ce qui est testé

| Section | Tests |
|---------|-------|
| `default` | Connexion SSH/transport |
| `files` | Chemin existe, permissions lecture/écriture |
| `database` | Connexion base, credentials |
| `dumps` | Chemin existe, pattern de fichiers correspond |
