# dvs tunnel start

Starts a sharing tunnel for an application, making it accessible from the internet.

## Usage

```bash
dvs tunnel start
```

## Description

This command creates a secure tunnel that exposes your local application to the internet via a unique URL (e.g., `https://abc123.share.zrok.io`).

When the tunnel starts:
1. A tunnel container is created and started
2. Recipe-specific hooks are executed (e.g., WordPress URL configuration)
3. User custom hooks are executed (if defined in `/app/.dvs/hooks/`)
4. Application configuration is updated with the tunnel URL

## Example

```bash
dvs tunnel start
```

## Output

```
[i] Starting tunnel container...
[i] Waiting for tunnel container to start...
[✓] tunnel container started

Tunnel created successfully!

myapp is now accessible at: https://abc123.share.zrok.io
```

## Troubleshooting

### Registry authentication failed

If you see this error, your Docker credentials have expired:

```
[!] Registry authentication failed
[w] Try one of these commands to fix:
[w]   dvs login  - reconnect to registry
[w]   dvs sync   - refresh credentials from server
```

### Permission issues

If the tunnel container fails due to permissions:

```bash
rm -rf ~/.dvs/apps/<app_name>/zrok
dvs tunnel start
```

## See also

- [tunnel stop](tunnel-stop) - Stop the tunnel
- [tunnel status](tunnel-status) - View tunnel information
- [Custom Hooks](custom-hooks) - Execute custom scripts on tunnel events
