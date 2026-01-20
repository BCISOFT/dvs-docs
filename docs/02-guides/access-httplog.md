# Accessing HTTP Log

This guide explains how to use HTTP Log to inspect outgoing HTTP/HTTPS requests from your applications.

## Overview

HTTP Log is a development tool that intercepts and displays all outgoing HTTP/HTTPS requests made by your applications. This is extremely useful for debugging API calls, webhooks, and external service integrations.

Powered by [mitmproxy](https://mitmproxy.org/), it provides a real-time web interface to monitor all outbound traffic.

## Installing HTTP Log Service

First, install the httplog service:

```bash
dvs service install httplog
```

Once installed, the web interface is accessible at:

```
https://httplog.svc.dvs.sh
```

## Enabling HTTP Log for an Application

HTTP logging must be enabled per application:

```bash
cd ~/projects/my-app
dvs httplog enable
```

This will:
1. Configure the application to route HTTP traffic through the proxy
2. Install the mitmproxy CA certificate for HTTPS interception
3. Restart the application container

## Disabling HTTP Log

To disable HTTP logging for an application:

```bash
dvs httplog disable
```

## Viewing HTTP Traffic

### Request List

The mitmproxy web interface shows all intercepted requests:
- Request method (GET, POST, etc.)
- URL
- Response status code
- Response size
- Duration

### Request Details

Click on any request to see:
- Full request headers
- Request body (for POST/PUT)
- Response headers
- Response body
- Timing information

## Commands Reference

| Command | Description |
|---------|-------------|
| `dvs httplog enable` | Enable HTTP logging for current app |
| `dvs httplog disable` | Disable HTTP logging for current app |
| `dvs httplog status` | Show HTTP logging status for current app |
| `dvs httplog list` | List all apps with their HTTP logging status |
| `dvs httplog tail` | Live tail HTTP traffic logs in terminal |

## Use Cases

### Debugging API Integrations

When your application makes calls to external APIs (Stripe, PayPal, shipping providers, etc.), you can see:
- Exact request payload sent
- Response received
- Any errors or unexpected responses

### Webhook Verification

When testing webhooks, verify that your application sends the correct payload to external services.

### Performance Analysis

Identify slow external API calls that might be affecting your application's performance.

## Frontend + Backend Scenario

If you have multiple applications (e.g., frontend and backend), you can enable HTTP logging only on the backend to reduce noise:

```bash
cd ~/projects/backend
dvs httplog enable

# Frontend remains without HTTP logging
cd ~/projects/frontend
# (no httplog enable needed)
```

## Troubleshooting

### Requests Not Appearing

If HTTP requests don't appear in the interface:

1. Verify httplog service is running: `dvs status`
2. Verify HTTP logging is enabled for your app: `dvs httplog status`
3. Restart your application: `dvs restart`

### SSL Certificate Errors

If your application reports SSL certificate errors when HTTP logging is enabled:

1. Ensure the application container was restarted after enabling
2. Check that the mitmproxy CA was properly installed

### Service Unavailable

If the httplog service stops, applications with HTTP logging enabled will fail to make outbound requests. To fix:

```bash
dvs service start httplog
```

Or disable HTTP logging for affected apps:

```bash
dvs httplog disable
```

## Next Steps

- Learn how to [access Mailpit](/docs/guides/access-mailpit) for email testing
- Learn how to [use phpMyAdmin](/docs/guides/use-phpmyadmin) for database management
