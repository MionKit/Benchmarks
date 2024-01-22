# Cold Starts

Cold start metrics has been collected using the http server.

These metrics are also indicative of how well the [serverless version](https://github.com/mionkit/mion/tree/master/packages/serverless) performs in this regard, this is because both `@mionkit/http` an `@mionkit/serverless` are simple wrappers around `@mionkit/router` which contains all the logic.

- These metrics show the start time when loading 1 route and then increasing the number or routes loaded until 5,000 routes.
- The `startup time` is the time it takes create the routes + initialize the server.
- The `listen time` is the time it takes to add all the routes to the server and for the server to be ready listening for requests.

We are comparing mion against fastify as we consider it to be the gold standard in node frameworks and against deepkit as we use some of their libraries and has similar functionalities (validation and serialization).

## Benchmark Results

- **Machine:** darwin x64 | 8 vCPUs | 16.0GB Mem
- **Node:** `v18.17.0`
- **Run:** Mon Jan 22 2024 00:34:18 GMT+0000 (Greenwich Mean Time)
- **Method:** `npm run metrics` (samples: 5)
- **startup:** time elapsed to setup the application
- **listen:** time elapsed until the http server is ready to accept requests (cold start)

### Cold starts: listen time (ms) lower is better

![benchmarks](assets/public/charts/cold-starts.png)

|                                | startup(ms) | listen(ms) |
| ------------------------------ | ----------- | ---------- |
| 10-startup-deepkit-routes.js   | 1237        | 1239       |
| 10-startup-fastify-routes.js   | 148         | 216        |
| 10-startup-mion-routes.js      | 85          | 92         |
| 100-startup-deepkit-routes.js  | 1240        | 1242       |
| 100-startup-fastify-routes.js  | 159         | 315        |
| 100-startup-mion-routes.js     | 83          | 90         |
| 500-startup-deepkit-routes.js  | 1232        | 1234       |
| 500-startup-fastify-routes.js  | 232         | 737        |
| 500-startup-mion-routes.js     | 83          | 93         |
| 1000-startup-deepkit-routes.js | 1237        | 1239       |
| 1000-startup-fastify-routes.js | 334         | 1230       |
| 1000-startup-mion-routes.js    | 83          | 97         |
| 2000-startup-deepkit-routes.js | 1253        | 1254       |
| 2000-startup-fastify-routes.js | 538         | 2265       |
| 2000-startup-mion-routes.js    | 85          | 107        |
| 3000-startup-deepkit-routes.js | 1261        | 1262       |
| 3000-startup-fastify-routes.js | 816         | 3401       |
| 3000-startup-mion-routes.js    | 87          | 118        |
| 5000-startup-deepkit-routes.js | 1279        | 1281       |
| 5000-startup-fastify-routes.js | 1774        | 6256       |
| 5000-startup-mion-routes.js    | 87          | 130        |
| startup-listen.js              | 85          | 90         |
