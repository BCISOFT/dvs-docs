# Windows WSL2

This page covers specific considerations when using DevSpaces on Windows with WSL2.

## Performance

### File System Performance

When working with WSL2, file system performance can be impacted when accessing Windows files from within WSL2. For optimal performance:

- **Store your project files in the WSL2 file system** (`/home/username/projects/`) rather than in the Windows file system (`/mnt/c/...`)
- The WSL2 file system (`ext4`) provides significantly better I/O performance than accessing Windows files via `/mnt/c/`
- Docker volumes should also be stored within the WSL2 file system when possible

### Memory and CPU Allocation

WSL2 uses a virtual machine with configurable resources:

- Edit `.wslconfig` in your Windows user home directory (`C:\Users\<username>\.wslconfig`)
- Configure memory and CPU limits:

```ini
[wsl2]
memory=8GB
processors=4
```

Restart WSL2 after making changes:

```bash
wsl --shutdown
```

### Docker Desktop Settings

If using Docker Desktop on Windows:

- Ensure WSL2 integration is enabled in Docker Desktop settings
- Allocate sufficient resources to Docker Desktop (Settings → Resources)
- Consider using Docker directly in WSL2 instead of Docker Desktop for better performance

## Rights

### File Permissions

When accessing files from Windows (`/mnt/c/...`), be aware that:

- File permissions may differ from native Linux files
- Some operations may require elevated permissions
- It's recommended to work within the WSL2 file system (`/home/...`) to avoid permission issues

For general permission issues, see the [Permissions](/docs/08-faq/permissions) page.

### Windows Firewall and Antivirus

Windows Defender or other antivirus software may interfere with WSL2 networking:

- Add WSL2 network interfaces to firewall exceptions if needed
- Consider excluding WSL2 directories from antivirus real-time scanning for better performance

## Git

### File Mode Changes

When working with Git repositories in WSL2 that are also accessed from Windows, you may encounter file mode changes in Git:

```
old mode 100755
new mode 100644
```

This happens because Windows and WSL2 handle file permissions differently. To prevent Git from tracking these permission changes, disable file mode tracking:

```bash
git config core.filemode false
```

This setting applies to the current repository. To set it globally for all repositories:

```bash
git config --global core.filemode false
```

