# auto-login

## Description

Generates a one-time URL for instant PrestaShop back-office access without entering credentials.

## Usage

```bash
dvs auto-login [employee_id]
```

## Arguments

| Argument | Description |
|----------|-------------|
| `employee_id` | Optional. PrestaShop employee ID to log in as. Defaults to last used ID or 1. |

## Examples

```bash
# Generate auto-login URL for default employee
dvs auto-login

# Generate auto-login URL for employee ID 2
dvs auto-login 2
```

## Output

```
[✔] Auto-login URL generated for employee ID 1
https://mysite.dvs.sh/adminXXX/?dvs_autologin=abc123...
```

## Security

- Token is single-use (deleted after successful login)
- Token is 64 characters (256 bits) cryptographically random
- Timing-safe comparison prevents timing attacks

## Notes

- The employee ID is remembered for subsequent calls
- Works with DVS UI for graphical access
- Requires the application to be running

