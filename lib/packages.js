"use strict";

const { dependencies } = require("../package");

const packages = {
  "http-node": {
    hasRouter: false,
    version: "16.18.0",
    validation: "✓",
    description: "bare node http server with Zod validation",
  },
  mion: {
    hasRouter: true,
    package: "@MionKit/compiled-app",
    validation: "✓",
    version: "0.6.2",
    description: "Automatic validation and serialization out of the box",
  },
  // note that mion bun is compiled and not directly ran from typescript
  "mion.bun": {
    checked: true,
    hasRouter: true,
    package: "@MionKit/compiled-app",
    validation: "✓",
    version: "0.6.2",
    description: "mion using bun, automatic validation and serialization",
    isBun: true,
    fileExtension: ".js",
    excludeFromHelloWorld: true, // autocannon is not fast enough to benchmark Bun servers accurately
  },
  hono: {
    hasRouter: true,
    package: "hono",
    validation: "✓",
    version: "3.12.6",
    description: "hono node server with Zod validation",
  },
  "hono.bun": {
    hasRouter: true,
    package: "hono",
    validation: "✓",
    version: "3.12.6",
    description: "hono bun server with Zod validation",
    isBun: true,
    fileExtension: ".js", // Use compiled JS
    excludeFromHelloWorld: true, // autocannon is not fast enough to benchmark Bun servers accurately
  },
  "elysia.bun": {
    checked: false,
    hasRouter: true,
    package: "elysia",
    validation: "✓",
    version: "1.0.0",
    description: "Elysia framework with TypeBox validation",
    isBun: true,
    fileExtension: ".js", // Use compiled JS
    excludeFromHelloWorld: true, // autocannon is not fast enough to benchmark Bun servers accurately
  },
  // TODO: check why this is not working after last update
  // deepkit: {
  //   hasRouter: true,
  //   package: "@MionKit/compiled-app",
  //   validation: "✓",
  //   version: "1.0.1-alpha.114",
  //   description: "Automatic validation and serialization out of the box",
  // },
  fastify: {
    hasRouter: true,
    package: "fastify",
    validation: "✓",
    description: "Fastify with Zod validation",
  },
  // "fastify-manual": {
  //   hasRouter: true,
  //   package: "fastify",
  //   validation: "-",
  //   version: "3.12.6",
  //   description: "manually validated parameters",
  // },
  hapi: {
    hasRouter: true,
    package: "@hapi/hapi",
    validation: "✓",
    description: "Hapi with Zod validation",
  },
  // restify: {
  //   hasRouter: true,
  //   validation: "✗",
  //   description: "manual validation or third party tools",
  // },
  // Can't make trcp work with the expected format, is too opinionated and have smoked to much graphql weed
  // "trpc-router": {
  //   hasRouter: true,
  //   package: "@trpc/server",
  //   validation: "✗",
  //   description: "Manual validation using zod, or third party tools",
  // },
  express: {
    hasRouter: true,
    validation: "✓",
    description: "Express with Zod validation",
  },
};

const choices = [];
Object.keys(packages).forEach((pkg) => {
  if (!packages[pkg].version) {
    const module = dependencies[pkg] ? pkg : packages[pkg].package;
    const version = require(require.resolve(module + "/package.json")).version;
    packages[pkg].version = version;
  }
  choices.push(pkg);
});

module.exports = {
  choices: choices,

  list: (extra = false) => {
    return choices
      .map((c) => {
        return extra === !!packages[c].extra
          ? Object.assign({}, packages[c], { name: c })
          : null;
      })
      .filter((c) => c);
  },

  info: (module) => {
    return packages[module];
  },
};
