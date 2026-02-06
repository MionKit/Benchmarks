"use strict";

const { UserSchema, SimpleUserSchema } = require("../lib/zod-schemas");

// Disable logging and optimize for benchmarks
const fastify = require("fastify")({
  logger: false,
  disableRequestLogging: true,
  requestIdHeader: false,
  requestIdLogLabel: false,
});

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

fastify.post("/updateSimpleUser", async function (req, reply) {
  const user = SimpleUserSchema.parse(req.body); // Validates + deserializes dates
  user.lastUpdate = new Date();
  reply.send(user);
});

fastify.listen({ port: 3000, host: "localhost" });
