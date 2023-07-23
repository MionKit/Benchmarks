# Cold Starts

Cold start times are measure using the http server but are also indicative of how the [serverless version](https://github.com/MionKit/mion/tree/master/packages/serverless) could perform in this regard, as both `@MionKit/http` an `@MionKit/serverless` are just a wrapper around `@MionKit/router` which contains all the logic.

- These metrics show the start time when loading 1 route and then increasing the number or routes loaded until 5,000 routes.
- The `startup time` is the time it takes to load the @MionKit/http library itself + create the routes object in memory.
- The `listen time` is the time it takes to parse and generate a flat router so there is no need to process the url when a request come in.

## Benchmark Results
* __Machine:__ darwin x64 | 8 vCPUs | 16.0GB Mem
* __Node:__ `v16.18.0`
* __Run:__ Sun Jul 23 2023 03:09:08 GMT+0100 (Irish Standard Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

### Cold starts:  listen time (ms) lower is better 

![benchmarks](assets/public/charts/cold-starts.png)



  | | startup(ms) | listen(ms) |
  |-| -           | -          |
| 10-startup-deepkit-routes.js | 1372 | 1373 |
| 10-startup-fastify-routes.js | 153 | 227 |
| 10-startup-mion-routes.js | 75 | 84 |
| 100-startup-deepkit-routes.js | 1376 | 1377 |
| 100-startup-fastify-routes.js | 170 | 340 |
| 100-startup-mion-routes.js | 74 | 84 |
| 500-startup-deepkit-routes.js | 1370 | 1372 |
| 500-startup-fastify-routes.js | 257 | 802 |
| 500-startup-mion-routes.js | 74 | 86 |
| 1000-startup-deepkit-routes.js | 1379 | 1380 |
| 1000-startup-fastify-routes.js | 357 | 1374 |
| 1000-startup-mion-routes.js | 75 | 90 |
| 2000-startup-deepkit-routes.js | 1416 | 1418 |
| 2000-startup-fastify-routes.js | 569 | 2452 |
| 2000-startup-mion-routes.js | 75 | 106 |
| 3000-startup-deepkit-routes.js | 1392 | 1394 |
| 3000-startup-fastify-routes.js | 844 | 3708 |
| 3000-startup-mion-routes.js | 77 | 116 |
| 5000-startup-deepkit-routes.js | 1410 | 1412 |
| 5000-startup-fastify-routes.js | 1821 | 6485 |
| 5000-startup-mion-routes.js | 78 | 127 |
| startup-listen.js | 78 | 83 |
