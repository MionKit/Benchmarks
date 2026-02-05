const { serve } = require("@hono/node-server");
const { Hono } = require("hono");
const { UserSchema } = require("../lib/zod-schemas");

const app = new Hono();

app.get("/hello", (c) => {
  return c.json({ hello: "world" });
});

app.post("/updateUser", async (c) => {
  const rawUser = await c.req.json();
  const user = UserSchema.parse(rawUser); // Validates + deserializes dates

  // Update timestamps
  user.updatedAt = new Date();
  user.lastLoginAt = new Date();

  // Update profile modification
  user.profile.displayName = `${user.profile.firstName} ${user.profile.lastName.charAt(0)}.`;

  return c.json(user);
});

const port = 3000;
console.log(`Server is running on port ${port}`);

serve({
  fetch: app.fetch,
  port,
});
