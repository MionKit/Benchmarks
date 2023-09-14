"use strict";

const { dependencies } = require("../package");

const packages = {
  "http-node": {
    hasRouter: false,
    version: "16.18.0",
    validation: "✗",
    description: "theoretical upper limit in performance.",
  },
  mion: {
    checked: true,
    hasRouter: true,
    package: "@mionkit/compiled-app",
    validation: "✓",
    version: "0.1.0",
    description:
      "using mion http with promises `HttpOptions.useCallbacks = false`",
  },
  mion3000: {
    hasRouter: true,
    package: "@mionkit/compiled-app",
    validation: "✓",
    version: "0.1.0",
    description:
      "mion with 3000 routes loaded (should have the most memory usage)",
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
