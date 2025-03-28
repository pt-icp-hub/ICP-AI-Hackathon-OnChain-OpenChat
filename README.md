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
docker run --platform linux/amd64 -d -p 5001:80 -p 8080:8080 --name open-chat openchatlabs/open-chat:latest
```

Once it’s running, access OpenChat UI via:
```
http://localhost:5001
```

---

### 3. Clone the OpenChat Bot SDK

```bash
git clone https://github.com/open-chat-labs/open-chat-bots.git
cd open-chat-bots/ts/packages/example
```

---

### 4. Generate Your Bot’s Identity

```bash
openssl ecparam -genkey -name secp256k1 -out private_key.pem
```

Now extract the principal from your generated key:

```bash
cd ../library
npm i
node ./scripts/report_principal.js ../example/private_key.pem
```

Copy this principal. You’ll need it to register your bot in the OpenChat UI.

---

### 5. Get your Openchat API key

1. Go to [http://localhost:5001](http://localhost:5001) and log in.
2. Click your profile at the top left.
3. Go to **Advanced → Bot Client Config**.
4. Copy it and add it later on in your .env as **OC_PUBLIC**.

---

### 6. Configure the Bot Environment

```bash
cd ../example
nano .env
```

Paste the following with your own values:

```env
OC_PUBLIC=-----BEGIN PUBLIC KEY-----\n...\n-----END PUBLIC KEY-----
IC_HOST=http://127.0.0.1:8080
IDENTITY_PRIVATE=-----BEGIN EC PRIVATE KEY-----\n...\n-----END EC PRIVATE KEY-----
STORAGE_INDEX_CANISTER=rturd-qaaaa-aaaaf-aabaq-cai
PORT=3000
OPENAI_API_KEY=sk-proj-xxx  # Optional for AI replies
```

> 💡 To get your identity private key:
```bash
cat private_key.pem
```

---

### 7. Run the Bot

```bash
npm i
npm run dev
```

Once the bot is deployed, its description will be available at:
```bash
http://<YOU_CANISTER_ID>.raw.localhost:3000
```

---

### 8. Register your bot on Openchat and start messaging it!

TODO

---

## 🛠 Customize Your Bot

The default bot is just an example. You can modify its behavior by editing `handler.ts` and linking it to your own AI backend or tools.

---

## 📚 Learn More

- [OpenChat](https://oc.app)
- [OpenChat Bot SDK](https://github.com/open-chat-labs/open-chat-bots)
- [ICP Developer Docs](https://internetcomputer.org/docs)
- [Docker Installation](https://docs.docker.com/get-docker/)

---

**Now go build something amazing 🤖📬 with OpenChat!**
