const { serve } = require("@hono/node-server");
const { Hono } = require("hono");
const { UserSchema, SimpleUserSchema } = require("../lib/zod-schemas");

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

app.post("/updateSimpleUser", async (c) => {
  const rawUser = await c.req.json();
  const user = SimpleUserSchema.parse(rawUser); // Validates + deserializes dates
  user.lastUpdate = new Date();
  return c.json(user);
});

const port = 3000;

// Only log in non-benchmark mode (when BENCH_VERBOSE is set)
if (process.env.BENCH_VERBOSE === "true") {
  console.log(`Server is running on port ${port}`);
}

serve({
  fetch: app.fetch,
  port,
});
