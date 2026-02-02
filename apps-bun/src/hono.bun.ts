import { Hono } from "hono";
import { z } from "zod";

// Define User schema locally to avoid cross-module import issues
const UserSchema = z
  .object({
    id: z.number(),
    name: z.string(),
    surname: z.string(),
    lastUpdate: z.coerce.date(), // Automatically converts ISO string to Date
  })
  .strict();

type User = z.infer<typeof UserSchema>;

const app = new Hono();

app.get("/hello", (c) => {
  return c.json({ hello: "world" });
});

app.post("/updateUser", async (c) => {
  const rawUser = await c.req.json();
  const user = UserSchema.parse(rawUser); // Validates + deserializes date
  user.lastUpdate.setMonth(user.lastUpdate.getMonth() + 1);
  return c.json(user);
});

// Bun's native way to start an HTTP server with Hono
export default {
  fetch: app.fetch,
  port: 3000,
};
