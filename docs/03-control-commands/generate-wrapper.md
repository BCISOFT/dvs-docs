# dvs generate-wrapper

Generate wrapper.sh file.

## Description

The `generate-wrapper` command generates the `wrapper.sh` file that provides basic commands and environment variables for the shell.

## Usage

```bash
dvs generate-wrapper
```

The wrapper is automatically integrated into your shell configuration when calling `dvs install`

## Notes

- The wrapper is automatically generated during `dvs install`.
- The wrapper is automatically updated during `dvs upgrade`.
- Manual regeneration is rarely needed.

