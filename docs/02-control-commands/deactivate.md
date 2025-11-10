# dvs deactivate

Deactivate the currently active application.

## Description

The `deactivate` command removes the active application setting. After deactivation, `dvs` commands will use your current working directory as mount point.

The prompt indicator will also be removed (after restarting your shell or sourcing the wrapper script).

## Usage

```bash
dvs deactivate
```

## See Also

- [dvs activate](./activate.md) - Activate an application
- [dvs app-folder](./app-folder.md) - Get an app's folder path
- [Prompt Customization](./prompt-customization.md) - Customize your shell prompt
