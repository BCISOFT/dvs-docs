# dvs app-folder

Get the application folder path.

## Description

The `app-folder` command returns the folder path for a given application. This is useful for shell scripts and automation that need to know where an application's files are located.

## Usage

```bash
dvs app-folder <app-name>
```

## Arguments

- `<app-name>` - The name of the application

## What it does

1. Reads the application configuration from the Docker context
2. Extracts the `APP_ROOT` value from the configuration
3. Outputs the path (intended for use in shell scripts)

## Prerequisites

- A valid installation must exist
- The application must be created and configured

## Examples

```bash
# Get folder path for an application
dvs app-folder myapp

# Use in a script
cd "$(dvs app-folder myapp)"
```

## Output

The command outputs only the path, making it suitable for use in shell scripts:

```bash
/path/to/my/application
```

## Error Handling

- If the app is not found, the command returns an error
- If `APP_ROOT` is not found in the app config, the command returns an error

