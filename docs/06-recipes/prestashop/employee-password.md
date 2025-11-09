# employee-password

Change an employee's password.

## Usage

```bash
dvs employee-password <email|id> password
```

## Examples

```bash
# List employees
$ dvs employee-list

Registered employees
====================

id   email                               firstname   lastname   profile      active   last_connection_date
1    ps821@ps821.local.devspaces.cloud   John        Doe        SuperAdmin   1

# Change password using email address
$ dvs employee-password ps821@ps821.local.devspaces.cloud newpass
Password changed with success for employee ps821@ps821.local.devspaces.cloud

# Change password using ID
$ dvs employee-password 1 newpass
Password changed with success for employee ps821@ps821.local.devspaces.cloud
```
