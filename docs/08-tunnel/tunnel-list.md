# dvs tunnel list

Lists all active tunnels on this DVS installation.

## Usage

```bash
dvs tunnel list
```

## Description

Displays a table of all currently active tunnels across all applications, showing:
- Application name
- Tunnel URL
- Status

## Example

```bash
dvs tunnel list
```

## Output

```
Tunnels:

  App: myshop
  URL: https://abc123.share.zrok.io
  Status: active
  Mode: public

  App: blog
  URL: https://def456.share.zrok.io
  Status: active
  Mode: public
```

If no tunnels are active:

```
Tunnels:

No tunnels
```

## See also

- [tunnel start](tunnel-start) - Start a tunnel
- [tunnel stop](tunnel-stop) - Stop a tunnel
- [tunnel status](tunnel-status) - View tunnel details for active app
