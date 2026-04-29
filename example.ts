import MySDK from "./src/index";

const sdk = new MySDK({
  baseURL: "https://api.example.com",
  apiKey: "your-api-key",
});

async function main() {
  const users = await sdk.users.list({ page: 1, limit: 10 });
  console.log("Users:", users);

  const newUser = await sdk.users.create({ name: "Ada", email: "ada@example.com" });
  console.log("Created:", newUser);
}

main().catch(console.error);
