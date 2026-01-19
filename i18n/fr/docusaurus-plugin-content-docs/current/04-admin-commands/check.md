# dvs check

Vérifier et réparer les applications, supprimer les ressources orphelines.

## Description

La commande `check` diagnostique et corrige les problèmes de votre installation DVS :

- **Applications réparables** : Applications avec un fichier `.devspaces` manquant qui peuvent être réparées
- **Bases de données MySQL/MariaDB orphelines** : Bases de données qui ne sont référencées par aucune application installée
- **Utilisateurs SQL orphelins** : Utilisateurs MySQL/MariaDB qui ne sont référencés par aucune application installée
- **Configurations d'applications orphelines** : Dossiers de configuration d'applications dont les répertoires `APP_ROOT` ou `APP_WEB_ROOT` n'existent plus

La commande propose d'abord de réparer les problèmes corrigeables, puis identifie les ressources orphelines à nettoyer.

## Utilisation

```bash
dvs check [--dry-run]
```

### Options

- `--dry-run` : Affiche ce qui serait réparé ou supprimé sans effectuer de modifications.

## Notes importantes

- **Interactif** : La commande permet de sélectionner quelles ressources réparer ou supprimer via des invites interactives
- **Réparation en premier** : Les applications réparables sont traitées avant le nettoyage des orphelins
- **Sûr** : Seules les ressources non référencées par des applications valides sont proposées à la suppression
- **Gestion des services** : La commande démarre automatiquement les services MySQL/MariaDB s'ils ne sont pas en cours d'exécution

## Exemples

### Réparer une application avec un fichier .devspaces manquant

```bash
$ dvs check

DVS Check

[!] Repairable apps (missing .devspaces file):
  - myapp (/Users/dev/myapp)

⚠ Repair these apps by recreating .devspaces files?
  [No]  [Yes]

→ Yes
[✓] Repaired myapp

Check Analysis:

No orphaned resources found.
```

### Supprimer les bases de données orphelines

```bash
$ dvs check

DVS Check

Check Analysis:

Orphaned databases:
  - old_app_db (from mysql-8.0)

Select resources to delete (space to toggle, enter to confirm):
  [✓] All
  [ ] db:old_app_db
  [ ] Cancel

Deleting database old_app_db ... ✔

Check completed.
```

### Mode dry-run

Prévisualisez ce qui serait réparé ou supprimé :

```bash
$ dvs check --dry-run

DVS Check (dry-run)

[!] Repairable apps (missing .devspaces file):
  - myapp (/Users/dev/myapp)

[i] Dry-run: would recreate .devspaces files for these apps

Check Analysis:

Orphaned databases:
  - old_app_db (from mysql-8.0)

Dry-run mode: The following resources would be deleted:
  - old_app_db (from mysql-8.0)

No changes were made (dry-run mode).
```

## Commandes associées

- `dvs mysqlconsole` - Accès root à MySQL/MariaDB
- `dvs status` - Liste les services et applications avec leur statut
