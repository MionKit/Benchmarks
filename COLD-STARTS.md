# Cold Starts

Cold start times are measure using the http server but are also indicative of how the [serverless version](https://github.com/MionKit/mion/tree/master/packages/serverless) could perform in this regard, as both `@MionKit/http` an `@MionKit/serverless` are just a wrapper around `@MionKit/router` which contains all the logic.

- These metrics show the start time when loading 1 route and then increasing the number or routes loaded until 5,000 routes.
- The `startup time` is the time it takes to load the @MionKit/http library itself + create the routes object in memory.
- The `listen time` is the time it takes to parse and generate a flat router so there is no need to process the url when a request come in.

## Benchmark Results
* __Machine:__ darwin x64 | 8 vCPUs | 16.0GB Mem
* __Node:__ `v18.17.0`
* __Run:__ Tue Aug 15 2023 15:20:10 GMT+0100 (Irish Standard Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

### Cold starts:  listen time (ms) lower is better 

![benchmarks](assets/public/charts/cold-starts.png)



  | | startup(ms) | listen(ms) |
  |-| -           | -          |
| 10-startup-deepkit-routes.js | 1240 | 1241 |
| 10-startup-fastify-routes.js | 149 | 215 |
| 10-startup-mion-routes.js | 80 | 88 |
| 100-startup-deepkit-routes.js | 1244 | 1245 |
| 100-startup-fastify-routes.js | 162 | 319 |
| 100-startup-mion-routes.js | 79 | 87 |
| 500-startup-deepkit-routes.js | 1236 | 1237 |
| 500-startup-fastify-routes.js | 237 | 746 |
| 500-startup-mion-routes.js | 78 | 89 |
| 1000-startup-deepkit-routes.js | 1241 | 1243 |
| 1000-startup-fastify-routes.js | 337 | 1247 |
| 1000-startup-mion-routes.js | 79 | 93 |
| 2000-startup-deepkit-routes.js | 1254 | 1255 |
| 2000-startup-fastify-routes.js | 551 | 2319 |
| 2000-startup-mion-routes.js | 80 | 103 |
| 3000-startup-deepkit-routes.js | 1274 | 1275 |
| 3000-startup-fastify-routes.js | 843 | 3523 |
| 3000-startup-mion-routes.js | 80 | 113 |
| 5000-startup-deepkit-routes.js | 1286 | 1287 |
| 5000-startup-fastify-routes.js | 1841 | 6456 |
| 5000-startup-mion-routes.js | 82 | 124 |
| startup-listen.js | 82 | 87 |
