"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const elysia = require("elysia");
function __assignType(fn, args) {
  fn.__type = args;
  return fn;
}
const __ΩUser = ["id", "name", "surname", "lastUpdate", "User", `P'4!&4"&4#T4$Mw%y`];
const DateString = elysia.t.Transform(elysia.t.String({ format: "date-time" })).Decode(__assignType((value) => new Date(value), ["value", "", 'P"2!"/"'])).Encode(__assignType((value) => value.toISOString(), ["value", "", 'P"2!"/"']));
const UserSchema = elysia.t.Object({
  id: elysia.t.Number(),
  name: elysia.t.String(),
  surname: elysia.t.String(),
  lastUpdate: DateString
});
const createApp = () => {
  return new elysia.Elysia().get("/hello", () => ({ hello: "world" })).post("/updateUser", __assignType(({ body }) => {
    const user = body;
    user.lastUpdate.setMonth(user.lastUpdate.getMonth() + 1);
    return user;
  }, ["param0", "", 'P"2!"/"']), { body: UserSchema });
};
const __ΩBunServerOptions = ["port", "BunServerOptions", `P'4!8Mw"y`];
const initHttpBun = __assignType((options = {}) => {
  const port = options.port ?? 3e3;
  const app = createApp().listen(port);
  console.log(`Elysia server running on port ${port}`);
  return app;
}, [() => __ΩBunServerOptions, "options", () => ({}), "", 'Pn!2">#"/$']);
if (void 0) {
  initHttpBun({ port: 3e3 });
}
exports.__ΩBunServerOptions = __ΩBunServerOptions;
exports.__ΩUser = __ΩUser;
exports.initHttpBun = initHttpBun;
//# sourceMappingURL=elysiaAppBun.js.map
