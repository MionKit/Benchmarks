# History metrics

This is the performance evolution of the mion http library across new versions.

The tricky part is to get the measurements always in the same machine to get similar results.

## Metrics

- **Machine:** darwin x64 | 8 vCPUs | 16.0GB Mem
- **Node:** `v16.18.0`
- **Run:** Sat Jul 08 2023 20:09:04 GMT+0100 (Irish Standard Time)
- **Method:** `npm run metrics` (samples: 5)
- **startup:** time elapsed to setup the application
- **listen:** time elapsed until the http server is ready to accept requests (cold start)

### Cold starts: listen time (ms) lower is better

![benchmarks](assets/public/charts/cold-starts.png)

|                                | startup(ms) | listen(ms) |
| ------------------------------ | ----------- | ---------- |
| 10-startup-deepkit-routes.js   | 1496        | 1497       |
| 10-startup-fastify-routes.js   | 159         | 237        |
| 10-startup-mion-routes.js      | 502         | 508        |
| 100-startup-deepkit-routes.js  | 1467        | 1468       |
| 100-startup-fastify-routes.js  | 179         | 381        |
| 100-startup-mion-routes.js     | 506         | 513        |
| 500-startup-deepkit-routes.js  | 1632        | 1633       |
| 500-startup-fastify-routes.js  | 263         | 836        |
| 500-startup-mion-routes.js     | 503         | 513        |
| 1000-startup-deepkit-routes.js | 1416        | 1418       |
| 1000-startup-fastify-routes.js | 425         | 1524       |
| 1000-startup-mion-routes.js    | 503         | 516        |
| 2000-startup-deepkit-routes.js | 1468        | 1469       |
| 2000-startup-fastify-routes.js | 603         | 2646       |
| 2000-startup-mion-routes.js    | 505         | 533        |
| 3000-startup-deepkit-routes.js | 1464        | 1465       |
| 3000-startup-fastify-routes.js | 874         | 3765       |
| 3000-startup-mion-routes.js    | 502         | 536        |
| 4000-startup-deepkit-routes.js | 1516        | 1518       |
| 4000-startup-fastify-routes.js | 1311        | 5212       |
| 4000-startup-mion-routes.js    | 500         | 537        |
| 5000-startup-deepkit-routes.js | 1608        | 1610       |
| 5000-startup-fastify-routes.js | 2039        | 7468       |
| 5000-startup-mion-routes.js    | 498         | 542        |
| startup-listen.js              | 537         | 539        |
