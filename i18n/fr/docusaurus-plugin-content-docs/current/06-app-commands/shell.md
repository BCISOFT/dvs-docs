# dvs shell

Ouvre un shell dans le conteneur de l'application.

## Usage

```bash
dvs shell [OPTIONS] [bash_options...]
```

## Options

- `-u, --user <username>` - Ouvre le shell en tant qu'utilisateur spécifié (par défaut: root)

Les arguments supplémentaires sont passés directement à `/bin/bash`.

## Exemples

Ouvrir un shell en tant que root (par défaut) :

```bash
dvs shell
```

Ouvrir un shell en tant qu'utilisateur spécifique :

```bash
dvs shell -u www-data
dvs shell --user www-data
```

Exécuter une commande directement :

```bash
dvs shell -c "ls -la"
dvs shell -u www-data -c "whoami"
```

## Notes

- Le conteneur de l'application doit être en cours d'exécution
- Si l'utilisateur spécifié n'existe pas, la commande échouera
- Le shell ouvert est `/bin/bash`
- Les arguments supplémentaires après `-u/--user` sont passés à bash
