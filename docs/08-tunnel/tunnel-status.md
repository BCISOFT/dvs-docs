# dvs tunnel status

Displays detailed tunnel information for the active application.

## Usage

```bash
dvs tunnel status
```

## Description

Shows detailed information about the tunnel for the active application:
- Tunnel URL
- Container status
- Creation time

This information is also displayed in `dvs info` when a tunnel is active.

## Example

```bash
dvs tunnel status
```

## Output

When tunnel is active:

```
Tunnel active for myshop
Public URL: https://abc123.share.zrok.io
Mode: public
```

When no tunnel is configured:

```
No tunnel configured for myshop
```

When tunnel is inactive:

```
Tunnel inactive for myshop
```

## See also

- [tunnel start](tunnel-start) - Start a tunnel
- [tunnel stop](tunnel-stop) - Stop a tunnel
- [tunnel list](tunnel-list) - List all active tunnels
