# dvs upgrade

Update the installation.

## Description

The `upgrade` command updates the CLI command, Docker images and completion scripts to their latest versions.

## Usage

```bash
dvs upgrade
```

## Examples

```bash
# Check and update
dvs upgrade
```

## Important Notes

- **License Validation**: The command validates your license before updating. If validation fails, it attempts to fix it with `dvs sync`.
- **Shell Restart**: After the update, you may need to restart your shell or source your shell configuration file.

## Related Commands

- `dvs version` - Check current version
- `dvs sync` - Synchronize configuration (may fix license issues)

