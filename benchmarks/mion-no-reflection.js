"use strict";

const { initHttp, addRoutes } = require("../_compiled-apps/apps/src/mionApp");
const { startHttpServer } = require("@mionkit/http");
const { RouteError } = require("@mionkit/router");

// ##### Using mion without reflection completely disables the runtime type checking
// ##### so there is no need to use built typescript

// ##### user type
// interface User {
//   id: number;
//   name: string;
//   surname: string;
//   lastUpdate: Date;
// }

// ##### validation / deserialization : USING MANUAL Validation, the framework might support something else ############
// const hasUnknownKeys = (knownKeys, input) => {
//   if (typeof input !== "object") return true;
//   const unknownKeys = Object.keys(input);
//   return unknownKeys.some((ukn) => !knownKeys.includes(ukn));
// };

// before serialize
const isUser = (input) => {
  if (typeof input !== "object") return false;
  //   if (hasUnknownKeys(["id", "name", "surname", "lastUpdate"], input))
  //     return false;
  return (
    typeof input?.id === "number" &&
    typeof input?.name === "string" &&
    typeof input?.surname === "string" &&
    typeof input?.lastUpdate === "string"
  );
};

const deserializeUser = (jsonParseResult) => {
  if (typeof jsonParseResult?.lastUpdate === "string")
    return {
      ...jsonParseResult,
      lastUpdate: new Date(jsonParseResult.lastUpdate),
    };
  return jsonParseResult;
};

const mionSayHelloRoute = () => ({ hello: "world" });
const updateUser = (context, rawUser) => {
  if (!isUser(rawUser)) {
    return new RouteError({
      statusCode: 400,
      publicMessage: "invalid parameter, not a user",
    });
  }
  const user = deserializeUser(rawUser); // we would need to deserialize to be able to use date etc
  user.lastUpdate.setMonth(user.lastUpdate.getMonth() + 1);
  return user;
};

const routes = {
  "/": mionSayHelloRoute,
  updateUser,
};

initHttp({ disableAllReflection: true });
addRoutes(routes);

startHttpServer({ port: 3000 });
