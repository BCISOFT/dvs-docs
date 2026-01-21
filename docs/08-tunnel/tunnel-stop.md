# dvs tunnel stop

Stops and removes a sharing tunnel for an application.

## Usage

```bash
dvs tunnel stop
```

## Description

This command stops the tunnel and restores the application to local-only access.

When the tunnel stops:
1. User custom hooks are executed (if defined in `/app/.dvs/hooks/`)
2. Recipe-specific hooks are executed
3. Application configuration is restored to local URL
4. Tunnel container is stopped and removed

## Example

```bash
dvs tunnel stop
```

## Output

```
[i] Deleting tunnel for app: myapp
[i] Deleting tunnel from server...
[✓] Tunnel deleted from server
[i] Cleaning up local resources...
[i]   - Stopping and removing tunnel container...
[i]   - Removing tunnel directory...
[i]   - Removing docker-compose file...
[i]   - Removing tunnel config...
[✓] Tunnel configuration successfully deleted
[i] Updating app configuration...

Tunnel stopped for app: myapp
```

## Notes

- The tunnel URL becomes immediately inaccessible after stopping
- Application remains accessible locally via its `.dvs.sh` domain
- Tunnel data is cleaned up automatically

## See also

- [tunnel start](tunnel-start) - Start a tunnel
- [tunnel status](tunnel-status) - View tunnel information
- [Custom Hooks](custom-hooks) - Execute custom scripts on tunnel events
