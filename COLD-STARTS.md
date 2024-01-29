# Cold Starts

Cold start metrics has been collected using the http server.

These metrics are also indicative of how well the [serverless version](https://github.com/mionkit/mion/tree/master/packages/serverless) performs in this regard, this is because both `@mionkit/http` an `@mionkit/serverless` are simple wrappers around `@mionkit/router` which contains all the logic.

- These metrics show the start time when loading 1 route and then increasing the number or routes loaded until 5,000 routes.
- The `startup time` is the time it takes create the routes + initialize the server.
- The `listen time` is the time it takes to add all the routes to the server and for the server to be ready listening for requests.

We are comparing mion against fastify as we consider it to be the gold standard in node frameworks and against deepkit as we use some of their libraries and has similar functionalities (validation and serialization).

## Benchmark Results

- **Machine:** darwin x64 | 8 vCPUs | 16.0GB Mem
- **Node:** `v20.11.0`
- **Run:** Mon Jan 29 2024 01:57:53 GMT+0000 (Greenwich Mean Time)
- **Method:** `npm run metrics` (samples: 5)
- **startup:** time elapsed to setup the application
- **listen:** time elapsed until the http server is ready to accept requests (cold start)

### Cold starts: listen time (ms) lower is better

![benchmarks](assets/public/charts/cold-starts.png)

|                                | startup(ms) | listen(ms) |
| ------------------------------ | ----------- | ---------- |
| 10-startup-fastify-routes.js   | 135         | 201        |
| 10-startup-mion-routes.js      | 83          | 88         |
| 100-startup-fastify-routes.js  | 145         | 295        |
| 100-startup-mion-routes.js     | 85          | 90         |
| 500-startup-fastify-routes.js  | 214         | 695        |
| 500-startup-mion-routes.js     | 85          | 94         |
| 1000-startup-fastify-routes.js | 320         | 1202       |
| 1000-startup-mion-routes.js    | 86          | 100        |
| 2000-startup-fastify-routes.js | 539         | 2157       |
| 2000-startup-mion-routes.js    | 86          | 110        |
| 3000-startup-fastify-routes.js | 918         | 3414       |
| 3000-startup-mion-routes.js    | 86          | 116        |
| 5000-startup-fastify-routes.js | 1726        | 6004       |
| 5000-startup-mion-routes.js    | 87          | 128        |
| startup-listen.js              | 86          | 90         |
