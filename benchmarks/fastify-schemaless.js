"use strict";

const fastify = require("fastify")();

fastify.get("/", function (req, reply) {
  reply.send({ hello: "world" });
});

fastify.listen({ port: 3000, host: "127.0.0.1" });
