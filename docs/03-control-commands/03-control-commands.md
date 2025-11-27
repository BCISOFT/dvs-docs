# Control

`dvs` provides commands to manage your DevSpaces installation and configuration.

## Available Control Commands

- **[install](install)** - Install and activate a DVS license
- **[sync](sync)** - Sync configuration with server
- **[login](login)** - Connect to DVS registry (docker login)
- **[remove](remove)** - Uninstall and release the license
- **[clean](clean)** - Delete local configuration (without calling the API)
- **[version](version)** - Display version
- **[app-folder](app-folder)** - Get the application folder path
- **[active-app](active-app)** - Control active application via environment variable
- **[generate-wrapper](generate-wrapper)** - Generate wrapper.sh file
- **[completion](completion)** - Generate shell completion scripts
- **[install-completion](install-completion)** - Install completion for current shell
- **[upgrade](upgrade)** - Update to latest version
- **[check-upgrade](check-upgrade)** - Check if an update is available

## Additional Resources

- **[Prompt Customization](prompt-customization)** - Customize your shell prompt to display the active DVS application

## Usage

All commands are accessible via the `dvs` command:

```bash
dvs <command>
```

For application commands (admin, services, applications, recipes), use:

```bash
dvs help
```

