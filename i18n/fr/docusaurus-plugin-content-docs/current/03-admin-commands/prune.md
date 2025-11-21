# dvs prune

Supprimer les bases de données, utilisateurs et configurations d'applications orphelins.

## Description

La commande `prune` identifie et supprime les ressources orphelines qui ne sont plus référencées par des applications valides :

- **Bases de données MySQL/MariaDB orphelines** : Bases de données qui ne sont référencées par aucune application installée
- **Utilisateurs SQL orphelins** : Utilisateurs MySQL/MariaDB qui ne sont référencés par aucune application installée
- **Configurations d'applications orphelines** : Dossiers de configuration d'applications dont les répertoires `APP_ROOT` ou `APP_WEB_ROOT` n'existent plus

La commande analyse toutes les configurations d'applications et vérifie que les répertoires existent. Seules les applications avec des configurations valides et des répertoires existants sont considérées comme valides.

## Utilisation

```bash
dvs prune [--dry-run]
```

### Options

- `--dry-run` : Affiche ce qui serait supprimé sans réellement supprimer quoi que ce soit ni demander de confirmation. Utile pour prévisualiser les résultats avant d'exécuter la commande prune réelle.

## Notes importantes

- **Interactif** : La commande permet de sélectionner quelles ressources supprimer via une interface de sélection multiple (sauf si `--dry-run` est utilisé)
- **Sélectif** : Vous pouvez choisir de supprimer toutes les ressources d'un coup ou sélectionner des ressources spécifiques individuellement
- **Sûr** : Seules les ressources non référencées par des applications valides sont proposées à la suppression
- **Gestion des services** : La commande démarre automatiquement les services MySQL/MariaDB s'ils ne sont pas en cours d'exécution
- **Mode dry-run** : Utilisez `--dry-run` pour prévisualiser ce qui serait supprimé sans effectuer de modifications

## Exemples

### Utilisation de base

```bash
$ dvs prune

Prune Analysis:

Orphaned databases:
  - old_app_db
  - test_db

Orphaned SQL users:
  - old_app_user
  - test_user

Select resources to delete (space to toggle, enter to confirm):
  [✓] All
  [ ] app:pipobimbo
  [ ] db:old_app_db
  [ ] db:test_db
  [ ] user:old_app_user
  [ ] user:test_user
  [ ] Cancel

Deleting orphaned resources...
Deleting database old_app_db ... ✔
Deleting database test_db ... ✔
Deleting user old_app_user ... ✔
Deleting user test_user ... ✔

Prune completed.
```

### Mode dry-run

Prévisualisez ce qui serait supprimé sans effectuer de modifications :

```bash
$ dvs prune --dry-run

Prune Analysis:

Orphaned databases:
  - old_app_db (from mysql-8.0)
  - test_db (from mysql-8.0)

Orphaned SQL users:
  - old_app_user (from mysql-8.0)
  - test_user (from mysql-8.0)

Dry-run mode: The following resources would be deleted:

Orphaned databases:
  - old_app_db (from mysql-8.0)
  - test_db (from mysql-8.0)

Orphaned SQL users:
  - old_app_user (from mysql-8.0)
  - test_user (from mysql-8.0)

No changes were made (dry-run mode).
```

## Commandes associées

- `dvs mysqlconsole` - Accès root à MySQL/MariaDB
- `dvs status` - Liste les services et applications avec leur statut

