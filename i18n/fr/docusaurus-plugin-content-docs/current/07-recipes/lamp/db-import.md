# db-import

## Usage

```bash
dvs db-import <fichier>
```

Importe un dump SQL ou une archive dans la base de données de l'application.

## Formats supportés

| Format | Description |
|--------|-------------|
| `.sql` | Fichier dump SQL standard |
| `.sql.gz` | Fichier SQL compressé avec gzip |
| `.zip` | Archive ZIP contenant un fichier SQL |
| `.tar.gz` | Archive compressée (export standard ou parallèle) |

## Import standard

```bash
$ dvs db-import backup.sql
Dump backup.sql imported into myapp

$ dvs db-import backup.sql.gz
Dump backup.sql.gz imported into myapp

$ dvs db-import backup.zip
Dump backup.zip imported into myapp
```

## Import parallèle

Les archives créées avec `db-export --parallel` sont automatiquement détectées et importées en utilisant un traitement parallèle pour de meilleures performances sur les grandes bases de données.

```bash
$ dvs db-import myapp-20251215-105844-parallel.tar.gz
Mode: parallel import
Extracting parallel export archive...
Importing schema...
Importing data tables...
Parallel import completed: myapp-20251215-105844-parallel.tar.gz -> myapp
```

L'import parallèle :
- Désactive les vérifications de clés étrangères pendant l'import
- Importe les tables en parallèle (8 jobs simultanés)
- Retry automatique sur les deadlocks (3 tentatives)
- Réactive les contraintes après la fin

## Note

Le chemin du fichier doit être fourni par rapport au chemin de base de l'application.

## Voir aussi

- `db-export`
