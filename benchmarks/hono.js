// import { serve } from "@hono/node-server";
// import { Hono } from "hono";

const { serve } = require("@hono/node-server");
const { Hono } = require("hono");

// ##### validation / deserialization ############
const hasUnknownKeys = (knownKeys, input) => {
  if (typeof input !== "object") return true;
  const unknownKeys = Object.keys(input);
  return unknownKeys.some((ukn) => !knownKeys.includes(ukn));
};

// before serialize
const isUser = (input) => {
  if (typeof input !== "object") return false;
  if (hasUnknownKeys(["id", "name", "surname", "lastUpdate"], input))
    return false;
  return (
    typeof input?.id === "number" &&
    typeof input?.name === "string" &&
    typeof input?.surname === "string" &&
    typeof input?.lastUpdate === "string"
  );
};

const deserializeUser = (jsonParseResult) => {
  if (typeof jsonParseResult?.lastUpdate === "string")
    return {
      ...jsonParseResult,
      lastUpdate: new Date(jsonParseResult.lastUpdate),
    };
  return jsonParseResult;
};

const app = new Hono();

app.get("/hello", (c) => {
  return c.json({ hello: "world" });
});

app.post("/updateUser", async (c, res) => {
  const rawUser = await c.req.json();
  if (!isUser(rawUser)) throw "app error, invalid parameter, not a user";
  const user = deserializeUser(rawUser);
  user.lastUpdate.setMonth(user.lastUpdate.getMonth() + 1);
  return c.json(user);
});

const port = 3000;
console.log(`Server is running on port ${port}`);

serve({
  fetch: app.fetch,
  port,
});
