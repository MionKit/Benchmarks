# Cold Start metrics

Cold start times are also indicative of how the [serverless version](https://github.com/MionKit/mion/tree/master/packages/serverless) could perform in this regard, as both `@MionKit/http` an `@MionKit/serverless` are just a wrapper around `@MionKit/router` which contains all the logic.

- These metrics show the start time when loading 1 route and then increasing the number or routes loaded until 10,000.
- The `startup time` is the time it takes to load the @MionKit/http library itself + create the routes object in memory.
- The `listen time` is the time it takes to parse and generate a flat router so there is no need to process the url when a request come in.
- The `complexity` is the number of iterations done to parse the routes, it depends on the number of routes and hooks, the order they are defined, and few other factors.

################## Metrics

- **Machine:** darwin x64 | 8 vCPUs | 16.0GB Mem
- **Node:** `v16.18.0`
- **Run:** Fri Jul 07 2023 18:27:14 GMT+0100 (Irish Standard Time)
- **Method:** `npm run metrics` (samples: 5)
- **startup:** time elapsed to setup the application
- **listen:** time elapsed until the http server is ready to accept requests (cold start)

|                                 | startup(ms) | listen(ms) | complexity |
| ------------------------------- | ----------- | ---------- | ---------- |
| 1-startup-deepkit-routes.js     | 1423.88     | 1425       | NA         |
| 1-startup-fastify-routes.js     | 171.29      | 236        | NA         |
| 1-startup-mion-routes.js        | 563.81      | 568        | 2          |
| 10-startup-deepkit-routes.js    | 1473.36     | 1475       | NA         |
| 10-startup-fastify-routes.js    | 149.81      | 226        | NA         |
| 10-startup-mion-routes.js       | 578.71      | 583        | 30         |
| 100-startup-deepkit-routes.js   | 1407.04     | 1409       | NA         |
| 100-startup-fastify-routes.js   | 166.48      | 351        | NA         |
| 100-startup-mion-routes.js      | 551.25      | 557        | 300        |
| 1000-startup-deepkit-routes.js  | 1432.26     | 1434       | NA         |
| 1000-startup-fastify-routes.js  | 354.13      | 1359       | NA         |
| 1000-startup-mion-routes.js     | 566.84      | 577        | 3000       |
| 10000-startup-deepkit-routes.js | 1557.50     | 1559       | NA         |
| 10000-startup-fastify-routes.js | 3981.31     | 14910      | NA         |
| 10000-startup-mion-routes.js    | 567.02      | 612        | 30000      |
| startup-listen.js               | 540.47      | 543        | 0          |
