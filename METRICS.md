# Cold Start metrics

Cold start times are also indicative of how the [serverless version](https://github.com/MionKit/mion/tree/master/packages/serverless) could perform in this regard, as both `@MionKit/http` an `@MionKit/serverless` are just a wrapper around `@MionKit/router` which contains all the logic.

- These metrics show the start time when loading 1 route and then increasing the number or routes loaded until 10,000.
- The `startup time` is the time it takes to load the @MionKit/http library itself + create the routes object in memory.
- The `listen time` is the time it takes to parse and generate a flat router so there is no need to process the url when a request come in.
- The `complexity` is the number of iterations done to parse the routes, it depends on the number of routes and hooks, the order they are defined, and few other factors.

################# Metrics

- **Machine:** darwin x64 | 8 vCPUs | 16.0GB Mem
- **Node:** `v16.18.0`
- **Run:** Fri Jul 07 2023 02:02:58 GMT+0100 (Irish Standard Time)
- **Method:** `npm run metrics` (samples: 5)
- **startup:** time elapsed to setup the application
- **listen:** time elapsed until the http server is ready to accept requests (cold start)

|                                 | startup(ms) | listen(ms) | complexity |
| ------------------------------- | ----------- | ---------- | ---------- |
| 1-startup-deepkit-routes.js     | 1413.17     | 1415       | NA         |
| 1-startup-fastify-routes.js     | 172.91      | 237        | NA         |
| 1-startup-mion-routes.js        | 545.50      | 549        | 2          |
| 10-startup-deepkit-routes.js    | 1487.21     | 1489       | NA         |
| 10-startup-fastify-routes.js    | 148.85      | 225        | NA         |
| 10-startup-mion-routes.js       | 568.02      | 572        | 30         |
| 100-startup-deepkit-routes.js   | 1394.54     | 1396       | NA         |
| 100-startup-fastify-routes.js   | 165.82      | 345        | NA         |
| 100-startup-mion-routes.js      | 526.59      | 531        | 300        |
| 1000-startup-deepkit-routes.js  | 1410.95     | 1413       | NA         |
| 1000-startup-fastify-routes.js  | 353.65      | 1356       | NA         |
| 1000-startup-mion-routes.js     | 548.72      | 557        | 3000       |
| 10000-startup-deepkit-routes.js | 1555.60     | 1557       | NA         |
| 10000-startup-fastify-routes.js | 3920.21     | 14728      | NA         |
| 10000-startup-mion-routes.js    | 545.69      | 582        | 30000      |
| startup-listen.js               | 519.68      | 522        | 0          |
