# dvs shell

Opens a shell in the application container.

## Usage

```bash
dvs shell [OPTIONS] [bash_options...]
```

## Options

- `-u, --user <username>` - Open the shell as the specified user (default: root)

Additional arguments are passed directly to `/bin/bash`.

## Examples

Open a shell as root (default):

```bash
dvs shell
```

Open a shell as a specific user:

```bash
dvs shell -u www-data
dvs shell --user www-data
```

Execute a command directly:

```bash
dvs shell -c "ls -la"
dvs shell -u www-data -c "whoami"
```

## Notes

- The application container must be running
- If the specified user does not exist, the command will fail
- The shell opened is `/bin/bash`
- Additional arguments after `-u/--user` are passed to bash
