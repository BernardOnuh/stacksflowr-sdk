# Stacksflowr SDK

A lightweight, TypeScript-first Node.js SDK for wrapping REST APIs — built for simplicity and extensibility.

[![npm version](https://img.shields.io/npm/v/@stacksflowr/my-sdk.svg)](https://www.npmjs.com/package/@stacksflowr/my-sdk)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

## Installation

```bash
npm install @stacksflowr/my-sdk
```

---

## Quick Start

```typescript
import MySDK from "@stacksflowr/my-sdk";

const sdk = new MySDK({
  baseURL: "https://api.example.com",
  apiKey: "your-api-key",
});
```

---

## Usage

### Users

```typescript
// List users
const users = await sdk.users.list({ page: 1, limit: 10 });

// Get a single user
const user = await sdk.users.get("user-123");

// Create a user
const newUser = await sdk.users.create({
  name: "Ada Lovelace",
  email: "ada@example.com",
});

// Update a user
const updated = await sdk.users.update("user-123", { name: "Ada L." });

 Delete a user
await sdk.users.delete("user-123");
```

---

## Configuration

| Option    | Type     | Required | Description                        |
|-----------|----------|----------|------------------------------------|
| `baseURL` | `string` | ✅        | Base URL of your REST API          |
| `apiKey`  | `string` | ✅        | API key for Authorization header   |
| `timeout` | `number` | ❌        | Request timeout in ms (default: 10000) |

---

## Project Structure
