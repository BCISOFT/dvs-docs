# dvs sync

Synchronize configuration with the server.

## Description

The `sync` command synchronizes your local configuration with the server. It retrieves the latest configuration, including SSL certificates, updates your Docker registry credentials and updates your local installation.

## Usage

```bash
dvs sync
```

## Notes

- Automatically executed in the background once per day.
- Manual execution useful if network access is not permanent.

