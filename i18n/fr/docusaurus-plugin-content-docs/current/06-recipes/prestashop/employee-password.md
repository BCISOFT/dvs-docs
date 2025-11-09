# employee-password

Change le mot de passe d'un employé.

## Usage

```bash
dvs employee-password <email|id> password
```

## Exemples

```bash
# Liste les employés
$ dvs employee-list

Registered employees
====================

id   email                               firstname   lastname   profile      active   last_connection_date
1    ps821@ps821.local.devspaces.cloud   John        Doe        SuperAdmin   1

# Modifie le mot de passe en utilisant l'adresse mail
$ dvs employee-password ps821@ps821.local.devspaces.cloud newpass
Password changed with success for employee ps821@ps821.local.devspaces.cloud

# Modifie le mot de passe en utilisant l'identifiant
$ dvs employee-password 1 newpass
Password changed with success for employee ps821@ps821.local.devspaces.cloud
```
