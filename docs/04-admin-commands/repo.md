# dvs repo

Display or change the active registry. Displays the current repository if called without parameters.

## Usage

```bash
dvs repo [option]
```

`Option` optionnal and is one of:

- `logout`: disconnect from the registry (pro options)
- `public`: use the public registry (Solo plan)
- `beta`: use the Beta versions registry (restricted access)
- `pro`: Use the pro registry (restricted access), automatic connection for pro plans
- `sync`: Used in the context of the `dvs sync` command for registry connection, internal use

## Related commands

- `dvs sync`
