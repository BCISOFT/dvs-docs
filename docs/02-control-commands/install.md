# dvs install

Install and activate a DVS license.

## Description

The `install` command sets up DevSpaces on your local machine. It performs the following steps:

1. Creates the configuration directory
2. Generates the `wrapper.sh` file and integrates it into your shell configuration
3. Installs shell completion scripts
4. Configures the Docker environment (creates network, configures helpers, etc.)
5. Launches the onboarding procedure if the installation is incomplete

## Usage

```bash
dvs install
```

## Onboarding Process

If no configuration is found, the command will launch an onboarding procedure:

1. Generates an x25519 key pair
2. Initializes a bootstrap session on the server
3. Displays a claim URL and code
4. **Waits up to 28 minutes** for the user to click the link and connect to their account
5. Retrieves and decrypts the configuration information
6. Finalizes and activates the installation on the machine

**Waiting time:**
- The server session remains valid for 30 minutes
- You can exit (Ctrl+C) and restart if the claim is done in the meantime

## Notes

- If onboarding is cancelled, the Docker configuration is still complete. You can run `dvs install` again to complete onboarding.
- The command automatically cleans up old dvs images after installation.

