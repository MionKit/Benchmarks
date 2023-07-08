# Cold Start metrics

Cold start times are also indicative of how the [serverless version](https://github.com/MionKit/mion/tree/master/packages/serverless) could perform in this regard, as both `@MionKit/http` an `@MionKit/serverless` are just a wrapper around `@MionKit/router` which contains all the logic.

- These metrics show the start time when loading 1 route and then increasing the number or routes loaded until 10,000.
- The `startup time` is the time it takes to load the @MionKit/http library itself + create the routes object in memory.
- The `listen time` is the time it takes to parse and generate a flat router so there is no need to process the url when a request come in.

###################### Metrics

- **Machine:** darwin x64 | 8 vCPUs | 16.0GB Mem
- **Node:** `v16.18.0`
- **Run:** Sat Jul 08 2023 16:21:45 GMT+0100 (Irish Standard Time)
- **Method:** `npm run metrics` (samples: 5)
- **startup:** time elapsed to setup the application
- **listen:** time elapsed until the http server is ready to accept requests (cold start)

|                                 | startup(ms) | listen(ms) |
| ------------------------------- | ----------- | ---------- |
| 1-startup-deepkit-routes.js     | 1408.19     | 1410       |
| 1-startup-fastify-routes.js     | 148.96      | 221        |
| 1-startup-mion-routes.js        | 513.33      | 519        |
| 10-startup-deepkit-routes.js    | 1417.31     | 1419       |
| 10-startup-fastify-routes.js    | 150.34      | 227        |
| 10-startup-mion-routes.js       | 512.56      | 518        |
| 100-startup-deepkit-routes.js   | 1419.78     | 1422       |
| 100-startup-fastify-routes.js   | 170.70      | 345        |
| 100-startup-mion-routes.js      | 521.66      | 528        |
| 1000-startup-deepkit-routes.js  | 1510.44     | 1512       |
| 1000-startup-fastify-routes.js  | 360.31      | 1359       |
| 1000-startup-mion-routes.js     | 510.82      | 524        |
| 10000-startup-deepkit-routes.js | 1497.32     | 1499       |
| 10000-startup-fastify-routes.js | 7360.49     | 17756      |
| 10000-startup-mion-routes.js    | 511.50      | 578        |
| startup-listen.js               | 537.05      | 539        |
