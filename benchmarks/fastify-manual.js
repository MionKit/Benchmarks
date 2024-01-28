"use strict";

// ##### user type
// interface User {
//   id: number;
//   name: string;
//   surname: string;
//   lastUpdate: Date;
// }

const fastify = require("fastify")();

// ##### validation / deserialization ############
const hasUnknownKeys = (knownKeys, input) => {
  if (typeof input !== "object") return true;
  const unknownKeys = Object.keys(input);
  return unknownKeys.some((ukn) => !knownKeys.includes(ukn));
};

// before serialize
const isUser = (input) => {
  if (typeof input !== "object") return false;
  if (hasUnknownKeys(["id", "name", "surname", "lastUpdate"], input))
    return false;
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

// ##### ROUTES ############
fastify.get("/hello", function (req, reply) {
  reply.send({ hello: "world" });
});

fastify.post("/updateUser", async function (req, reply) {
  const rawUser = req.body; //date is not deserialized, it is with fastify and
  if (!isUser(rawUser)) throw "app error, invalid parameter, not a user";
  const user = deserializeUser(rawUser);

  user.lastUpdate.setMonth(user.lastUpdate.getMonth() + 1);
  reply.send(user);
});

fastify.listen({ port: 3000, host: "localhost" });
