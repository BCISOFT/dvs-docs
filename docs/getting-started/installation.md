# Installation

DevSpaces is a CLI solution that simplifies the management of your local development environments with Docker.

## Prerequisites

- **Docker** installed and functional (version 24.0 or higher)
- **System**: Linux, macOS, or Windows with WSL2
- **Internet access** to download Docker images

## Quick installation

DevSpaces installation is done via a bash script:

```bash
curl -fsSL https://devspaces.cloud/setup.sh | bash
```

The script automatically installs:

- The `ds` CLI (Docker alias to launch environments)
- The `dvsctl` onboarding tools
- Development environment recipes

## Initial configuration

After installation, log in to your DevSpaces account:

```bash
ds login
```

This command will:

1. Ask for your DevSpaces credentials
2. Download SSL certificates for your local services
3. Configure your local environment

## Verifying the installation

Check that everything is correctly installed:

```bash
ds version
ds help
```

You should see the DevSpaces version and the list of available commands.

## Getting started

Once installed, you can create your first environment:

```bash
ds init
```

This command guides you to create your first development project.

Refer to the rest of the documentation for more details.

## Troubleshooting

### Docker is not installed

Install Docker from [docker.com](https://www.docker.com/get-started).

### Permission error

On Linux, you may need to add your user to the docker group:

```bash
sudo usermod -aG docker $USER
```

Log out and back in for the changes to take effect.

### SSL certificate issues

If you encounter SSL certificate issues:

```bash
dvsctl certificates --renew
```

This forces the renewal of SSL certificates.

