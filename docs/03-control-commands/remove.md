# dvs remove

Uninstall and release a DVS installation.

## Description

The `remove` command completely uninstalls DevSpaces from your local machine and releases the license on the server, making it available for reuse.

## Usage

```bash
dvs remove
```


## Important Notes

- **License Release**: The command calls the server API to deactivate the installation and release the license. This makes the license available for reuse.
- **Local Cleanup**: After successful server deactivation, local configuration files and keys are removed.
- **Failure Handling**: If the API call fails (server unreachable), the local configuration is **preserved** and the command fails. This allows you to:
  - Retry `dvs remove` later when the server is accessible
  - Manually deactivate the installation via admin, then use `dvs clean` to remove local configuration

## Related Commands

- `dvs clean` - Remove local configuration without calling the API

