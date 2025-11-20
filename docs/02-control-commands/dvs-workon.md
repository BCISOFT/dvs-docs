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

## Tip

You can combine activating an application and changing directory. For example, the bash function `dw` below allows you to perform both operations in a single command:

```bash
dw() {
  if [[ $# -ne 1 ]]; then
    echo "usage: dw <app>"
    exit 1
  fi
  local app="$1"
  export DVS_ACTIVE_APP=$app
  cd "$(dvs app-folder $app)"
}
```