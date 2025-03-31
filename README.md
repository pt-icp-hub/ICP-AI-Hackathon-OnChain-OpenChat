# 📬🤖 OnChain AI with OpenChat

Welcome to the **ICP AI Hackathon - OpenChat Integration Template**! This repository showcases how to build an **AI-powered bot** for [OpenChat](https://oc.app), a decentralized messaging dApp on the Internet Computer. This bot runs as a service that integrates with the OpenChat bot SDK and connects to your local OpenChat instance.

This template is based on the official [open-chat-bots](https://github.com/open-chat-labs/open-chat-bots) repository developed by the OpenChat team.

---

## ✨ Overview

- 💬 **Create a custom messaging bot** using the OpenChat SDK
- 🧠 **Integrate OpenAI or any LLM** to power your bot’s replies
- 🧪 **Run and test locally** using OpenChat’s Docker image
- 🔐 **Use your own bot identity** via EC key generation
- 🌍 **Connect to the IC backend** to fetch data or trigger actions

---

## 🚀 Getting Started

### 1. Prerequisites

- Docker (make sure Docker daemon is running)
- Node.js (>= v18)
- PNPM or NPM
- OpenAI API Key (optional for LLM integration)

---

### 2. Run OpenChat Locally

Pull and run the OpenChat container:

```bash
docker info  # Check that Docker is running
docker run --platform linux/amd64 -d -p 5001:80 -p 8080:8080 --name open-chat docker run --platform linux/amd64 -d -p 5001:80 -p 8080:8080 --name open-chat openchatlabs/open-chat:latest@sha256:78bd4571eab0066dbec01dc3a7cab218b76f65061a6b5976c095242f4eac20c6
```

Once it’s running, access OpenChat UI via:
```
http://localhost:5001
```

---

### 3. Deploy the Bot

```bash
./open-chat-bots/scripts/deploy_echo_bot.sh
```

Once the bot is deployed, its description will be available at:
```bash
http://<YOU_CANISTER_ID>.raw.localhost:8080
```

---

### 4. Register your bot on Openchat and start messaging it!

TODO

---

## 🛠 Customize Your Bot

The default bot is just an example. You can modify its behavior by editing `/open-chat-bots/rs/canister/examples` and linking it to your own AI backend or tools.

---

## 📚 Learn More

- [OpenChat](https://oc.app)
- [OpenChat Bot SDK](https://github.com/open-chat-labs/open-chat-bots)
- [ICP Developer Docs](https://internetcomputer.org/docs)
- [Docker Installation](https://docs.docker.com/get-docker/)

---

**Now go build something amazing 🤖📬 with OpenChat!**
