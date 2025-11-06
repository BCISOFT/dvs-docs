# dvs generate-wrapper

Generate wrapper.sh file.

## Description

The `generate-wrapper` command generates the `wrapper.sh` file that provides the `dvs` command alias and integrates DevSpaces into your shell environment.

## Usage

```bash
dvs generate-wrapper
```

## What it does

1. Generates the `wrapper.sh` file in the configuration directory
2. The wrapper provides the `dvs` command that proxies to the dvsctl binary
3. The wrapper is automatically integrated into your shell configuration during `dvs install`

## Prerequisites

- Configuration directory must exist or be creatable

## Examples

```bash
# Generate wrapper
dvs generate-wrapper
```

## Use Cases

- Regenerate wrapper after manual changes
- Fix wrapper corruption
- Update wrapper after system changes

## Notes

- The wrapper is automatically generated during `dvs install`.
- The wrapper is automatically updated during `dvs upgrade`.
- Manual regeneration is rarely needed.

