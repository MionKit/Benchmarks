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
  // "mion-http-bare": {
  //   hasRouter: false,
  //   package: "@MionKit/compiled-app",
  //   validation: "✗",
  //   description:
  //     "Just the http part of @MionKit/http, completely useless, just as a reference for performance of the http server part.",
  // },
  fastify: {
    checked: true,
    hasRouter: true,
    package: "fastify",
    validation: "-",
    description:
      "Validation is done using schemas and ajv. Schemas must be generated manually or using third party tools.",
  },
  mion: {
    hasRouter: true,
    package: "@MionKit/compiled-app",
    validation: "✓",
    version: "0.1.0",
    description: "Automatic validation out of the box using @deepkit/types.",
  },
  deepkit: {
    hasRouter: true,
    package: "@MionKit/compiled-app",
    validation: "✓",
    version: "1.0.1-alpha.75",
    description:
      "Automatic validation out of the box (The ones that made @deepkit/types👍). They have a RPC over webSockets that's way more performant than the http tested here.",
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
