"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const elysia = require("elysia");
const DateString = elysia.t.Transform(elysia.t.String({ format: "date-time" })).Decode((value) => new Date(value)).Encode((value) => value.toISOString());
const UserSchema = elysia.t.Object({
  id: elysia.t.Number(),
  name: elysia.t.String(),
  surname: elysia.t.String(),
  lastUpdate: DateString
});
const createApp = () => {
  return new elysia.Elysia().get("/hello", () => ({ hello: "world" })).post(
    "/updateUser",
    ({ body }) => {
      const user = body;
      user.lastUpdate.setMonth(user.lastUpdate.getMonth() + 1);
      return user;
    },
    { body: UserSchema }
  );
};
const initHttpBun = (options = {}) => {
  const port = options.port ?? 3e3;
  const app = createApp().listen(port);
  console.log(`Elysia server running on port ${port}`);
  return app;
};
if (void 0) {
  initHttpBun({ port: 3e3 });
}
exports.initHttpBun = initHttpBun;
//# sourceMappingURL=elysiaAppBun.js.map
