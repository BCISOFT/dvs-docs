# macOS

This page covers specific considerations when using DevSpaces on macOS.

## Performance

### Recommended: Use OrbStack

For optimal performance on macOS, we recommend using **OrbStack** instead of Docker Desktop. OrbStack is a fast and lightweight alternative that provides significantly better performance.

#### Why OrbStack?

- **Faster file system I/O**: OrbStack uses VirtioFS for file sharing, providing 2-10x faster I/O operations, reaching 75-95% of native macOS file system performance
- **Dynamic memory management**: OrbStack automatically adjusts memory usage based on container needs, freeing unused memory for other applications
- **Lower resource consumption**: Designed to be lightweight, OrbStack minimizes CPU and battery usage
- **Faster startup**: Near-instant container startup times compared to Docker Desktop

#### Installation

Install OrbStack using Homebrew:

```bash
brew install orbstack
```

Or download it from the [official website](https://orbstack.dev).

Once installed, OrbStack replaces Docker Desktop and is compatible with existing Docker commands, making the transition seamless.

### Docker Desktop Alternative

If you prefer to use Docker Desktop:

- Allocate sufficient resources in Docker Desktop settings (Settings → Resources)
- Ensure you have enough memory and CPU allocated for your development containers
- Consider increasing the disk image size if you work with large projects

## File Permissions

macOS handles file permissions differently from Linux. If you encounter permission issues:

- Ensure your user has read/write permissions on project directories
- Some operations may require elevated permissions depending on your system configuration

For general permission issues, see the [Permissions](/docs/08-faq/permissions) page.

