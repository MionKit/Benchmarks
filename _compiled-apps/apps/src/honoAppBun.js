"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const hono = require("hono");
const zod = require("zod");
function __assignType(fn, args) {
  fn.__type = args;
  return fn;
}
const UserSchema = zod.z.object({
  id: zod.z.number(),
  name: zod.z.string(),
  surname: zod.z.string(),
  lastUpdate: zod.z.coerce.date()
  // Automatically converts ISO string to Date
}).strict();
const app = new hono.Hono();
app.get("/hello", __assignType((c) => {
  return c.json({ hello: "world" });
}, ["c", "", 'P"2!"/"']));
app.post("/updateUser", __assignType(async (c) => {
  const rawUser = await c.req.json();
  const user = UserSchema.parse(rawUser);
  user.lastUpdate.setMonth(user.lastUpdate.getMonth() + 1);
  return c.json(user);
}, ["c", "", 'P"2!"/"']));
const __ΩBunServerOptions = ["port", "BunServerOptions", `P'4!8Mw"y`];
const initHttpBun = __assignType((options = {}) => {
  const port = options.port ?? 3e3;
  return Bun.serve({
    port,
    fetch: app.fetch
  });
}, [() => __ΩBunServerOptions, "options", () => ({}), "", 'Pn!2">#"/$']);
if (void 0) {
  initHttpBun({ port: 3e3 });
  console.log("Hono Bun server running on port 3000");
}
exports.__ΩBunServerOptions = __ΩBunServerOptions;
exports.initHttpBun = initHttpBun;
//# sourceMappingURL=honoAppBun.js.map
