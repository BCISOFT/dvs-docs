# Control commands

`dvsctl` (also accessible via `dvs`) provides commands to manage your DevSpaces installation and configuration.

## Available Commands

- **[install](install)** - Install and activate a DVS license
- **[sync](sync)** - Sync configuration with server
- **[login](login)** - Connect to DVS registry (docker login)
- **[remove](remove)** - Uninstall and release the license
- **[clean](clean)** - Delete local configuration (without calling the API)
- **[version](version)** - Display version
- **[app-folder](app-folder)** - Get the application folder path
- **[generate-wrapper](generate-wrapper)** - Generate wrapper.sh file
- **[completion](completion)** - Generate shell completion scripts
- **[install-completion](install-completion)** - Install completion for current shell
- **[upgrade](upgrade)** - Update to latest version

## Usage

All commands are accessible via the `dvs` command:

```bash
dvs <command>
```

For Docker proxy commands (admin, services, applications), use:

```bash
dvs help
```

