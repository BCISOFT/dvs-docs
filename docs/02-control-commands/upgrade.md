# dvs upgrade

Update to latest version.

## Description

The `upgrade` command updates both the dvsctl binary and the admin Docker image to their latest versions. It checks for updates, downloads new versions if available, and performs necessary system updates.

## Usage

```bash
dvs upgrade
```

## What it does

1. Checks current versions (dvsctl and admin image)
2. Fetches latest versions from the server
3. Compares versions and determines if updates are needed
4. Validates license before upgrade
5. Downloads and installs new dvsctl binary if needed
6. Pulls and updates admin Docker image if needed
7. Runs internal system upgrade
8. Cleans up old images
9. Regenerates wrapper.sh
10. Updates completion scripts

## Prerequisites

- A valid installation must exist
- Internet connection to download updates
- License must be valid (validation is performed before upgrade)

## Examples

```bash
# Check and upgrade
dvs upgrade
```

## Update Process

The upgrade process is interactive:

1. Displays current and latest versions
2. Shows what will be updated
3. Asks for confirmation
4. Performs the upgrade
5. Updates related components

## Important Notes

- **License Validation**: The command validates your license before upgrading. If validation fails, it attempts to fix it with `dvs sync`.
- **Binary Update**: The dvsctl binary is updated atomically with a backup mechanism.
- **Admin Image**: The admin Docker image is updated to match the required version.
- **Shell Restart**: After upgrade, you may need to restart your shell or source your shell configuration file.

## Use Cases

- Keep DevSpaces up to date
- Get latest features and bug fixes
- Ensure compatibility with server

## Related Commands

- `dvs version` - Check current version
- `dvs sync` - Sync configuration (may fix license issues)

