"use strict";

const { dependencies } = require("../package");

const packages = {
  "http-node": {
    hasRouter: false,
    version: "16.18.0",
    validation: "✗",
    description:
      "Super basic and completely useless bare http server, should be the theoretical upper limit in performance",
  },
  fastify: {
    hasRouter: true,
    package: "fastify",
    validation: "-",
    description:
      "Validation using schemas and ajv. schemas are generated manually or using third party tools",
  },
  mion: {
    checked: true,
    hasRouter: true,
    package: "@MionKit/compiled-app",
    validation: "✓",
    version: "0.1.0",
    description: "Automatic validation and serialization out of the box",
  },
  deepkit: {
    hasRouter: true,
    package: "@MionKit/compiled-app",
    validation: "✓",
    version: "1.0.1-alpha.75",
    description: "Automatic validation and serialization out of the box",
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
