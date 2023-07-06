# Cold Start metrics

Cold start times are also indicative of how the [serverless version](https://github.com/MionKit/mion/tree/master/packages/serverless) could perform in this regard, as both `@MionKit/http` an `@MionKit/serverless` are just a wrapper around `@MionKit/router` which contains all the logic.

- These metrics show the start time when loading 1 route and then increasing the number or routes loaded until 10,000.
- The `startup time` is the time it takes to load the @MionKit/http library itself + create the routes object in memory.
- The `listen time` is the time it takes to parse and generate a flat router so there is no need to process the url when a request come in.
- The `complexity` is the number of iterations done to parse the routes, it depends on the number of routes and hooks, the order they are defined, and few other factors.

####### Metrics

- **Machine:** darwin x64 | 8 vCPUs | 16.0GB Mem
- **Node:** `v16.18.0`
- **Run:** Thu Jul 06 2023 02:04:37 GMT+0100 (Irish Standard Time)
- **Method:** `npm run metrics` (samples: 5)
- **startup:** time elapsed to setup the application
- **listen:** time elapsed until the http server is ready to accept requests (cold start)

|                                   | startup(ms) | listen(ms) | complexity |
| --------------------------------- | ----------- | ---------- | ---------- |
| 1-startup-a-mion-routes.js        | 516.57      | 523        | 2          |
| 1-startup-b-deepkit-routes.js     | 1330.90     | 1332       | NA         |
| 1-startup-c-fastify-routes.js     | 156.04      | 224        | NA         |
| 10-startup-a-mion-routes.js       | 516.35      | 524        | 30         |
| 10-startup-b-deepkit-routes.js    | 1321.95     | 1323       | NA         |
| 10-startup-c-fastify-routes.js    | 147.10      | 224        | NA         |
| 100-startup-a-mion-routes.js      | 519.52      | 529        | 300        |
| 100-startup-b-deepkit-routes.js   | 1401.96     | 1404       | NA         |
| 100-startup-c-fastify-routes.js   | 162.98      | 336        | NA         |
| 1000-startup-a-mion-routes.js     | 517.66      | 535        | 3000       |
| 1000-startup-b-deepkit-routes.js  | 1330.78     | 1332       | NA         |
| 1000-startup-c-fastify-routes.js  | 338.42      | 1324       | NA         |
| 10000-startup-a-mion-routes.js    | 523.82      | 607        | 30000      |
| 10000-startup-b-deepkit-routes.js | 1426.04     | 1428       | NA         |
| 10000-startup-c-fastify-routes.js | 4101.30     | 14398      | NA         |
| startup-listen.js                 | 515.74      | 518        | 0          |
