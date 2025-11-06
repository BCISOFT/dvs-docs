# dvs install

Install and activate a DVS license.

## Description

The `install` command sets up DevSpaces on your local machine. It performs the following steps:

1. Creates the configuration directory (`~/.config/devspaces/`)
2. Generates the `wrapper.sh` file and integrates it into your shell configuration
3. Installs shell completion scripts
4. Checks and ensures the correct admin image version
5. Configures the Docker environment (creates network, sets up helpers, etc.)
6. Launches the onboarding procedure if no configuration exists

## Usage

```bash
dvs install
```

## Onboarding Process

If no configuration is found, the command will launch an onboarding procedure:

1. Generates an x25519 key pair
2. Initializes a bootstrap session on the server
3. Displays a claim URL and code
4. **Waits up to 28 minutes** for a manager to claim the device
5. Retrieves and decrypts the sealed payload
6. Saves the configuration in `~/.config/devspaces/`

**Waiting time:**
- Polls every 3 seconds
- Maximum 28 minutes wait time
- Server session remains valid for 30 minutes
- You can exit (Ctrl+C) and restart if the claim is done in the meantime

## Environment Variables

- `DVS_API_URL` - DevSpaces API URL (default: `https://devspaces.cloud`)

## Examples

```bash
# Standard installation
dvs install

# Installation with local API
DVS_API_URL=http://localhost:8000 dvs install
```

## Notes

- If onboarding is cancelled, Docker setup is still complete. You can run `dvs install` again to complete onboarding.
- The command automatically cleans up old dvsctl images after installation.

