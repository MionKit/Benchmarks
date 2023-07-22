# Cold Starts

Cold start times are measure using the http server but are also indicative of how the [serverless version](https://github.com/MionKit/mion/tree/master/packages/serverless) could perform in this regard, as both `@MionKit/http` an `@MionKit/serverless` are just a wrapper around `@MionKit/router` which contains all the logic.

- These metrics show the start time when loading 1 route and then increasing the number or routes loaded until 5,000 routes.
- The `startup time` is the time it takes to load the @MionKit/http library itself + create the routes object in memory.
- The `listen time` is the time it takes to parse and generate a flat router so there is no need to process the url when a request come in.

## Benchmark Results

- **Machine:** darwin x64 | 8 vCPUs | 16.0GB Mem
- **Node:** `v16.18.0`
- **Run:** Sat Jul 22 2023 13:17:43 GMT+0100 (Irish Standard Time)
- **Method:** `npm run metrics` (samples: 5)
- **startup:** time elapsed to setup the application
- **listen:** time elapsed until the http server is ready to accept requests (cold start)

### Cold starts: listen time (ms) lower is better

![benchmarks](assets/public/charts/cold-starts.png)

|                                | startup(ms) | listen(ms) |
| ------------------------------ | ----------- | ---------- |
| 10-startup-deepkit-routes.js   | 1467        | 1469       |
| 10-startup-fastify-routes.js   | 164         | 242        |
| 10-startup-mion-routes.js      | 79          | 88         |
| 100-startup-deepkit-routes.js  | 1468        | 1470       |
| 100-startup-fastify-routes.js  | 184         | 366        |
| 100-startup-mion-routes.js     | 79          | 89         |
| 500-startup-deepkit-routes.js  | 1450        | 1451       |
| 500-startup-fastify-routes.js  | 279         | 866        |
| 500-startup-mion-routes.js     | 82          | 95         |
| 1000-startup-deepkit-routes.js | 1476        | 1478       |
| 1000-startup-fastify-routes.js | 379         | 1485       |
| 1000-startup-mion-routes.js    | 82          | 98         |
| 2000-startup-deepkit-routes.js | 1628        | 1630       |
| 2000-startup-fastify-routes.js | 623         | 2650       |
| 2000-startup-mion-routes.js    | 80          | 112        |
| 3000-startup-deepkit-routes.js | 1505        | 1507       |
| 3000-startup-fastify-routes.js | 919         | 4024       |
| 3000-startup-mion-routes.js    | 87          | 128        |
| 5000-startup-deepkit-routes.js | 1500        | 1502       |
| 5000-startup-fastify-routes.js | 1971        | 7043       |
| 5000-startup-mion-routes.js    | 85          | 136        |
| startup-listen.js              | 82          | 86         |
