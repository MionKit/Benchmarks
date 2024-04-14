# Cold Starts

Cold start metrics has been collected using the http server.

These metrics are also indicative of how well the [serverless version](https://github.com/mionkit/mion/tree/master/packages/serverless) performs in this regard, this is because both `@mionkit/http` an `@mionkit/serverless` are simple wrappers around `@mionkit/router` which contains all the logic.

- These metrics show the start time when loading 1 route and then increasing the number or routes loaded until 5,000 routes.
- The `startup time` is the time it takes create the routes + initialize the server.
- The `listen time` is the time it takes to add all the routes to the server and for the server to be ready listening for requests.

We are comparing mion against fastify as we consider it to be the gold standard in node frameworks and against deepkit as we use some of their libraries and has similar functionalities (validation and serialization).

## Benchmark Results
* __Machine:__ darwin x64 | 8 vCPUs | 16.0GB Mem
* __Node:__ `v20.11.0`
* __Run:__ Sun Feb 04 2024 16:50:27 GMT+0000 (Greenwich Mean Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

### Cold starts:  listen time (ms) lower is better 

![benchmarks](assets/public/charts/cold-starts.png)



  | | startup(ms) | listen(ms) |
  |-| -           | -          |
| 10-startup-fastify-routes.js | 137 | 205 |
| 10-startup-mion-routes.js | 85 | 90 |
| 100-startup-fastify-routes.js | 149 | 303 |
| 100-startup-mion-routes.js | 86 | 91 |
| 500-startup-fastify-routes.js | 222 | 711 |
| 500-startup-mion-routes.js | 87 | 96 |
| 1000-startup-fastify-routes.js | 327 | 1223 |
| 1000-startup-mion-routes.js | 87 | 101 |
| 2000-startup-fastify-routes.js | 547 | 2200 |
| 2000-startup-mion-routes.js | 86 | 110 |
| 3000-startup-fastify-routes.js | 892 | 3417 |
| 3000-startup-mion-routes.js | 88 | 117 |
| 5000-startup-fastify-routes.js | 1829 | 6284 |
| 5000-startup-mion-routes.js | 88 | 130 |
| startup-listen.js | 86 | 91 |
