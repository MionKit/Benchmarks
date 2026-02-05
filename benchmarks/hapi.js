"use strict";

require("make-promises-safe");

const Hapi = require("@hapi/hapi");
const { UserSchema, SimpleUserSchema } = require("../lib/zod-schemas");

// ##### ROUTES ############
async function start() {
  const server = Hapi.server({ port: 3000, debug: false });

  server.route({
    method: "GET",
    path: "/hello",
    config: {
      cache: false,
      response: {
        ranges: false,
      },
      state: { parse: false },
    },
    handler: function (request, h) {
      return { hello: "world" };
    },
  });

  server.route({
    method: "POST",
    path: "/updateUser",
    config: {
      cache: false,
      response: {
        ranges: false,
      },
      state: { parse: false },
    },
    handler: function (request, h) {
      const user = UserSchema.parse(request.payload); // Validates + deserializes dates

      // Update timestamps
      user.updatedAt = new Date();
      user.lastLoginAt = new Date();

      // Update profile modification
      user.profile.displayName = `${user.profile.firstName} ${user.profile.lastName.charAt(0)}.`;

      return user;
    },
  });

  server.route({
    method: "POST",
    path: "/updateSimpleUser",
    config: {
      cache: false,
      response: {
        ranges: false,
      },
      state: { parse: false },
    },
    handler: function (request, h) {
      const user = SimpleUserSchema.parse(request.payload); // Validates + deserializes dates
      user.lastUpdate = new Date();
      return user;
    },
  });

  await server.start();
}

start();
