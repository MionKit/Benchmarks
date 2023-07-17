# Cold Start metrics

Cold start times are measure using the http server but are also indicative of how the [serverless version](https://github.com/MionKit/mion/tree/master/packages/serverless) could perform in this regard, as both `@MionKit/http` an `@MionKit/serverless` are just a wrapper around `@MionKit/router` which contains all the logic.

- These metrics show the start time when loading 1 route and then increasing the number or routes loaded until 5,000 routes.
- The `startup time` is the time it takes to load the @MionKit/http library itself + create the routes object in memory.
- The `listen time` is the time it takes to parse and generate a flat router so there is no need to process the url when a request come in.

## Metrics
* __Machine:__ darwin x64 | 8 vCPUs | 16.0GB Mem
* __Node:__ `v16.18.0`
* __Run:__ Mon Jul 17 2023 21:56:07 GMT+0100 (Irish Standard Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

### Cold starts:  listen time (ms) lower is better 

![benchmarks](assets/public/charts/cold-starts.png)



  | | startup(ms) | listen(ms) |
  |-| -           | -          |
| 10-startup-deepkit-routes.js | 1438 | 1439 |
| 10-startup-fastify-routes.js | 149 | 221 |
| 10-startup-mion-routes.js | 547 | 554 |
| 100-startup-deepkit-routes.js | 1446 | 1447 |
| 100-startup-fastify-routes.js | 166 | 334 |
| 100-startup-mion-routes.js | 543 | 551 |
| 500-startup-deepkit-routes.js | 1457 | 1459 |
| 500-startup-fastify-routes.js | 251 | 798 |
| 500-startup-mion-routes.js | 541 | 551 |
| 1000-startup-deepkit-routes.js | 1469 | 1470 |
| 1000-startup-fastify-routes.js | 354 | 1333 |
| 1000-startup-mion-routes.js | 545 | 558 |
| 2000-startup-deepkit-routes.js | 1461 | 1463 |
| 2000-startup-fastify-routes.js | 568 | 2425 |
| 2000-startup-mion-routes.js | 544 | 570 |
| 3000-startup-deepkit-routes.js | 1487 | 1488 |
| 3000-startup-fastify-routes.js | 825 | 3617 |
| 3000-startup-mion-routes.js | 548 | 583 |
| 4000-startup-deepkit-routes.js | 1484 | 1486 |
| 4000-startup-fastify-routes.js | 1239 | 4878 |
| 4000-startup-mion-routes.js | 545 | 584 |
| 5000-startup-deepkit-routes.js | 1490 | 1492 |
| 5000-startup-fastify-routes.js | 1772 | 6292 |
| 5000-startup-mion-routes.js | 554 | 599 |
| startup-listen.js | 620 | 623 |
