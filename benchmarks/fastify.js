"use strict";

// ##### user type
// interface User {
//   id: number;
//   name: string;
//   surname: string;
//   lastUpdate: Date;
// }

// ##### validation / deserialization ############
const deserializeUser = (jsonParseResult) => {
  if (typeof jsonParseResult?.lastUpdate === "string")
    return {
      ...jsonParseResult,
      lastUpdate: new Date(jsonParseResult.lastUpdate),
    };
  return jsonParseResult;
};

const fastify = require("fastify")();

fastify.addSchema({
  $id: "User",
  type: "object",
  required: ["id", "name", "surname", "lastUpdate"],
  properties: {
    id: { type: "number" },
    name: { type: "string" },
    surname: { type: "string" },
    lastUpdate: { type: "string", format: "date-time" },
  },
});

fastify.addSchema({
  $id: "Hello",
  type: "object",
  required: ["hello"],
  properties: {
    hello: { type: "string" },
  },
});

const rootRequestOpts = {
  schema: {
    response: {
      200: {
        $ref: "Hello",
      },
    },
  },
};

const updateUserOpts = {
  schema: {
    body: {
      $ref: "User",
    },
    response: {
      200: {
        $ref: "User",
      },
    },
  },
};

// ##### ROUTES ############
fastify.post("/", rootRequestOpts, function (req, reply) {
  reply.send({ hello: "world" });
});

fastify.post("/updateUser", updateUserOpts, async function (req, reply) {
  const rawUser = req.body; //date is not deserialized, it is with fastify and
  const user = deserializeUser(rawUser); // we need to convert date input manually
  user.lastUpdate.setMonth(user.lastUpdate.getMonth() + 1);
  reply.send(user);
});

fastify.listen({ port: 3000, host: "127.0.0.1" });
