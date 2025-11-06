# dvs-workon

Change to an application's directory
 

## Usage

```bash
dvs-workon <app-name>
```

## Arguments

- `<app-name>` - The name of the application


## Note

This command is a shortcut for:

```bash
cd "$(dvs app-folder myapp)"
```

## Error Handling

- If the application is not found, the command does nothing
