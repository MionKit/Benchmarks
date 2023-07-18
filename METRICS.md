# Cold Start metrics

Cold start times are measure using the http server but are also indicative of how the [serverless version](https://github.com/MionKit/mion/tree/master/packages/serverless) could perform in this regard, as both `@MionKit/http` an `@MionKit/serverless` are just a wrapper around `@MionKit/router` which contains all the logic.

- These metrics show the start time when loading 1 route and then increasing the number or routes loaded until 5,000 routes.
- The `startup time` is the time it takes to load the @MionKit/http library itself + create the routes object in memory.
- The `listen time` is the time it takes to parse and generate a flat router so there is no need to process the url when a request come in.

## Metrics
* __Machine:__ darwin x64 | 8 vCPUs | 16.0GB Mem
* __Node:__ `v16.18.0`
* __Run:__ Tue Jul 18 2023 21:26:55 GMT+0100 (Irish Standard Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

### Cold starts:  listen time (ms) lower is better 

![benchmarks](assets/public/charts/cold-starts.png)



  | | startup(ms) | listen(ms) |
  |-| -           | -          |
| 10-startup-deepkit-routes.js | 1469 | 1471 |
| 10-startup-fastify-routes.js | 152 | 224 |
| 10-startup-mion-routes.js | 550 | 556 |
| 100-startup-deepkit-routes.js | 1454 | 1455 |
| 100-startup-fastify-routes.js | 168 | 345 |
| 100-startup-mion-routes.js | 547 | 555 |
| 500-startup-deepkit-routes.js | 1462 | 1464 |
| 500-startup-fastify-routes.js | 256 | 803 |
| 500-startup-mion-routes.js | 546 | 556 |
| 1000-startup-deepkit-routes.js | 1483 | 1484 |
| 1000-startup-fastify-routes.js | 355 | 1343 |
| 1000-startup-mion-routes.js | 550 | 564 |
| 2000-startup-deepkit-routes.js | 1472 | 1474 |
| 2000-startup-fastify-routes.js | 570 | 2444 |
| 2000-startup-mion-routes.js | 549 | 576 |
| 3000-startup-deepkit-routes.js | 1482 | 1484 |
| 3000-startup-fastify-routes.js | 836 | 3662 |
| 3000-startup-mion-routes.js | 548 | 583 |
| 4000-startup-deepkit-routes.js | 1510 | 1511 |
| 4000-startup-fastify-routes.js | 1241 | 4904 |
| 4000-startup-mion-routes.js | 546 | 585 |
| 5000-startup-deepkit-routes.js | 1496 | 1497 |
| 5000-startup-fastify-routes.js | 1779 | 6365 |
| 5000-startup-mion-routes.js | 559 | 605 |
| startup-listen.js | 586 | 589 |
