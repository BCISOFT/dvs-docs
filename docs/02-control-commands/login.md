# dvs login

Connect to DVS registry (docker login).

## Description

The `login` command authenticates with the Docker registry (Harbor) configured for your DevSpaces installation. This allows you to pull and push Docker images from the private registry.

## Usage

```bash
dvs login
```

## What it does

1. Loads your local configuration
2. Verifies that Harbor registry configuration is present
3. Executes `docker login` with your registry credentials
4. Stores the authentication in Docker's credential store

## Prerequisites

- A valid installation must exist (run `dvs install` first)
- Your plan must have access to the Docker registry
- Harbor configuration must be present in your installation

## Examples

```bash
# Login to registry
dvs login
```

## Use Cases

- Authenticate before pulling private images
- Authenticate before pushing images to the registry
- Refresh expired credentials

## Notes

- This command uses credentials stored in your DevSpaces configuration.
- The authentication is stored in Docker's credential store and persists across sessions.
- If your plan doesn't include registry access, this command will fail.

