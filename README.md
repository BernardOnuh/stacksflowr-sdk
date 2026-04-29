# Stackflowr SDk

A lightweight Node.js REST API wrapper SDK.

## Installation

\`\`\`bash
npm install @your-username/my-sdk
\`\`\`

## Usage

\`\`\`typescript
import MySDK from "@your-username/my-sdk";

const sdk = new MySDK({
  baseURL: "https://api.example.com",
  apiKey: "your-api-key",
});

// List users
const users = await sdk.users.list({ page: 1, limit: 10 });

// Create a user
const user = await sdk.users.create({ name: "Ada", email: "ada@example.com" });
\`\`\`

## License
MIT
