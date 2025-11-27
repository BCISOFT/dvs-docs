# Permissions

This page covers common permission issues and how to resolve them when using DevSpaces.

## User Permissions

DevSpaces requires your user to have the necessary permissions to run Docker commands.

### Adding User to Docker Group

On Linux systems (including WSL2), add your user to the `docker` group:

```bash
sudo usermod -aG docker $USER
```

Log out and back in for changes to take effect.

## Docker Socket Access

If you encounter permission errors with Docker:

```bash
sudo chmod 666 /var/run/docker.sock
```

For a permanent solution, ensure your user is in the `docker` group (see above).

## File Permissions

### General Considerations

- Ensure you have read/write permissions on your project directories
- Some operations may require elevated permissions depending on your system configuration
- Check file ownership if you encounter permission errors:

```bash
ls -la /path/to/project
```

### WSL2 Specific

When using WSL2, see the [Windows WSL2](/docs/08-faq/windows-wsl2) page for specific file permission considerations when accessing Windows files.

