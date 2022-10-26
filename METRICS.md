# Cold Start metrics

Cold start times are also indicative of how the [serverless version](https://github.com/MikroKit/MikroKit/tree/master/packages/serverless) could perform in this regard, as both `@mikrokit/http` an `@mikrokit/serverless` are just a wrapper around `@mikrokit/router` which contains all the logic.

- These metrics show the start time when loading 1 route and then increasing the number or routes loaded until 10,000.
- The `startup time` is the time it takes to load the @mikrokit/http library itself + create the routes object in memory.
- The `listen time` is the time it takes to parse and generate a flat router so there is no need to process the url when a request come in.
- The `complexity` is the number of iterations done to parse the routes, it depends on the number of routes and hooks, the order they are defined, and few other factors.

###### Metrics

- **Machine:** darwin x64 | 8 vCPUs | 16.0GB Mem
- **Node:** `v16.18.0`
- **Run:** Wed Oct 26 2022 22:56:19 GMT+0200 (Central European Summer Time)
- **Method:** `npm run metrics` (samples: 5)
- **startup:** time elapsed to setup the application
- **listen:** time elapsed until the http server is ready to accept requests (cold start)

|                                    | startup(ms) | listen(ms) | complexity |
| ---------------------------------- | ----------- | ---------- | ---------- |
| 1-startup-a-mikrokit-routes.js     | 527.97      | 536        | 2          |
| 1-startup-b-deepkit-routes.js      | 1229.33     | 1231       | NA         |
| 1-startup-c-fastify-routes.js      | 169.71      | 236        | NA         |
| 10-startup-a-mikrokit-routes.js    | 529.37      | 539        | 30         |
| 10-startup-b-deepkit-routes.js     | 1228.51     | 1230       | NA         |
| 10-startup-c-fastify-routes.js     | 149.29      | 226        | NA         |
| 100-startup-a-mikrokit-routes.js   | 532.46      | 543        | 300        |
| 100-startup-b-deepkit-routes.js    | 1227.42     | 1229       | NA         |
| 100-startup-c-fastify-routes.js    | 165.47      | 340        | NA         |
| 1000-startup-a-mikrokit-routes.js  | 530.33      | 551        | 3000       |
| 1000-startup-b-deepkit-routes.js   | 1240.44     | 1242       | NA         |
| 1000-startup-c-fastify-routes.js   | 338.71      | 1314       | NA         |
| 10000-startup-a-mikrokit-routes.js | 535.44      | 633        | 30000      |
| 10000-startup-b-deepkit-routes.js  | 1337.99     | 1340       | NA         |
| 10000-startup-c-fastify-routes.js  | 4561.52     | 14958      | NA         |
| startup-listen.js                  | 535.71      | 538        | 0          |
