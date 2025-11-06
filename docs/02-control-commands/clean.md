# dvs clean

Delete local configuration (without calling the API).

## Description

The `clean` command removes only the local configuration files without calling the server API. This means the license is **not released** on the server.

## Usage

```bash
dvs clean
```

## Important Notes

- **No License Release**: This command does NOT call the server API. The license remains active on the server.
- **Local Only**: Only removes configuration files on the local machine

## Related Commands

- `dvs remove` - Uninstall and release the license (calls the API)

