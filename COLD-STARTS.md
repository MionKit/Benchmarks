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
* __Run:__ Sat Oct 07 2023 14:24:50 GMT+0100 (Irish Standard Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

### Cold starts:  listen time (ms) lower is better 

![benchmarks](assets/public/charts/cold-starts.png)



  | | startup(ms) | listen(ms) |
  |-| -           | -          |
| 10-startup-deepkit-routes.js | 1257 | 1258 |
| 10-startup-fastify-routes.js | 154 | 221 |
| 10-startup-mion-routes.js | 82 | 89 |
| 100-startup-deepkit-routes.js | 1260 | 1262 |
| 100-startup-fastify-routes.js | 164 | 322 |
| 100-startup-mion-routes.js | 81 | 89 |
| 500-startup-deepkit-routes.js | 1259 | 1261 |
| 500-startup-fastify-routes.js | 238 | 751 |
| 500-startup-mion-routes.js | 81 | 91 |
| 1000-startup-deepkit-routes.js | 1251 | 1252 |
| 1000-startup-fastify-routes.js | 340 | 1249 |
| 1000-startup-mion-routes.js | 82 | 95 |
| 2000-startup-deepkit-routes.js | 1268 | 1269 |
| 2000-startup-fastify-routes.js | 559 | 2323 |
| 2000-startup-mion-routes.js | 82 | 106 |
| 3000-startup-deepkit-routes.js | 1288 | 1290 |
| 3000-startup-fastify-routes.js | 840 | 3512 |
| 3000-startup-mion-routes.js | 83 | 114 |
| 5000-startup-deepkit-routes.js | 1305 | 1307 |
| 5000-startup-fastify-routes.js | 1851 | 6475 |
| 5000-startup-mion-routes.js | 84 | 127 |
| startup-listen.js | 85 | 90 |
