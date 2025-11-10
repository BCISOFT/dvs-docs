# dvs activate

Activate an application for dvs commands.

## Description

The `activate` command sets an application as active. When an app is activated, all `dvs` commands will execute in the context of that application's root directory (`APP_ROOT`), regardless of your current working directory.

This is particularly useful when you need to run commands that require being in a specific subdirectory, as the app's root directory will be mounted as `/app` in the container.

The active app is also displayed in your shell prompt (unless disabled with `DVS_PROMPT_DISABLE`).

## Usage

```bash
dvs activate <app-name>
```

## Arguments

- `<app-name>` - The name of the application to activate

## Examples

```bash
# Activate an application
dvs activate myapp

# After activation, commands run in the app's context
dvs app start
dvs app rebuild
```

## Behavior

When an app is activated:

- The shell prompt displays `(dvs:app-name)` to indicate the active app
- All `dvs` commands execute in the app's root directory context

## Notes

- Only one app can be active at a time. Activating a new app replaces the previous one.
- Use `dvs deactivate` to deactivate the current app and return to normal behavior.

## See Also

- [dvs deactivate](./deactivate.md) - Deactivate the active app
- [dvs app-folder](./app-folder.md) - Get an app's folder path
- [Prompt Customization](./prompt-customization.md) - Customize your shell prompt
