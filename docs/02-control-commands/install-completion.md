# dvs install-completion

Install completion for the current shell.

## Description

The `install-completion` command automatically detects your current shell and installs the appropriate completion script. It adds the necessary configuration to your shell startup file.

## Usage

```bash
dvs install-completion
```

## Supported Shells

- **bash** - Completion installed in `~/.bash_completion.d/` or `~/.local/share/bash-completion/completions/`
- **zsh** - Completion installed in `~/.zsh/completions/` or added to `fpath`
- **fish** - Completion installed in `~/.config/fish/completions/`

## Notes

- Completion is automatically installed during `dvs install`.
- Completion is automatically updated during `dvs upgrade`.
- Manual installation is rarely needed.

## Related Commands

- `dvs completion` - Generate completion script without installing

