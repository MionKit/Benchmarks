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

// ##### ROUTES ############
fastify.post("/", function (req, reply) {
  reply.send({ "/": { hello: "world" } });
});

fastify.post("/updateUser", function (req, reply) {
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
