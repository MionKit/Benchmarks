<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="./assets/images/logo-dark.svg?raw=true">
    <source media="(prefers-color-scheme: light)" srcset="./assets/images/logo.svg?raw=true">
    <img alt='mion, a mikro kit for Typescript Serverless APIs' src='./assets/images/logo.svg?raw=true' width="403" height="150">
  </picture>
</p>

<p align="center">
  <strong>Benchmarks for  @mionjs/platform-node 🚀</strong><br/>
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

* __Machine:__ darwin arm64 | 12 vCPUs | 16.0GB Mem
* __Node:__ `v24.13.0`
* __Run:__ Sat Mar 07 2026 21:40:03 GMT+0000 (Greenwich Mean Time)
* __Method:__ `autocannon -c 100 -d 4 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

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



|           | Version   | Router | Req (R/s)    | Latency (ms) | Output (Mb/s) | Max Memory (Mb) | Max Cpu (%) | Validation | Description                                               |
| :--       | --:       | --:    | :-:          | --:          | --:           | --:             | --:         | :-:        | :--                                                       |
| http-node | 16.18.0   | ✗      | 116896.0     | 8.07         | 20.85         | 148             | 106         | ✓          | bare node http server with Zod validation                 |
| **mion**  | **0.6.2** | **✓**  | **102784.0** | **9.24**     | **20.00**     | **157**         | **110**     | **✓**      | **Automatic validation and serialization out of the box** |
| hono      | 3.12.6    | ✓      | 97712.0      | 9.73         | 16.02         | 128             | 109         | ✓          | hono node server with Zod validation                      |
| hapi      | 21.4.4    | ✓      | 80928.0      | 11.85        | 14.43         | 165             | 112         | ✓          | Hapi with Zod validation                                  |
| fastify   | 5.7.4     | ✓      | 79536.0      | 12.04        | 14.26         | 121             | 106         | ✓          | Fastify with native JSON Schema validation                |
| express   | 5.2.1     | ✓      | 71456.0      | 13.48        | 12.74         | 129             | 107         | ✓          | Express with Zod validation                               |
