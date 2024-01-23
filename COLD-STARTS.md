# Cold Starts

Cold start metrics has been collected using the http server.

These metrics are also indicative of how well the [serverless version](https://github.com/mionkit/mion/tree/master/packages/serverless) performs in this regard, this is because both `@mionkit/http` an `@mionkit/serverless` are simple wrappers around `@mionkit/router` which contains all the logic.

- These metrics show the start time when loading 1 route and then increasing the number or routes loaded until 5,000 routes.
- The `startup time` is the time it takes create the routes + initialize the server.
- The `listen time` is the time it takes to add all the routes to the server and for the server to be ready listening for requests.

We are comparing mion against fastify as we consider it to be the gold standard in node frameworks and against deepkit as we use some of their libraries and has similar functionalities (validation and serialization).

## Benchmark Results
* __Machine:__ darwin x64 | 8 vCPUs | 16.0GB Mem
* __Node:__ `v18.17.0`
* __Run:__ Tue Jan 23 2024 02:23:38 GMT+0000 (Greenwich Mean Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

### Cold starts:  listen time (ms) lower is better 

![benchmarks](assets/public/charts/cold-starts.png)



  | | startup(ms) | listen(ms) |
  |-| -           | -          |
| 10-startup-deepkit-routes.js | 1257 | 1259 |
| 10-startup-fastify-routes.js | 149 | 217 |
| 10-startup-mion-routes.js | 85 | 92 |
| 100-startup-deepkit-routes.js | 1252 | 1254 |
| 100-startup-fastify-routes.js | 161 | 318 |
| 100-startup-mion-routes.js | 84 | 91 |
| 500-startup-deepkit-routes.js | 1245 | 1246 |
| 500-startup-fastify-routes.js | 235 | 743 |
| 500-startup-mion-routes.js | 84 | 94 |
| 1000-startup-deepkit-routes.js | 1247 | 1249 |
| 1000-startup-fastify-routes.js | 338 | 1239 |
| 1000-startup-mion-routes.js | 85 | 99 |
| 2000-startup-deepkit-routes.js | 1259 | 1261 |
| 2000-startup-fastify-routes.js | 546 | 2284 |
| 2000-startup-mion-routes.js | 85 | 108 |
| 3000-startup-deepkit-routes.js | 1269 | 1271 |
| 3000-startup-fastify-routes.js | 828 | 3437 |
| 3000-startup-mion-routes.js | 90 | 122 |
| 5000-startup-deepkit-routes.js | 1287 | 1289 |
| 5000-startup-fastify-routes.js | 1793 | 6310 |
| 5000-startup-mion-routes.js | 88 | 132 |
| startup-listen.js | 85 | 90 |
