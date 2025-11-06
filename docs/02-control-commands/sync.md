# dvs sync

Sync configuration with server.

## Description

The `sync` command synchronizes your local configuration with the server. It retrieves the latest configuration, including SSL certificates, and updates your local installation.

## Usage

```bash
dvs sync
```

## What it does

1. Checks that a configuration exists (at minimum the API key)
2. Loads encryption keys for decryption
3. Calls the server API to retrieve the latest sealed payload
4. Decrypts the payload using your private key
5. Updates local configuration files
6. Downloads and installs SSL certificates
7. Updates Docker registry login credentials if needed

## Prerequisites

- A valid installation must exist (run `dvs install` first)
- An API key must be present in the configuration
- The installation must be active on the server

## Examples

```bash
# Sync configuration
dvs sync
```

## Use Cases

- Renew SSL certificates
- Update configuration after changes on the server
- Fix license validation issues
- Recover from configuration corruption

## Notes

- This command requires an active internet connection to the DevSpaces server.
- If the sync fails, your local configuration remains unchanged.

