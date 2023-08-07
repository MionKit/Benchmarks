# Cold Starts

Cold start times are measure using the http server but are also indicative of how the [serverless version](https://github.com/MionKit/mion/tree/master/packages/serverless) could perform in this regard, as both `@MionKit/http` an `@MionKit/serverless` are just a wrapper around `@MionKit/router` which contains all the logic.

- These metrics show the start time when loading 1 route and then increasing the number or routes loaded until 5,000 routes.
- The `startup time` is the time it takes to load the @MionKit/http library itself + create the routes object in memory.
- The `listen time` is the time it takes to parse and generate a flat router so there is no need to process the url when a request come in.

## Benchmark Results
* __Machine:__ darwin x64 | 8 vCPUs | 16.0GB Mem
* __Node:__ `v18.17.0`
* __Run:__ Mon Aug 07 2023 00:01:31 GMT+0100 (Irish Standard Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

### Cold starts:  listen time (ms) lower is better 

![benchmarks](assets/public/charts/cold-starts.png)



  | | startup(ms) | listen(ms) |
  |-| -           | -          |
| 10-startup-deepkit-routes.js | 1217 | 1219 |
| 10-startup-fastify-routes.js | 148 | 213 |
| 10-startup-mion-routes.js | 73 | 83 |
| 100-startup-deepkit-routes.js | 1230 | 1231 |
| 100-startup-fastify-routes.js | 161 | 317 |
| 100-startup-mion-routes.js | 73 | 83 |
| 500-startup-deepkit-routes.js | 1226 | 1227 |
| 500-startup-fastify-routes.js | 234 | 738 |
| 500-startup-mion-routes.js | 72 | 84 |
| 1000-startup-deepkit-routes.js | 1229 | 1231 |
| 1000-startup-fastify-routes.js | 338 | 1243 |
| 1000-startup-mion-routes.js | 72 | 88 |
| 2000-startup-deepkit-routes.js | 1264 | 1265 |
| 2000-startup-fastify-routes.js | 543 | 2304 |
| 2000-startup-mion-routes.js | 74 | 98 |
| 3000-startup-deepkit-routes.js | 1270 | 1272 |
| 3000-startup-fastify-routes.js | 835 | 3500 |
| 3000-startup-mion-routes.js | 74 | 106 |
| 5000-startup-deepkit-routes.js | 1304 | 1305 |
| 5000-startup-fastify-routes.js | 1878 | 6427 |
| 5000-startup-mion-routes.js | 75 | 118 |
| startup-listen.js | 73 | 79 |
