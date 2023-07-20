# Cold Start metrics

Cold start times are measure using the http server but are also indicative of how the [serverless version](https://github.com/MionKit/mion/tree/master/packages/serverless) could perform in this regard, as both `@MionKit/http` an `@MionKit/serverless` are just a wrapper around `@MionKit/router` which contains all the logic.

- These metrics show the start time when loading 1 route and then increasing the number or routes loaded until 5,000 routes.
- The `startup time` is the time it takes to load the @MionKit/http library itself + create the routes object in memory.
- The `listen time` is the time it takes to parse and generate a flat router so there is no need to process the url when a request come in.

## Metrics
* __Machine:__ darwin x64 | 8 vCPUs | 16.0GB Mem
* __Node:__ `v16.18.0`
* __Run:__ Wed Jul 19 2023 19:12:04 GMT+0100 (Irish Standard Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

### Cold starts:  listen time (ms) lower is better 

![benchmarks](assets/public/charts/cold-starts.png)



  | | startup(ms) | listen(ms) |
  |-| -           | -          |
| 10-startup-deepkit-routes.js | 1462 | 1464 |
| 10-startup-fastify-routes.js | 152 | 225 |
| 10-startup-mion-routes.js | 553 | 560 |
| 100-startup-deepkit-routes.js | 1463 | 1465 |
| 100-startup-fastify-routes.js | 169 | 345 |
| 100-startup-mion-routes.js | 551 | 558 |
| 500-startup-deepkit-routes.js | 1468 | 1470 |
| 500-startup-fastify-routes.js | 257 | 807 |
| 500-startup-mion-routes.js | 556 | 567 |
| 1000-startup-deepkit-routes.js | 1485 | 1486 |
| 1000-startup-fastify-routes.js | 358 | 1357 |
| 1000-startup-mion-routes.js | 560 | 574 |
| 2000-startup-deepkit-routes.js | 1465 | 1467 |
| 2000-startup-fastify-routes.js | 572 | 2455 |
| 2000-startup-mion-routes.js | 555 | 583 |
| 3000-startup-deepkit-routes.js | 1482 | 1484 |
| 3000-startup-fastify-routes.js | 837 | 3694 |
| 3000-startup-mion-routes.js | 565 | 601 |
| 4000-startup-deepkit-routes.js | 1502 | 1503 |
| 4000-startup-fastify-routes.js | 1255 | 4971 |
| 4000-startup-mion-routes.js | 557 | 596 |
| 5000-startup-deepkit-routes.js | 1491 | 1493 |
| 5000-startup-fastify-routes.js | 1801 | 6448 |
| 5000-startup-mion-routes.js | 565 | 612 |
| startup-listen.js | 578 | 581 |
