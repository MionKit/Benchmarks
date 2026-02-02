"use strict";

const { UserSchema } = require("../lib/zod-schemas");

const fastify = require("fastify")();

// ##### ROUTES ############
fastify.get("/hello", function (req, reply) {
  reply.send({ hello: "world" });
});

fastify.post("/updateUser", async function (req, reply) {
  const user = UserSchema.parse(req.body); // Validates + deserializes date
  user.lastUpdate.setMonth(user.lastUpdate.getMonth() + 1);
  reply.send(user);
});

fastify.listen({ port: 3000, host: "localhost" });
