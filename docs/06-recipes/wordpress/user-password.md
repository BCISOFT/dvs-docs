# user-password

Changes a user's password.

## Usage

```bash
dvs user-password <email|id> password
```

## Examples

```bash
# List users
$ dvs user-list
+----+------------+--------------+------------+---------------------+---------------+
| ID | user_login | display_name | user_email | user_registered     | roles         |
+----+------------+--------------+------------+---------------------+---------------+
| 1  | wp         | wp           | wp@dvs.sh  | 2025-09-10 10:40:30 | administrator |
+----+------------+--------------+------------+---------------------+---------------+

# Change password using email address
$ dvs user-password wp@dvs.sh newpass
Success: Updated user 1.

# Change password using user ID
$ dvs user-password 1 newpass
Success: Updated user 1.
```
