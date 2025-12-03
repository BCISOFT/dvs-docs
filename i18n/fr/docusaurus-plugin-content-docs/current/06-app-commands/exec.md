# dvs exec

Exécute une commande dans le conteneur de l'application.

## Usage

```bash
dvs exec [OPTIONS] <commande> [arguments...]
```

## Options

- `-u, --user <username>` - Exécute la commande en tant qu'utilisateur spécifié (par défaut: root)

## Exemples

Exécuter une commande en tant que root (par défaut) :

```bash
dvs exec ls -la
```

Exécuter une commande en tant qu'utilisateur spécifique :

```bash
dvs exec -u www-data whoami
dvs exec --user www-data php -v
```

## Notes

- Le conteneur de l'application doit être en cours d'exécution
- Si l'utilisateur spécifié n'existe pas, la commande échouera

