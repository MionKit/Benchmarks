"use strict";

const { UserSchema } = require("../lib/zod-schemas");

const fastify = require("fastify")();

// ##### ROUTES ############
fastify.get("/hello", function (req, reply) {
  reply.send({ hello: "world" });
});

fastify.post("/updateUser", async function (req, reply) {
  const user = UserSchema.parse(req.body); // Validates + deserializes dates

  // Update timestamps
  user.updatedAt = new Date();
  user.lastLoginAt = new Date();

  // Update profile modification
  user.profile.displayName = `${user.profile.firstName} ${user.profile.lastName.charAt(0)}.`;

  reply.send(user);
});

fastify.listen({ port: 3000, host: "localhost" });
