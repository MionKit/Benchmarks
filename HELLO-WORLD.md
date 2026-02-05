<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="./assets/images/logo-dark.svg?raw=true">
    <source media="(prefers-color-scheme: light)" srcset="./assets/images/logo.svg?raw=true">
    <img alt='mion, a mikro kit for Typescript Serverless APIs' src='./assets/images/logo.svg?raw=true' width="403" height="150">
  </picture>
</p>

<p align="center">
  <strong>Benchmarks for  @mionkit/node 🚀</strong><br/>
</p>

<p align=center>
  <img src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square&maxAge=99999999" alt="npm"  style="max-width:100%;">
  <img src="https://img.shields.io/badge/license-MIT-97ca00.svg?style=flat-square&maxAge=99999999" alt="npm"  style="max-width:100%;">
</p>

# mion Http Benchmarks (hello world)

## What's tested

These benchmarks test the typical hello world response, not very useful, but shows the theoretical upper limit of each framework.

> The hello world benchmark is related to the router's performance as parameters validation is not involved.

## Why Bun servers are excluded

Bun servers (mion.bun, hono.bun, elysia.bun) are **excluded from the hello world benchmarks** because the benchmarking tool used (autocannon) is not fast enough to accurately measure Bun's performance.

As stated in the [Bun documentation](https://bun.sh/docs/project/benchmarking):

> "For load testing, you _must use_ an HTTP benchmarking tool that is at least as fast as `Bun.serve()`, or your results will be skewed. Some popular Node.js-based benchmarking tools like `autocannon` are not fast enough."

When benchmarking Bun servers with autocannon, the results show inverted performance characteristics (simple endpoints appearing slower than complex ones), which indicates the benchmarking tool itself is the bottleneck, not the server.

**Bun servers are still included in the [main benchmarks](UPDATE-USER.md)** (updateUser endpoint) where the additional processing overhead (validation, serialization, business logic) makes autocannon's limitations less impactful on the results.

For accurate Bun benchmarks, tools like `bombardier`, `oha`, or `http_load_test` (all written in Rust/Go) should be used instead.

```ts
// ### mion ###
export const routes = {
  hello: (): { hello: string } => ({ hello: "world" }),
} satisfies Routes;

// ### Express ###
app.get("/hello", function (req, res) {
  res.json({ hello: "world" });
});
```

## Benchmark Results

- **Machine:** darwin x64 | 8 vCPUs | 16.0GB Mem
- **Node:** `v24.13.0`
- **Run:** Wed Feb 04 2026 23:11:44 GMT+0000 (Greenwich Mean Time)
- **Method:** `autocannon -c 100 -d 30.02 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

#### Req (R/s)

![benchmarks](assets/public/charts-servers-hello/requests.png)

#### Throughput (Mb/s)

![benchmarks](assets/public/charts-servers-hello/throughput.png)

#### Latency (ms)

![benchmarks](assets/public/charts-servers-hello/latency.png)

#### Max Memory (Mb)

![benchmarks](assets/public/charts-servers-hello/maxMem.png)

#### Memory Series (MB)

![benchmarks](assets/public/charts-servers-hello/memSeries.png)

|           |   Version | Router |  Req (R/s)  | Latency (ms) | Output (Mb/s) | Max Memory (Mb) | Max Cpu (%) | Validation | Description                                               |
| :-------- | --------: | -----: | :---------: | -----------: | ------------: | --------------: | ----------: | :--------: | :-------------------------------------------------------- |
| http-node |   16.18.0 |      ✗ |   39257.6   |        24.97 |          7.00 |             129 |         121 |     ✓      | bare node http server with Zod validation                 |
| fastify   |    4.10.2 |      ✓ |   38138.7   |        25.72 |          6.84 |             145 |         102 |     ✓      | Fastify with Zod validation                               |
| **mion**  | **0.6.2** |  **✓** | **36114.9** |    **27.21** |      **7.06** |         **143** |     **117** |   **✓**    | **Automatic validation and serialization out of the box** |
| hono      |    3.12.6 |      ✓ |   29229.9   |        33.70 |          5.21 |             221 |         118 |     ✓      | hono node server with Zod validation                      |
| hapi      |    21.4.4 |      ✓ |   28594.7   |        34.45 |          5.10 |             230 |         123 |     ✓      | Hapi with Zod validation                                  |
| express   |    4.22.1 |      ✓ |   21108.3   |        46.86 |          3.76 |             150 |         117 |     ✓      | Express with Zod validation                               |
