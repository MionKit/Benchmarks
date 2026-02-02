/* ########
 * 2024 mion-benchmarks
 * Hono Bun Server - Pre-compiled for consistent benchmarking
 * License: MIT
 * ######## */

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

export interface BunServerOptions {
  port?: number;
}

export const initHttpBun = (options: BunServerOptions = {}) => {
  const port = options.port ?? 3000;
  return Bun.serve({
    port,
    fetch: app.fetch,
  });
};

// For direct execution
if (import.meta.main) {
  initHttpBun({ port: 3000 });
  console.log("Hono Bun server running on port 3000");
}
