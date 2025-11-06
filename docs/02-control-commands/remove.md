# dvs remove

Uninstall and release the license.

## Description

The `remove` command completely uninstalls DevSpaces from your local machine and releases the license on the server, making it available for reuse.

## Usage

```bash
dvs remove
```

## What it does

1. Loads the existing configuration
2. Asks for confirmation
3. **Deactivates the installation on the server** (releases the license)
4. Removes local configuration and encryption keys

## Prerequisites

- A valid installation must exist
- Server must be accessible (for license release)

## Examples

```bash
# Uninstall DevSpaces
dvs remove
```

## Important Notes

- **License Release**: The command calls the server API to deactivate the installation and release the license. This makes the license available for reuse.
- **Local Cleanup**: After successful server deactivation, local configuration files and keys are removed.
- **Failure Handling**: If the API call fails (server unreachable), the local configuration is **preserved** and the command fails. This allows you to:
  - Retry `dvs remove` later when the server is accessible
  - Manually deactivate the installation via Django admin, then use `dvs clean` to remove local configuration

## Use Cases

- Uninstall DevSpaces completely
- Release a license for reuse
- Clean up a test installation

## Related Commands

- `dvs clean` - Remove local configuration without calling the API

