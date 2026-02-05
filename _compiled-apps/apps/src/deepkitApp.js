"use strict";
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const app = require("@deepkit/app");
const framework = require("@deepkit/framework");
const http = require("@deepkit/http");
const logger = require("@deepkit/logger");
const apps_src_models = require("./models.js");
function __assignType(fn, args) {
  fn.__type = args;
  return fn;
}
class MyTransport {
  constructor() {
    console.log("MyTransport constructor");
  }
  write(message) {
  }
  supportsColor() {
    return false;
  }
}
__publicField(MyTransport, "__type", ["constructor", "message", "write", "supportsColor", "MyTransport", 'P"0!P!2""0#P"0$5!x"w%']);
const initDeepkitApp = () => {
  const app$1 = new app.App({
    imports: [new framework.FrameworkModule()]
  }).setup(__assignType((module2, config) => {
    module2.setupGlobalProvider(void 0, logger.Logger).setTransport([new MyTransport()]);
  }, ["module", "config", "", 'P"2!"2""/#']));
  const router = app$1.get(http.HttpRouterRegistry);
  router.any("/hello", __assignType(() => {
    return { hello: "world" };
  }, [() => apps_src_models.__ΩSayHello, "", 'Pn!/"']));
  router.post("/updateUser", __assignType((body) => {
    const user = body;
    user.updatedAt = /* @__PURE__ */ new Date();
    user.lastLoginAt = /* @__PURE__ */ new Date();
    user.profile.displayName = `${user.profile.firstName} ${user.profile.lastName.charAt(0)}.`;
    return user;
  }, ["body", () => apps_src_models.__ΩUser, "", 'P!2!n"/#']));
  return { deepKitApp: app$1, deepKitRouter: router };
};
exports.MyTransport = MyTransport;
exports.initDeepkitApp = initDeepkitApp;
//# sourceMappingURL=deepkitApp.js.map
