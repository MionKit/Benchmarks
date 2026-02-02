"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const hono = require("hono");
const zod = require("zod");
const UserSchema = zod.z.object({
  id: zod.z.number(),
  name: zod.z.string(),
  surname: zod.z.string(),
  lastUpdate: zod.z.coerce.date()
  // Automatically converts ISO string to Date
}).strict();
const app = new hono.Hono();
app.get("/hello", (c) => {
  return c.json({ hello: "world" });
});
app.post("/updateUser", async (c) => {
  const rawUser = await c.req.json();
  const user = UserSchema.parse(rawUser);
  user.lastUpdate.setMonth(user.lastUpdate.getMonth() + 1);
  return c.json(user);
});
const initHttpBun = (options = {}) => {
  const port = options.port ?? 3e3;
  return Bun.serve({
    port,
    fetch: app.fetch
  });
};
if (void 0) {
  initHttpBun({ port: 3e3 });
  console.log("Hono Bun server running on port 3000");
}
exports.initHttpBun = initHttpBun;
//# sourceMappingURL=honoAppBun.js.map
