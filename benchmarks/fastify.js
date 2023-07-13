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

const rootRequestOpts = {
  schema: {
    response: {
      200: {
        type: "object",
        properties: {
          hello: {
            type: "string",
          },
        },
      },
    },
  },
};

const updateUserOpts = {
  schema: {
    body: {
      type: "object",
      required: ["/updateUser"],
      properties: {
        "/updateUser": { $ref: "User" },
      },
    },
    response: {
      200: {
        type: "object",
        properties: {
          "/updateUser": { $ref: "User" },
        },
      },
    },
  },
};

// ##### ROUTES ############
fastify.post("/", rootRequestOpts, function (req, reply) {
  console.log("here");
  reply.send({ "/": { hello: "world" } });
});

fastify.post("/updateUser", updateUserOpts, async function (req, reply) {
  const rawUser = req.body["/updateUser"]; //date is not deserialized, it is with fastify and
  const user = deserializeUser(rawUser); // we need to convert date input manually
  reply.send({
    "/updateUser": {
      ...user,
      name: "lorem",
      surname: "ipsum",
      lastUpdate: new Date().toJSON(), // manually have to deserialize
    },
  });
});

fastify.listen({ port: 3000, host: "127.0.0.1" });
