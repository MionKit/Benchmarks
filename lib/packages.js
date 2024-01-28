"use strict";

const { dependencies } = require("../package");

const packages = {
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
  },
  "http-node": {
    hasRouter: false,
    version: "16.18.0",
    validation: "✗",
    description:
      "bare node http server, should be the theoretical upper limit in node.js performance",
  },
  hono: {
    hasRouter: true,
    package: "hono",
    validation: "✗",
    version: "3.12.6",
    description: "hono node server, manual validation or third party tools",
  },
  // "hono.bun": {
  //   hasRouter: true,
  //   package: "hono",
  //   validation: "✗",
  //   version: "3.12.6",
  //   description: "hono bun server, manual validation or third party tools",
  //   isBun: true,
  //   srcDir: "apps-bun/src",
  // },
  // "elysia.bun": {
  //   checked: false,
  //   hasRouter: true,
  //   package: "elysia",
  //   validation: "✓",
  //   version: "0.7.5",
  //   description: "bun FrameWork with validation using TypeBox",
  //   isBun: true,
  //   srcDir: "apps-bun/src",
  // },

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
    validation: "-",
    description:
      "Validation using schemas and ajv. schemas are generated manually",
  },
  "fastify-manual": {
    hasRouter: true,
    package: "fastify",
    validation: "-",
    version: "3.12.6",
    description: "manually validated parameters",
  },
  hapi: {
    hasRouter: true,
    package: "@hapi/hapi",
    validation: "✗",
    description: "validation using joi or third party tools",
  },
  restify: {
    hasRouter: true,
    validation: "✗",
    description: "manual validation or third party tools",
  },
  // Can't make trcp work with the expected format, is too opinionated and have smoked to much graphql weed
  // "trpc-router": {
  //   hasRouter: true,
  //   package: "@trpc/server",
  //   validation: "✗",
  //   description: "Manual validation using zod, or third party tools",
  // },
  express: {
    hasRouter: true,
    validation: "✗",
    description: "manual validation or third party tools",
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
