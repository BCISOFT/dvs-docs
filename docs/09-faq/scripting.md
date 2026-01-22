# Scripting & AI Integration

This page covers how to use DevSpaces in non-interactive contexts such as scripts, CI/CD pipelines, or AI-powered development tools.

## The Problem

When running DVS commands in a non-interactive context (scripts, cron jobs, AI assistants like Cursor or Claude Code), you may encounter this error:

```
the input device is not a TTY
```

This happens because DVS commands try to allocate a pseudo-TTY for interactive features, but no TTY is available in these contexts.

## Solution: DVS_NO_TTY

Set the `DVS_NO_TTY` environment variable to disable TTY allocation:

```bash
DVS_NO_TTY=1 dvs php bin/console cache:clear
```

### What it does

When `DVS_NO_TTY` is set (any non-empty value):
- Disables the `-it` flags on Docker exec commands (no TTY allocation)
- Sets `INTERACTIVE=0` (disables interactive prompts)
- Disables footer display

### Detection priority

DVS automatically detects the execution context:

| Context | TTY available | `DVS_NO_TTY` | Result |
|---------|---------------|--------------|--------|
| Interactive terminal | Yes | Not set | Full interactive mode |
| Script/pipe | No | Not set | Auto non-interactive |
| Any context | Any | Set | Forced non-interactive |

## Setting Up Aliases

For convenience, create aliases in your shell configuration (`~/.bashrc`, `~/.zshrc`):

```bash
# Standard DVS (interactive)
alias dvs='dvs'

# DVS for scripts and AI tools (non-interactive)
alias dvs-script='DVS_NO_TTY=1 dvs'
alias dvs-ai='DVS_NO_TTY=1 dvs'
```

Then reload your shell:

```bash
source ~/.zshrc  # or ~/.bashrc
```

### Usage examples

```bash
# Interactive usage (default)
dvs shell
dvs php bin/console

# Script/AI usage (non-interactive)
dvs-script php bin/console cache:clear
dvs-ai composer install
```

## AI Development Tools

### Cursor / Claude Code

When using AI assistants with limited terminal capabilities:

```bash
# In your AI tool's terminal
DVS_NO_TTY=1 dvs php bin/console cache:clear
DVS_NO_TTY=1 dvs exec npm run build
```

### CI/CD Pipelines

For automated pipelines, use `DVS_NO_TTY`:

```yaml
# GitHub Actions example
- name: Clear cache
  run: DVS_NO_TTY=1 dvs php bin/console cache:clear

# GitLab CI example
deploy:
  script:
    - DVS_NO_TTY=1 dvs composer install --no-dev
```

## Best Practices

1. **Use `--force` or `--yes`** for DVS commands that require confirmation
2. **Check exit codes** in scripts to detect failures
3. **Use `--json` output** when parsing DVS output programmatically

```bash
# Get app info as JSON
DVS_NO_TTY=1 dvs info --json | jq '.name'
```

### External tool flags

Some tools executed via DVS have their own non-interactive flags. These are **not DVS flags** but flags passed to the underlying tool:

```bash
# Composer's --no-interaction flag
DVS_NO_TTY=1 dvs composer install --no-interaction

# Symfony Console's --no-interaction flag
DVS_NO_TTY=1 dvs php bin/console doctrine:migrations:migrate --no-interaction

# Artisan's --force flag
DVS_NO_TTY=1 dvs php artisan migrate --force
```

## Troubleshooting

### Command hangs?

The command might be waiting for input from the underlying tool. Add the appropriate non-interactive flag for that tool:

```bash
# Composer
DVS_NO_TTY=1 dvs composer install --no-interaction

# Symfony/PrestaShop console
DVS_NO_TTY=1 dvs console cache:clear --no-interaction

# WP-CLI (usually non-interactive by default)
DVS_NO_TTY=1 dvs wp plugin list
```

### Need colors in output?

When `DVS_NO_TTY` is set, color output is disabled. If you need colors in a script context where a real TTY is available, don't set `DVS_NO_TTY` and let DVS auto-detect.
