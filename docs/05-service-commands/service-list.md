# dvs service list

List all available services and their status.

## Usage

```bash
dvs service list [--json]
```

## Options

- `--json` - Output in JSON format for automation and scripts

## Output

The command displays all available services with their installation status:
- `[ ✔ ]` - Installed and running
- `[ ⚠ ]` - Installed but stopped
- `[   ]` - Not installed

## JSON Output

```json
{
  "services": [
    {
      "name": "mysql",
      "status": "running",
      "installed": true,
      "url": "https://mysql.svc.dvs.sh"
    },
    {
      "name": "mailpit",
      "status": "not_installed",
      "installed": false,
      "url": ""
    }
  ]
}
```

## Example

```bash
$ dvs service list

Available services:
  [ ✔ ]  mysql       https://mysql.svc.dvs.sh
  [ ⚠ ]  mariadb     
  [   ]  mailpit     
  [   ]  phpmyadmin  
```

