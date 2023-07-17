# Cold Start metrics

Cold start times are measure using the http server but are also indicative of how the [serverless version](https://github.com/MionKit/mion/tree/master/packages/serverless) could perform in this regard, as both `@MionKit/http` an `@MionKit/serverless` are just a wrapper around `@MionKit/router` which contains all the logic.

- These metrics show the start time when loading 1 route and then increasing the number or routes loaded until 5,000 routes.
- The `startup time` is the time it takes to load the @MionKit/http library itself + create the routes object in memory.
- The `listen time` is the time it takes to parse and generate a flat router so there is no need to process the url when a request come in.

## Metrics
* __Machine:__ darwin x64 | 8 vCPUs | 16.0GB Mem
* __Node:__ `v16.18.0`
* __Run:__ Mon Jul 17 2023 23:02:18 GMT+0100 (Irish Standard Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

### Cold starts:  listen time (ms) lower is better 

![benchmarks](assets/public/charts/cold-starts.png)



  | | startup(ms) | listen(ms) |
  |-| -           | -          |
| 10-startup-deepkit-routes.js | 1440 | 1442 |
| 10-startup-fastify-routes.js | 149 | 221 |
| 10-startup-mion-routes.js | 545 | 551 |
| 100-startup-deepkit-routes.js | 1443 | 1445 |
| 100-startup-fastify-routes.js | 166 | 334 |
| 100-startup-mion-routes.js | 541 | 549 |
| 500-startup-deepkit-routes.js | 1451 | 1453 |
| 500-startup-fastify-routes.js | 251 | 795 |
| 500-startup-mion-routes.js | 540 | 550 |
| 1000-startup-deepkit-routes.js | 1462 | 1463 |
| 1000-startup-fastify-routes.js | 354 | 1335 |
| 1000-startup-mion-routes.js | 543 | 556 |
| 2000-startup-deepkit-routes.js | 1453 | 1455 |
| 2000-startup-fastify-routes.js | 567 | 2420 |
| 2000-startup-mion-routes.js | 542 | 568 |
| 3000-startup-deepkit-routes.js | 1475 | 1476 |
| 3000-startup-fastify-routes.js | 827 | 3623 |
| 3000-startup-mion-routes.js | 546 | 580 |
| 4000-startup-deepkit-routes.js | 1484 | 1486 |
| 4000-startup-fastify-routes.js | 1236 | 4873 |
| 4000-startup-mion-routes.js | 543 | 582 |
| 5000-startup-deepkit-routes.js | 1484 | 1486 |
| 5000-startup-fastify-routes.js | 1767 | 6285 |
| 5000-startup-mion-routes.js | 550 | 595 |
| startup-listen.js | 604 | 607 |
