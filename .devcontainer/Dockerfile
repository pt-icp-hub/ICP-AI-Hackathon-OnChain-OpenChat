FROM mcr.microsoft.com/devcontainers/javascript-node:18

# Install Docker CLI inside Codespace (OpenChat runs in Docker)
RUN apt-get update && apt-get install -y docker.io

# Install OpenSSL for generating private keys
RUN apt-get install -y openssl