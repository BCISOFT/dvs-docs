# Prompt Customization

Customize your shell prompt to display the active DVS application.

## Overview

When you activate an application with `dvs activate <app>`, DVS automatically adds an indicator to your shell prompt showing the active app name: `(dvs:app-name)`.

This indicator is compatible with most shell configurations and custom prompts (OhMyZsh, Starship, etc.).

## Automatic Prompt Integration

The prompt indicator is automatically added by the DVS wrapper script (`~/.config/devspaces/helpers/wrapper.sh`) when:

1. An app is activated (`dvs activate <app>`)
2. The `DVS_PROMPT_DISABLE` environment variable is not set to `1`

The integration uses shell hooks to avoid breaking custom prompts:

- **Bash**: Uses `PROMPT_COMMAND` hook
- **Zsh**: Uses `precmd` hook via `add-zsh-hook`
- **Fish**: Wraps the `fish_prompt` function

## Disabling the Prompt Indicator

To disable the automatic prompt indicator, set the `DVS_PROMPT_DISABLE` environment variable:

```bash
export DVS_PROMPT_DISABLE=1
```

To re-enable it:

```bash
unset DVS_PROMPT_DISABLE
```

You can also add this to your shell configuration file to make it permanent:

```bash
# In ~/.bashrc, ~/.zshrc, or ~/.config/fish/config.fish
export DVS_PROMPT_DISABLE=1
```

## Custom Prompt Integration

### Starship

For a more integrated experience with Starship, you can add a custom module to your `~/.config/starship.toml`:

```toml
[custom.dvs]
command = "cat ~/.config/devspaces/config 2>/dev/null | grep '^DVS_ACTIVE_APP=' | cut -d'=' -f2"
when = "test -f ~/.config/devspaces/config"
format = "[$symbol($output )]($style)"
symbol = "🅐 "
style = "bold green"
```

This will display the active app name with a custom symbol and styling that matches your Starship theme.

### OhMyZsh

For OhMyZsh themes, you can customize the prompt by adding to your `~/.zshrc`:

```bash
# DVS app indicator for OhMyZsh
_dvs_prompt_app() {
    if [ -f ~/.config/devspaces/config ]; then
        source ~/.config/devspaces/config
        if [ -n "$DVS_ACTIVE_APP" ]; then
            echo "%F{green}(dvs:$DVS_ACTIVE_APP)%f "
        fi
    fi
}

# Add to your theme's prompt (example for robbyrussell theme)
# PROMPT='$(_dvs_prompt_app)'$PROMPT
```

Or integrate it into a custom theme function that's called by your theme.

### Other Custom Prompts

For other custom prompt systems, you need to read the active app dynamically each time the prompt is displayed. Here are examples for different shells:

**Bash:**

```bash
# Function to get active app (called before each prompt)
_dvs_get_active_app() {
    if [ -f ~/.config/devspaces/config ]; then
        # Read DVS_ACTIVE_APP from config file
        DVS_ACTIVE_APP=$(grep '^DVS_ACTIVE_APP=' ~/.config/devspaces/config 2>/dev/null | cut -d'=' -f2)
        if [ -n "$DVS_ACTIVE_APP" ]; then
            echo "(dvs:$DVS_ACTIVE_APP) "
        fi
    fi
}

# Add to PROMPT_COMMAND to update prompt dynamically
PROMPT_COMMAND='DVS_APP_INDICATOR=$(_dvs_get_active_app); '"$PROMPT_COMMAND"

# Use in your prompt
PS1='$DVS_APP_INDICATOR'"$PS1"
```

**Zsh:**

```bash
# Function to get active app (called before each prompt)
_dvs_get_active_app() {
    if [ -f ~/.config/devspaces/config ]; then
        DVS_ACTIVE_APP=$(grep '^DVS_ACTIVE_APP=' ~/.config/devspaces/config 2>/dev/null | cut -d'=' -f2)
        if [ -n "$DVS_ACTIVE_APP" ]; then
            echo "%F{green}(dvs:$DVS_ACTIVE_APP)%f "
        fi
    fi
}

# Add to precmd hook
autoload -Uz add-zsh-hook
add-zsh-hook precmd _dvs_update_prompt
_dvs_update_prompt() {
    DVS_APP_INDICATOR=$(_dvs_get_active_app)
}

# Use in your prompt
PROMPT='$DVS_APP_INDICATOR'"$PROMPT"
```

**Fish:**

```fish
# Function to get active app
function _dvs_get_active_app
    if test -f ~/.config/devspaces/config
        set -l active_app (grep '^DVS_ACTIVE_APP=' ~/.config/devspaces/config 2>/dev/null | cut -d'=' -f2)
        if test -n "$active_app"
            echo -n "(dvs:$active_app) "
        end
    end
end

# Use in fish_prompt
function fish_prompt
    echo -n (_dvs_get_active_app)
    # ... rest of your prompt
end
```

**Important:** The key is to read the config file dynamically each time the prompt is displayed, not just once at shell startup. This ensures the indicator updates immediately when you run `activate` or `deactivate`.

## Environment Variable

### DVS_PROMPT_DISABLE

Controls whether the automatic prompt indicator is displayed.

- **Default**: `0` (prompt indicator enabled)
- **Values**: 
  - `0` or unset: Prompt indicator is shown when an app is active
  - `1`: Prompt indicator is disabled

**Example:**

```bash
# Disable prompt indicator
export DVS_PROMPT_DISABLE=1

# Re-enable prompt indicator
unset DVS_PROMPT_DISABLE
# or
export DVS_PROMPT_DISABLE=0
```

## Updating the Prompt

After activating or deactivating an app, the prompt indicator updates automatically. However, if you don't see the change:

1. **Restart your shell** (open a new terminal)
2. **Or reload the wrapper script:**
   ```bash
   source ~/.config/devspaces/helpers/wrapper.sh
   ```

## See Also

- [dvs activate](./activate.md) - Activate an application
- [dvs deactivate](./deactivate.md) - Deactivate the active app
