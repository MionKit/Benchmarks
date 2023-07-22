# Cold Starts

Cold start times are measure using the http server but are also indicative of how the [serverless version](https://github.com/MionKit/mion/tree/master/packages/serverless) could perform in this regard, as both `@MionKit/http` an `@MionKit/serverless` are just a wrapper around `@MionKit/router` which contains all the logic.

- These metrics show the start time when loading 1 route and then increasing the number or routes loaded until 5,000 routes.
- The `startup time` is the time it takes to load the @MionKit/http library itself + create the routes object in memory.
- The `listen time` is the time it takes to parse and generate a flat router so there is no need to process the url when a request come in.

## Benchmark Results
* __Machine:__ darwin x64 | 8 vCPUs | 16.0GB Mem
* __Node:__ `v16.18.0`
* __Run:__ Sat Jul 22 2023 19:37:21 GMT+0100 (Irish Standard Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

### Cold starts:  listen time (ms) lower is better 

![benchmarks](assets/public/charts/cold-starts.png)



  | | startup(ms) | listen(ms) |
  |-| -           | -          |
| 10-startup-deepkit-routes.js | 1380 | 1382 |
| 10-startup-fastify-routes.js | 153 | 226 |
| 10-startup-mion-routes.js | 75 | 83 |
| 100-startup-deepkit-routes.js | 1384 | 1386 |
| 100-startup-fastify-routes.js | 170 | 340 |
| 100-startup-mion-routes.js | 74 | 84 |
| 500-startup-deepkit-routes.js | 1372 | 1373 |
| 500-startup-fastify-routes.js | 258 | 805 |
| 500-startup-mion-routes.js | 74 | 87 |
| 1000-startup-deepkit-routes.js | 1385 | 1387 |
| 1000-startup-fastify-routes.js | 358 | 1382 |
| 1000-startup-mion-routes.js | 75 | 91 |
| 2000-startup-deepkit-routes.js | 1431 | 1433 |
| 2000-startup-fastify-routes.js | 572 | 2466 |
| 2000-startup-mion-routes.js | 75 | 105 |
| 3000-startup-deepkit-routes.js | 1393 | 1395 |
| 3000-startup-fastify-routes.js | 848 | 3718 |
| 3000-startup-mion-routes.js | 77 | 116 |
| 5000-startup-deepkit-routes.js | 1411 | 1413 |
| 5000-startup-fastify-routes.js | 1821 | 6482 |
| 5000-startup-mion-routes.js | 78 | 127 |
| startup-listen.js | 78 | 83 |
