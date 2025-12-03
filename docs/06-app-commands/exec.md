# dvs exec

Executes a command in the application container.

## Usage

```bash
dvs exec [OPTIONS] <command> [arguments...]
```

## Options

- `-u, --user <username>` - Execute the command as the specified user (default: root)

## Examples

Execute a command as root (default):

```bash
dvs exec ls -la
```

Execute a command as a specific user:

```bash
dvs exec -u www-data whoami
dvs exec --user www-data php -v
```

## Notes

- The application container must be running
- If the specified user does not exist, the command will fail

