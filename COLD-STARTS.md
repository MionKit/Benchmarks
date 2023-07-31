# Cold Starts

Cold start times are measure using the http server but are also indicative of how the [serverless version](https://github.com/MionKit/mion/tree/master/packages/serverless) could perform in this regard, as both `@MionKit/http` an `@MionKit/serverless` are just a wrapper around `@MionKit/router` which contains all the logic.

- These metrics show the start time when loading 1 route and then increasing the number or routes loaded until 5,000 routes.
- The `startup time` is the time it takes to load the @MionKit/http library itself + create the routes object in memory.
- The `listen time` is the time it takes to parse and generate a flat router so there is no need to process the url when a request come in.

## Benchmark Results
* __Machine:__ darwin x64 | 8 vCPUs | 16.0GB Mem
* __Node:__ `v16.18.0`
* __Run:__ Mon Jul 31 2023 01:28:10 GMT+0100 (Irish Standard Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

### Cold starts:  listen time (ms) lower is better 

![benchmarks](assets/public/charts/cold-starts.png)



  | | startup(ms) | listen(ms) |
  |-| -           | -          |
| 10-startup-deepkit-routes.js | 1362 | 1364 |
| 10-startup-fastify-routes.js | 151 | 223 |
| 10-startup-mion-routes.js | 76 | 84 |
| 100-startup-deepkit-routes.js | 1349 | 1350 |
| 100-startup-fastify-routes.js | 167 | 338 |
| 100-startup-mion-routes.js | 75 | 84 |
| 500-startup-deepkit-routes.js | 1355 | 1357 |
| 500-startup-fastify-routes.js | 253 | 795 |
| 500-startup-mion-routes.js | 74 | 87 |
| 1000-startup-deepkit-routes.js | 1358 | 1360 |
| 1000-startup-fastify-routes.js | 356 | 1349 |
| 1000-startup-mion-routes.js | 75 | 91 |
| 2000-startup-deepkit-routes.js | 1367 | 1369 |
| 2000-startup-fastify-routes.js | 563 | 2419 |
| 2000-startup-mion-routes.js | 76 | 106 |
| 3000-startup-deepkit-routes.js | 1381 | 1382 |
| 3000-startup-fastify-routes.js | 822 | 3639 |
| 3000-startup-mion-routes.js | 76 | 117 |
| 5000-startup-deepkit-routes.js | 1379 | 1381 |
| 5000-startup-fastify-routes.js | 1790 | 6319 |
| 5000-startup-mion-routes.js | 77 | 128 |
| startup-listen.js | 76 | 80 |
