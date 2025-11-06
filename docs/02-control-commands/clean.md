# dvs clean

Delete local configuration (without calling the API).

## Description

The `clean` command removes only the local configuration files without calling the server API. This means the license is **not released** on the server.

## Usage

```bash
dvs clean
```

## What it does

1. Asks for confirmation
2. Removes only the local configuration directory (`~/.config/devspaces/`)
3. **Does NOT call the API** (does not release the license on the server)

## Prerequisites

- Local configuration must exist

## Examples

```bash
# Clean local configuration
dvs clean
```

## Use Cases

- `dvs remove` failed but you manually deactivated the installation via Django admin
- Permission errors during automatic cleanup
- Cleanup after testing
- Remove configuration without releasing the license

## Important Notes

- **No License Release**: This command does NOT call the server API. The license remains active on the server.
- **Local Only**: Only removes files in `~/.config/devspaces/`.
- **Confirmation Required**: The command asks for confirmation before deletion.

## Related Commands

- `dvs remove` - Uninstall and release the license (calls the API)

