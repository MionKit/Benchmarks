<p align="center">
  <img alt='MikroKit, Benchmarks' src='./assets/public/logo.svg?raw=true' width="403" height="150">
</p>
<p align="center">
  <strong>Benchmarks for @mikrokit/http.</strong><br/>
</p>

<p align=center>
  <img src="https://img.shields.io/travis/mikrokit/mikrokit.svg?style=flat-square&maxAge=86400" alt="Travis" style="max-width:100%;">
  <img src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square&maxAge=99999999" alt="npm"  style="max-width:100%;">
  <img src="https://img.shields.io/badge/license-MIT-97ca00.svg?style=flat-square&maxAge=99999999" alt="npm"  style="max-width:100%;">
</p>

# Mikrokit Http Benchmarks

- These benchmarks are based on the [fastify benchmarks](https://github.com/fastify/benchmarks) repo!
- `@mikrokit/http` is part of the Mikrokit Framework. It uses and RPC style router!
- **This package shows how fast is Mikrokit comparatively to full featured frameworks like fastify and others.**
- You can find a full list of many other small and faster servers in the original fastify benchmarks repo.
- For metrics (cold-start) see [metrics.md](./METRICS.md)

📚 [Full Mikrokit framework documentation here!](https://github.com/MikroKit/MikroKit)

### Linking @mikrokit/compiled-app

At the moment it is required to link @mikrokit/compiled-app package in your local machine as packages are not yet published to npm and build artifacts are not uploaded to the repo. So you also need to download the main Mikrokit framework repo and build the project.

```
# install all packages
npm i

# link mikrokit compiled app. run bellow command in the directory of your local @mikrokit/compiled-app
npm link

# in the root of this project
npm link @mikrokit/compiled-app

```

### Running & displaying the benchmarks

```sh
# start the tests
npm start

# display results in a table
npm run compare-t
```

### Cold start times

**For cold start times metrics please check [here!](METRICS.md)**

Cold start times are also indicative of how the [serverless version](https://github.com/MikroKit/MikroKit/tree/master/packages/serverless) could perform in cold start times, as both `@mikrokit/http` an `@mikrokit/serverless` are just a wrapper around `@mikrokit/router` which contains all the logic.

### Benchmarks

- **Machine:** darwin x64 | 8 vCPUs | 16.0GB Mem
- **Node:** `v16.18.0`
- **Run:** Tue Oct 25 2022 01:29:49 GMT+0200 (Central European Summer Time)
- **Method:** `autocannon -c 200 -d 120 -p 20 localhost:3000` (two rounds; one to warm-up, one to measure)

|                    |   Version | Router | Requests/s  | Latency (ms) | Throughput/Mb | Validation | Description                                                                                                            |
| :----------------- | --------: | -----: | :---------: | -----------: | ------------: | :--------: | :--------------------------------------------------------------------------------------------------------------------- |
| http-bare          |   10.13.0 |      ✗ |   51867.8   |        76.60 |          9.25 |     ❌     | Super basic and completely useless bare http server, should be the theoretical upper limit in performance.             |
| mikrokit-http-bare |     0.1.0 |      ✗ |   49349.3   |        80.55 |          9.93 |     ❌     | Just the http part of @mikrokit/http, completely useless, just as a reference for performance of the http server part. |
| fastify-schemaless |     4.9.2 |      ✓ |   49112.5   |        80.96 |          8.81 |     🟠     | Fastify without a schema, uses native JSON.stringify instead fast-json-stringify.                                      |
| fastify            |     4.9.2 |      ✓ |   47114.4   |        84.40 |          8.45 |     🟠     | Validation is done using schemas and ajv. Schemas must be generated manually or using third party tools.               |
| restify            |     8.6.1 |      ✓ |   37282.3   |       106.76 |          6.72 |     ❌     | Requires third party tools.                                                                                            |
| **mikrokit**       | **0.1.0** |  **✓** | **35254.7** |   **112.94** |      **7.30** |   **✅**   | **Automatic validation out of the box using @deepkit/types.**                                                          |
| hapi               |    20.2.2 |      ✓ |   32258.9   |       123.45 |          5.75 |     ❌     | Manual validation using joi, or third party tools.                                                                     |
| trpc-router        |    9.27.4 |      ✓ |   28117.1   |       141.70 |          6.22 |     ❌     | Manual validation using zod, or third party tools                                                                      |
| express            |    4.18.2 |      ✓ |   9458.2    |       421.83 |          1.69 |     ❌     | needs third party tools, or third party tools                                                                          |
