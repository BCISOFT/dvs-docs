# Accessing Live Logs

This guide explains how to use Live Logs to view real-time container logs from all your DevSpaces applications and services.

## Overview

Live Logs provides a centralized web interface to monitor all Docker container logs in real-time. This is extremely useful for debugging, monitoring application behavior, and quickly identifying issues across multiple containers.

Powered by [Dozzle](https://dozzle.dev/), it offers real-time log streaming, search, and multi-container viewing.

## Installing Live Logs Service

Install the livelogs service:

```bash
dvs service install livelogs
```

Once installed, the web interface is accessible at:

```
https://livelogs.svc.dvs.sh
```

## Features

### Real-time Log Streaming

- Logs are streamed in real-time via Server-Sent Events (SSE)
- No page refresh needed - new logs appear automatically
- Minimal resource usage (~4 MB memory)

### Multi-Container View

- View logs from all containers in a single interface
- Containers grouped by type: Apps, Database, Tools, Proxy
- Split-screen mode to compare logs from multiple containers
- Quick container switching via sidebar

### Search and Filter

- Fuzzy search across container names
- Regex search within logs
- Filter by log level or content

### Container Stats

- Live CPU and memory usage per container
- Quick health status overview

## Use Cases

### Debugging Application Errors

When your application throws an error:

1. Open Live Logs
2. Select your application container
3. Search for error messages or stack traces
4. View logs before and after the error to understand the context

### Monitoring Multiple Services

When running a complex stack (app + database + cache):

1. Use split-screen mode to view multiple containers
2. Correlate events across services
3. Identify cascading failures

### Quick Container Inspection

Instead of running `docker logs` or `dvs logs` repeatedly:

1. Keep Live Logs open in a browser tab
2. Switch between containers instantly
3. Use search to find specific events

## Limitations

- **No log persistence**: Logs are not stored, only real-time viewing
- **stdout/stderr only**: Cannot access file-based logs inside containers
- **No offline search**: Cannot search historical logs

For persistent log analysis, export logs with `docker logs > file.log`.

## Troubleshooting

### Interface Not Loading

If the Live Logs interface doesn't load:

1. Verify the service is running: `dvs status`
2. Start the service if needed: `dvs service start livelogs`
3. Check for browser SSL certificate warnings

### Containers Not Appearing

If some containers don't appear:

1. Verify containers are running: `docker ps`
2. Check that containers are on the DevSpaces network

### Slow Log Streaming

If logs appear delayed:

1. Check if you're behind a reverse proxy that buffers SSE
2. Reduce the number of open container tabs

## Next Steps

- Learn how to [access HTTP Log](/docs/guides/access-httplog) for API debugging
- Learn how to [access Mailpit](/docs/guides/access-mailpit) for email testing
- Learn how to [use phpMyAdmin](/docs/guides/use-phpmyadmin) for database management
