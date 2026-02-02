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

# mion Http Benchmarks (hello world)

## What's tested

These benchmarks test the typical hello world response, not very useful, but shows the theoretical upper limit of each framework.

> The hello world benchmark is related to the router's performance as parameters validation is not involved.

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

* __Machine:__ darwin x64 | 8 vCPUs | 16.0GB Mem
* __Node:__ `v24.13.0`
* __Run:__ Mon Feb 02 2026 18:10:41 GMT+0000 (Greenwich Mean Time)
* __Method:__ `autocannon -c 100 -d 40.01 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

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



|              | Version   | Router | Req (R/s)   | Latency (ms) | Output (Mb/s) | Max Memory (Mb) | Max Cpu (%) | Validation | Description                                                |
| :--          | --:       | --:    | :-:         | --:          | --:           | --:             | --:         | :-:        | :--                                                        |
| http-node    | 16.18.0   | ✗      | 40033.6     | 24.49        | 7.14          | 135             | 122         | ✓          | bare node http server with Zod validation                  |
| fastify      | 4.10.2    | ✓      | 38732.8     | 25.33        | 6.95          | 141             | 121         | ✓          | Fastify with Zod validation                                |
| **mion**     | **0.6.2** | **✓**  | **36230.4** | **27.10**    | **6.53**      | **218**         | **117**     | **✓**      | **Automatic validation and serialization out of the box**  |
| hono         | 3.12.6    | ✓      | 30116.8     | 32.70        | 5.37          | 221             | 119         | ✓          | hono node server with Zod validation                       |
| hapi         | 21.4.4    | ✓      | 28455.6     | 34.63        | 5.07          | 239             | 124         | ✓          | Hapi with Zod validation                                   |
| express      | 4.22.1    | ✓      | 21273.6     | 46.48        | 3.79          | 149             | 117         | ✓          | Express with Zod validation                                |
| hono.bun     | 3.12.6    | ✓      | 15730.2     | 63.03        | 2.10          | 52              | 103         | ✓          | hono bun server with Zod validation                        |
| **mion.bun** | **0.6.2** | **✓**  | **11961.4** | **83.02**    | **1.62**      | **78**          | **103**     | **✓**      | **mion using bun, automatic validation and serialization** |
| elysia.bun   | 0.7.5     | ✓      | 8072.0      | 123.21       | 2.16          | 43              | 102         | ✓          | bun FrameWork with validation using TypeBox                |
