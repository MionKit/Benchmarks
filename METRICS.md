# Cold Start metrics

These metrics gives a rough idea of cold start times. It is also indicative of how the [serverless version](https://github.com/MikroKit/MikroKit/tree/master/packages/serverless) could perform in cold start times as both `@mikrokit/http` an `@mikrokit/serverless` are just a wrapper around `@mikrokit/router` which contains all the logic.

- The metric show the start time when loading 1 route and then increasing the number or routes loaded in steps until 10000 routes are loaded.
- The `startup time` is the time it takes to load the @mikrokit/http library itself + create the routes object in memory.
- The `listen time` is the time it takes to parse and generate a flat router so there is no need to process the url when a request come in.
- The `complexity` is the number if iterations done to parse the routes, it depends on the order of routes and hooks are defined, how many hooks there are, the level of nesting of the routes, if routes and hooks go together, etc. (The way this test done it is the best possible scenario with only routes, but in a real life app it would not be that much worst)

############ Metrics

- **Machine:** darwin x64 | 8 vCPUs | 16.0GB Mem
- **Node:** `v16.18.0`
- **Run:** Tue Oct 25 2022 00:48:16 GMT+0200 (Central European Summer Time)
- **Method:** `npm run metrics` (samples: 5)
- **startup:** time elapsed to setup the application
- **listen:** time elapsed until the http server is ready to accept requests (cold start)

|                                               | startup(ms) | listen(ms) | complexity |
| --------------------------------------------- | ----------- | ---------- | ---------- |
| 1-startup-routes-no-validate-serialize.js     | 67.04       | 77         | 2          |
| 1-startup-routes-validate-serialize.js        | 67.59       | 78         | 2          |
| 10-startup-routes-no-validate-serialize.js    | 66.43       | 77         | 30         |
| 10-startup-routes-validate-serialize.js       | 66.66       | 77         | 30         |
| 100-startup-routes-no-validate-serialize.js   | 67.53       | 81         | 300        |
| 100-startup-routes-validate-serialize.js      | 67.50       | 81         | 300        |
| 1000-startup-routes-no-validate-serialize.js  | 67.65       | 91         | 3000       |
| 1000-startup-routes-validate-serialize.js     | 67.26       | 90         | 3000       |
| 10000-startup-routes-no-validate-serialize.js | 73.87       | 181        | 30000      |
| 10000-startup-routes-validate-serialize.js    | 74.73       | 181        | 30000      |
| startup-listen.js                             | 67.54       | 71         | 0          |
