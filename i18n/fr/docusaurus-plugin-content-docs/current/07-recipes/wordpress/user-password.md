# user-password

Change le mot de passe d'un utilisateur.

## Usage

```bash
dvs user-password <email|id> password
```

## Exemples

```bash
# Liste les utilisateurs
$ dvs user-list
+----+------------+--------------+------------+---------------------+---------------+
| ID | user_login | display_name | user_email | user_registered     | roles         |
+----+------------+--------------+------------+---------------------+---------------+
| 1  | wp         | wp           | wp@dvs.sh  | 2025-09-10 10:40:30 | administrator |
+----+------------+--------------+------------+---------------------+---------------+

# Modifie le mot de passe en utilisant l'adresse mail
$ dvs user-password wp@dvs.sh newpass
Success: Updated user 1.

# Modifie le mot de passe en utilisant l'identifiant
$ dvs user-password 1 newpass
Success: Updated user 1.
```
