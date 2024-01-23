import { serve } from "@hono/node-server";
import { Hono } from "hono";

const app = new Hono();

app.get("/hello", (c) => {
  return c.json({ hello: "world" });
});

app.post("/updateUser", (c, res) => {
  const rawUser = c.body;
  if (!isUser(rawUser)) throw "app error, invalid parameter, not a user";
  const user = deserializeUser(rawUser);
  user.lastUpdate.setMonth(user.lastUpdate.getMonth() + 1);
  c.json(user);
});

const port = 3000;
console.log(`Server is running on port ${port}`);

serve({
  fetch: app.fetch,
  port,
});
