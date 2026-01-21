# Custom Tunnel Hooks

Custom hooks allow you to execute scripts automatically when a tunnel starts or stops.

## Hook Location

Create your custom hooks in the `.dvs/hooks/` folder of your application:

```
/app/.dvs/hooks/
├── tunnel.after_start.sh
└── tunnel.after_stop.sh
```

:::info Execution Context
Hooks run inside the DVS container where `/app/` is mounted to your application directory on the host. All file paths in hooks should use `/app/` as the base path.
:::

## Hook Functions

Each hook file must define a specific function:

### tunnel.after_start.sh

```bash
#!/bin/bash
# Hook executed after tunnel starts
# Receives tunnel URL as first argument

hook.tunnel.after_start() {
    local tunnel_url="$1"
    
    # Your custom code here
    echo "Tunnel started at: $tunnel_url"
}
```

### tunnel.after_stop.sh

```bash
#!/bin/bash
# Hook executed after tunnel stops

hook.tunnel.after_stop() {
    # Your custom code here
    echo "Tunnel stopped"
}
```

## Available Variables

Inside your hooks, you have access to DVS environment variables:

| Variable | Description |
|----------|-------------|
| `$APP_NAME` | Application name |
| `$APP_RECIPE` | Recipe type (wordpress, prestashop, lamp...) |
| `$APP_ROOT` | Application root path on host |
| `$DVS_DOMAIN` | DVS domain (e.g., `dvs.sh`) |

The local application domain is `$APP_NAME.$DVS_DOMAIN`.

For `tunnel.after_start`, the tunnel URL is passed as the first argument (`$1`).

## Use Cases

### Notify a Slack channel

```bash
hook.tunnel.after_start() {
    local tunnel_url="$1"
    curl -X POST -H 'Content-type: application/json' \
        --data "{\"text\":\"Tunnel available: $tunnel_url\"}" \
        "$SLACK_WEBHOOK_URL"
}
```

### Update external configuration

```bash
hook.tunnel.after_start() {
    local tunnel_url="$1"
    # Update .env file with tunnel URL
    sed -i "s|APP_URL=.*|APP_URL=$tunnel_url|" /app/.env
}

hook.tunnel.after_stop() {
    # Restore local URL
    sed -i "s|APP_URL=.*|APP_URL=https://$APP_NAME.$DVS_DOMAIN|" /app/.env
}
```

### Clear cache after tunnel change

```bash
hook.tunnel.after_start() {
    # Clear application cache
    php /app/bin/console cache:clear 2>/dev/null || true
}

hook.tunnel.after_stop() {
    php /app/bin/console cache:clear 2>/dev/null || true
}
```

## Execution Order

When starting a tunnel:
1. Tunnel container starts
2. Recipe hook executes (if defined)
3. User hook executes (`tunnel.after_start`)
4. `app.update_config()` is called

When stopping a tunnel:
1. User hook executes (`tunnel.after_stop`)
2. Recipe hook executes (if defined)
3. `app.update_config()` is called
4. Tunnel container stops

## Notes

- Hooks are optional - if the file doesn't exist, it's silently ignored
- Recipe-provided hooks run before user hooks on start, after on stop
- Use `set -e` carefully as it may interrupt the tunnel process on errors
