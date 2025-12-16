# db-export

## Usage

```bash
dvs db-export [--optimized|--parallel|--compressed|--dump]
```

Exporte la base de données dans le dossier de l'application.

## Options

| Option | Description | Sortie |
|--------|-------------|--------|
| `--optimized` | Auto-détection selon la taille de la base (par défaut) | `.sql.gz` ou `.tar.gz` |
| `--parallel` | Tables séparées pour import parallèle | `.tar.gz` (multi-fichiers) |
| `--compressed` | Fichier SQL unique compressé | `.sql.gz` |
| `--dump` | Fichier SQL unique non compressé | `.sql` |

## Mode optimisé (par défaut)

Sélectionne automatiquement le meilleur mode selon la taille de la base :
- Base > 100 Mo → mode parallèle
- Base < 100 Mo → mode compressé

```bash
$ dvs db-export
Mode: compressed (database < 100 MB)
Database myapp exported to myapp-20251215-105844.sql.gz
```

## Mode parallèle

Exporte la structure de la base séparément des données (un fichier par table), permettant un import parallèle pour une restauration plus rapide des grandes bases de données.

```bash
$ dvs db-export --parallel
Mode: parallel
Database myapp exported to myapp-20251215-105844-parallel.tar.gz
```

L'archive parallèle contient :
- `__00_schema.sql` - Structure de la base (tables, index, etc.)
- `tablename.sql` - Données pour chaque table

:::note
Le mode parallèle est optimisé pour les grandes bases. Pour les petites bases, le surcoût peut le rendre plus lent que le mode compressé.
:::

## Mode compressé

Crée un dump SQL unique compressé avec gzip.

```bash
$ dvs db-export --compressed
Mode: compressed
Database myapp exported to myapp-20251215-105844.sql.gz
```

## Mode dump

Crée un fichier SQL unique non compressé.

```bash
$ dvs db-export --dump
Mode: dump
Database myapp exported to myapp-20251215-105844.sql
```

## Voir aussi

- `db-import`
