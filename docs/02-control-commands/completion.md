# dvs completion

Generate shell completion scripts.

## Description

The `completion` command generates shell completion scripts for bash, zsh, or fish. These scripts enable tab completion for dvs commands.

## Usage

```bash
dvs completion <shell>
```

## Arguments

- `<shell>` - The shell name: `bash`, `zsh`, or `fish`

## What it does

1. Generates the completion script for the specified shell
2. Outputs the script to stdout
3. The script can be saved to a file or sourced directly

## Prerequisites

- Valid shell name must be provided

## Examples

```bash
# Generate bash completion
dvs completion bash

# Generate zsh completion
dvs completion zsh

# Generate fish completion
dvs completion fish

# Save to file
dvs completion bash > ~/.dvs-completion.bash
```

## Installation

To install completion, use the `dvs install-completion` command, which automatically detects your shell and installs the appropriate script.

## Related Commands

- `dvs install-completion` - Automatically install completion for current shell

