# Cold Start metrics

Cold start times are also indicative of how the [serverless version](https://github.com/MikroKit/MikroKit/tree/master/packages/serverless) could perform in this regard, as both `@mikrokit/http` an `@mikrokit/serverless` are just a wrapper around `@mikrokit/router` which contains all the logic.

- The metric show the start time when loading 1 route and then increasing the number or routes loaded in steps until 10000 routes are loaded.
- The `startup time` is the time it takes to load the @mikrokit/http library itself + create the routes object in memory.
- The `listen time` is the time it takes to parse and generate a flat router so there is no need to process the url when a request come in.
- The `complexity` is the number if iterations done to parse the routes, it depends on the order of routes and hooks are defined, how many hooks there are, the level of nesting of the routes, if routes and hooks go together, etc. (The way this test done it is the best possible scenario with only routes, but in a real life app it would not be that much worst)

############### Metrics

- **Machine:** darwin x64 | 8 vCPUs | 16.0GB Mem
- **Node:** `v16.18.0`
- **Run:** Tue Oct 25 2022 23:52:39 GMT+0200 (Central European Summer Time)
- **Method:** `npm run metrics` (samples: 5)
- **startup:** time elapsed to setup the application
- **listen:** time elapsed until the http server is ready to accept requests (cold start)

|                                    | startup(ms) | listen(ms) | complexity |
| ---------------------------------- | ----------- | ---------- | ---------- |
| 1-startup-a-mikrokit-routes.js     | 532.84      | 541        | 2          |
| 1-startup-b-deepkit-routes.js      | 1256.74     | 1258       | NaN        |
| 10-startup-a-mikrokit-routes.js    | 532.29      | 542        | 30         |
| 10-startup-b-deepkit-routes.js     | 1247.80     | 1249       | NaN        |
| 100-startup-a-mikrokit-routes.js   | 538.44      | 549        | 300        |
| 100-startup-b-deepkit-routes.js    | 1247.67     | 1249       | NaN        |
| 1000-startup-a-mikrokit-routes.js  | 533.57      | 555        | 3000       |
| 1000-startup-b-deepkit-routes.js   | 1259.82     | 1261       | NaN        |
| 10000-startup-a-mikrokit-routes.js | 537.56      | 639        | 30000      |
| 10000-startup-b-deepkit-routes.js  | 1345.68     | 1347       | NaN        |
| startup-listen.js                  | 537.69      | 540        | 0          |
