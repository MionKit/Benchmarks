# Cold Start metrics

Cold start times are measure using the http server but are also indicative of how the [serverless version](https://github.com/MionKit/mion/tree/master/packages/serverless) could perform in this regard, as both `@MionKit/http` an `@MionKit/serverless` are just a wrapper around `@MionKit/router` which contains all the logic.

- These metrics show the start time when loading 1 route and then increasing the number or routes loaded until 5,000 routes.
- The `startup time` is the time it takes to load the @MionKit/http library itself + create the routes object in memory.
- The `listen time` is the time it takes to parse and generate a flat router so there is no need to process the url when a request come in.

## Metrics
* __Machine:__ darwin x64 | 8 vCPUs | 16.0GB Mem
* __Node:__ `v16.18.0`
* __Run:__ Tue Jul 18 2023 23:41:34 GMT+0100 (Irish Standard Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

### Cold starts:  listen time (ms) lower is better 

![benchmarks](assets/public/charts/cold-starts.png)



  | | startup(ms) | listen(ms) |
  |-| -           | -          |
| 10-startup-deepkit-routes.js | 1470 | 1471 |
| 10-startup-fastify-routes.js | 152 | 224 |
| 10-startup-mion-routes.js | 548 | 555 |
| 100-startup-deepkit-routes.js | 1465 | 1466 |
| 100-startup-fastify-routes.js | 169 | 346 |
| 100-startup-mion-routes.js | 546 | 554 |
| 500-startup-deepkit-routes.js | 1469 | 1471 |
| 500-startup-fastify-routes.js | 257 | 807 |
| 500-startup-mion-routes.js | 546 | 556 |
| 1000-startup-deepkit-routes.js | 1487 | 1489 |
| 1000-startup-fastify-routes.js | 357 | 1352 |
| 1000-startup-mion-routes.js | 550 | 563 |
| 2000-startup-deepkit-routes.js | 1476 | 1477 |
| 2000-startup-fastify-routes.js | 571 | 2451 |
| 2000-startup-mion-routes.js | 548 | 575 |
| 3000-startup-deepkit-routes.js | 1484 | 1485 |
| 3000-startup-fastify-routes.js | 836 | 3681 |
| 3000-startup-mion-routes.js | 548 | 583 |
| 4000-startup-deepkit-routes.js | 1515 | 1516 |
| 4000-startup-fastify-routes.js | 1256 | 4952 |
| 4000-startup-mion-routes.js | 545 | 584 |
| 5000-startup-deepkit-routes.js | 1502 | 1504 |
| 5000-startup-fastify-routes.js | 1791 | 6416 |
| 5000-startup-mion-routes.js | 557 | 603 |
| startup-listen.js | 582 | 585 |
