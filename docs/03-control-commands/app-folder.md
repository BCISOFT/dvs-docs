# dvs app-folder

Get the application folder path.

## Description

The `app-folder` command returns the folder path for a given application. Useful in shell scripts and automation to know where an application's files are located.

## Usage

```bash
dvs app-folder <app-name>
```

## Arguments

- `<app-name>` - The name of the application


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

- If the application is not found, the command returns an error

