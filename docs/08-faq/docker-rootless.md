# Docker Rootless

## Current Status

DevSpaces is **not currently tested** with Docker rootless mode.

## What is Docker Rootless?

Docker rootless mode allows running the Docker daemon and containers as a non-root user, providing enhanced security by avoiding the need for root privileges.

## Compatibility

While DevSpaces may work with Docker rootless in some scenarios, it has not been tested or validated in this configuration. You may encounter:

- Permission issues with Docker socket access
- Problems with network configuration
- Volume mounting issues
- Service startup failures

## Recommendations

For the best experience and support, we recommend using Docker in the standard (root) mode. If you require rootless Docker for security reasons, please be aware that:

- DevSpaces functionality is not guaranteed
- Issues encountered may not be supported
- Some features may not work as expected

## Future Support

Support for Docker rootless mode may be added in future releases. If you need this feature, please contact our support team.

