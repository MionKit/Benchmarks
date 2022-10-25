"use strict";

const { dependencies } = require("../package");

const packages = {
  "http-bare": {
    hasRouter: false,
    version: "10.13.0",
    validation: "✗",
    description:
      "Super basic and completely useless bare http server, should be the theoretical upper limit in performance.",
  },
  "mikrokit-http-bare": {
    hasRouter: false,
    package: "@mikrokit/compiled-app",
    validation: "✗",
    description:
      "Just the http part of @mikrokit/http, completely useless, just as a reference for performance of the http server part.",
  },
  "fastify-schemaless": {
    checked: true,
    hasRouter: true,
    package: "fastify",
    validation: "-",
    description:
      "Fastify without a schema, uses native JSON.stringify instead fast-json-stringify.",
  },
  fastify: {
    checked: true,
    hasRouter: true,
    package: "fastify",
    validation: "-",
    description:
      "Validation is done using schemas and ajv. Schemas must be generated manually or using third party tools.",
  },
  mikrokit: {
    hasRouter: true,
    package: "@mikrokit/compiled-app",
    validation: "✓",
    description: "Automatic validation out of the box using @deepkit/types.",
  },
  hapi: {
    hasRouter: true,
    package: "@hapi/hapi",
    validation: "✗",
    description: "Manual validation using joi, or third party tools.",
  },
  restify: {
    hasRouter: true,
    validation: "✗",
    description: "Requires third party tools.",
  },
  "trpc-router": {
    hasRouter: true,
    package: "@trpc/server",
    validation: "✗",
    description: "Manual validation using zod, or third party tools",
  },
  express: {
    hasRouter: true,
    validation: "✗",
    description: "needs third party tools, or third party tools",
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
  choices: choices.sort(),

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
