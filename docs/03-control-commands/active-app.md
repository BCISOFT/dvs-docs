# Active Application

Control which application context is used for `dvs` commands using the `DVS_ACTIVE_APP` environment variable.

## Description

The `DVS_ACTIVE_APP` environment variable determines which application's root directory (`APP_ROOT`) is mounted as `/app` in the container when running `dvs` commands. This allows you to run commands in a specific application context regardless of your current working directory.

When `DVS_ACTIVE_APP` is set, the active app name is also displayed in your shell prompt as `(dvs:app-name)` (unless disabled with `DVS_PROMPT_DISABLE`).

## Usage

Set the environment variable before running `dvs` commands:

```bash
export DVS_ACTIVE_APP=myapp
dvs start
dvs rebuild
```

To unset the active app:

```bash
unset DVS_ACTIVE_APP
```

## How It Works

When `DVS_ACTIVE_APP` is set to a valid app name:

1. DVS validates that the app exists in your configuration
2. All `dvs` commands execute in that application's context

If `DVS_ACTIVE_APP` is not set or set to an invalid app name, DVS uses your current working directory as the mount point.

## Examples

### Activate an application for a session

```bash
# Set the active app
export DVS_ACTIVE_APP=myapp

# Run commands in the app context
dvs start
dvs logs
dvs rebuild

# The prompt shows: (dvs:myapp) user@host:~/path$
```

### Make it persistent in your shell

Add to your `~/.bashrc`, `~/.zshrc`, or `~/.config/fish/config.fish`:

```bash
# Bash/Zsh
export DVS_ACTIVE_APP=myapp

# Fish
set -gx DVS_ACTIVE_APP myapp
```

### Switch between applications

```bash
# Work on app1
export DVS_ACTIVE_APP=app1
dvs start

# Switch to app2
export DVS_ACTIVE_APP=app2
dvs start
```

### Unset to use current directory

```bash
unset DVS_ACTIVE_APP
# Now dvs commands use your current working directory
```

## Behavior

- **Environment variable**: `DVS_ACTIVE_APP` is read from your shell environment
- **Validation**: DVS validates that the app exists and has a valid `APP_ROOT` before using it
- **Fallback**: If validation fails, DVS falls back to using your current working directory
- **Prompt indicator**: The active app name appears in your prompt as `(dvs:app-name)` when set

## Notes

- The variable is session-specific by default. To make it persistent, add it to your shell configuration file
- Only one app can be active at a time (the one set in `DVS_ACTIVE_APP`)
- The app must exist in your DVS configuration
- Use `dvs app-folder <name>` to get an app's folder path

## See Also

- [dvs app-folder](./app-folder.md) - Get an app's folder path
- [Prompt Customization](./prompt-customization.md) - Customize your shell prompt

