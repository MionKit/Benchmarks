<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="./assets/public/logo-dark.svg?raw=true">
    <source media="(prefers-color-scheme: light)" srcset="./assets/public/logo.svg?raw=true">
    <img alt='mion, a mikro kit for Typescript Serverless APIs' src='./assets/public/logo.svg?raw=true' width="403" height="150">
  </picture>
</p>

<p align="center">
  <strong>Benchmarks for  @mionkit/http 🚀</strong><br/>
</p>

<p align=center>
  <img src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square&maxAge=99999999" alt="npm"  style="max-width:100%;">
  <img src="https://img.shields.io/badge/license-MIT-97ca00.svg?style=flat-square&maxAge=99999999" alt="npm"  style="max-width:100%;">
</p>

# using fastify instead natiev http as @mionkit/router wrapper

So the idea of the experiment is to replace `@mionkit/http` that uses native http by a fastify wrapper and check becnhmarks.

**!!! NOTE THAT THE RESULTS of mion in this branch are using `./apps/src/fastMion.ts` instead `@mionkit/http`!!**

### Conclusions:

- **Cold starts** did not improve so look like the slow cold start time ir related to importing the router library. (we might need to look into the option to build this library disabling deepkit's `reflection` in tsconfig when building the library as we only need reflection when developing for unit tests )
- **Request per second and Throughput**: the benchmarks improve when we using a single http method i.e: `fastify.get({method: "GET", handler: () => ...)` but they are worst when redirecting multiple methods to mion router i.e: `fastify.get({method: ["GET", "POST", "PUT", "OPTIONS"], handler: () => ...)`.

> Looks like we should look investigate replacing the http wrapper by a fastify wrapper as this could lead to more performance as well as more battle tested server. But we need to mange to get the performance as when declaring a single http method

### Benchmarks

- **Machine:** darwin x64 | 8 vCPUs | 16.0GB Mem
- **Node:** `v16.18.0`
- **Run:** Fri Jul 07 2023 20:52:27 GMT+0100 (Irish Standard Time)
- **Method:** `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|           |        Version | Router |  Req (R/s)  | Latency (ms) | Output (Mb/s) | Validation | Description                                                                                                |
| :-------- | -------------: | -----: | :---------: | -----------: | ------------: | :--------: | :--------------------------------------------------------------------------------------------------------- |
| node-http |        16.18.0 |      ✗ |   19594.5   |        50.50 |          5.03 |     ✗      | Super basic and completely useless bare http server, should be the theoretical upper limit in performance. |
| fastify   |          4.9.2 |      ✓ |   16831.4   |        58.88 |          4.33 |     -      | Validation is done using schemas and ajv. Schemas must be generated manually or using third party tools.   |
| restify   |          8.6.1 |      ✓ |   11766.4   |        84.41 |          3.04 |     ✗      | Requires third party tools.                                                                                |
| **mion**  |      **0.1.0** |  **✓** | **10778.9** |    **92.19** |      **3.00** |   **✓**    | **Automatic validation out of the box using @deepkit/types.**                                              |
| hapi      |         20.2.2 |      ✓ |   7173.4    |       138.40 |          1.84 |     ✗      | Manual validation using joi, or third party tools.                                                         |
| express   |         4.18.2 |      ✓ |   4497.8    |       221.34 |          1.15 |     ✗      | needs third party tools, or third party tools                                                              |
| deepkit   | 1.0.1-alpha.75 |      ✓ |   1647.8    |       604.28 |          0.42 |     ✓      | Automatic validation out of the box (The ones that made @deepkit/types), Their rpc is way more performant. |
