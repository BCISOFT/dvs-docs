---
sidebar_position: 4
title: dvs remote test
---

# dvs remote test

Test remote connection and component access.

## Syntax

```bash
dvs remote test <name>
```

## Example

```bash
dvs remote test prod
```

## Output

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

## What's Tested

| Section | Tests |
|---------|-------|
| `default` | SSH/transport connection |
| `files` | Path exists, read/write permissions |
| `database` | Database connection, credentials |
| `dumps` | Path exists, file pattern matches |
