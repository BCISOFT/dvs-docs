# dvs install-completion

Install completion for current shell.

## Description

The `install-completion` command automatically detects your current shell and installs the appropriate completion script. It adds the necessary configuration to your shell's startup file.

## Usage

```bash
dvs install-completion
```

## What it does

1. Detects the current shell (bash, zsh, or fish)
2. Generates the appropriate completion script
3. Installs it in the appropriate location
4. Adds configuration to your shell's startup file (`.bashrc`, `.zshrc`, or `config.fish`)

## Supported Shells

- **bash** - Completion installed in `~/.bash_completion.d/` or `~/.local/share/bash-completion/completions/`
- **zsh** - Completion installed in `~/.zsh/completions/` or added to `fpath`
- **fish** - Completion installed in `~/.config/fish/completions/`

## Prerequisites

- A supported shell must be detected
- Write permissions to shell configuration files

## Examples

```bash
# Install completion for current shell
dvs install-completion
```

## Notes

- Completion is automatically installed during `dvs install`.
- Completion is automatically updated during `dvs upgrade`.
- Manual installation is rarely needed.

## Related Commands

- `dvs completion` - Generate completion script without installing

