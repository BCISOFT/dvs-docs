# Getting started

DevSpaces is a solution that simplifies the management of your local development environments with Docker.

## Prerequisites

- **Docker** installed and functional (version 24.0 or higher)
- **System**: Linux, macOS, or Windows with WSL2
- **Internet access** to download Docker images

## Quick installation

DevSpaces installation is done via a bash script:

```bash
curl -fsSL https://devspaces.cloud/setup.sh | bash
```

The script automatically installs and configures:

- an isolated docker network
- the `dvs` command to interact with the tools
- a secure download of your settings via an onboarding procedure
- access to the DVS registry according to your plan

## Initial configuration

After installation, a procedure will be triggered to associate this installation with your DevSpaces account. If you don't have a DevSpaces account, you can create one for free.

Your access must be validated within 30 minutes. If this time is not sufficient, you can restart the procedure with:

```bash
dvs install
```

## Verifying the installation

Check that everything is correctly installed:

```bash
dvs version
dvs help
```

You should see the DevSpaces version and the list of available commands.

## Getting started

Once installed, you can create your first environment. To do this, position your shell in your project folder and run:

```bash
dvs init
```

This command guides you to create your first development project.

You can also install a complete demo environment with the command:
```bash
dvs create <recipe>
```

Detailed help is displayed with the `help` command, for example:
```bash
dvs help create prestashop
```

For example, you can create a French PrestaShop 8.2.1 demo project with PHP 7.2 with the command:
```bash
dvs create prestashop -w 'www' -i 8.2.2 -p 7.2 -l fr -c FR
```

## dvsctl Commands

For detailed documentation on all available `dvsctl` commands, see the [dvsctl Commands Reference](/docs/control-commands/).

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
dvs sync
```
