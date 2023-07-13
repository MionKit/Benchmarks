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
    package: "@MionKit/compiled-app",
    validation: "✓",
    version: "0.1.0",
    description:
      "using mion http with promises `HttpOptions.useCallbacks = false`",
  },
  "mion-async-context": {
    hasRouter: true,
    package: "@MionKit/compiled-app",
    validation: "✓",
    version: "0.1.0",
    description:
      "using mion http with promises and sync call context `RouterOptions.useAsyncCallContext = true`",
  },
  "mion-callbacks": {
    hasRouter: true,
    package: "@MionKit/compiled-app",
    validation: "✓",
    version: "0.1.0",
    description:
      "using mion http with callbacks `HttpOptions.useCallbacks = true`",
  },
  "mion-async-context-callbacks": {
    hasRouter: true,
    package: "@MionKit/compiled-app",
    validation: "✓",
    version: "0.1.0",
    description:
      "using mion http with callbacks and sync call context `RouterOptions.useAsyncCallContext = true`",
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
