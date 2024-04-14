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
* __Node:__ `v20.11.0`
* __Run:__ Sun Mar 24 2024 03:12:52 GMT+0000 (Greenwich Mean Time)
* __Method:__ `autocannon -c 100 -d 40.32 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

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



|              | Version   | Router | Req (R/s)   | Latency (ms) | Output (Mb/s) | Max Memory (Mb) | Max Cpu (%) | Validation | Description                                                                         |
| :--          | --:       | --:    | :-:         | --:          | --:           | --:             | --:         | :-:        | :--                                                                                 |
| hono.bun     | 3.12.6    | ✓      | 67727.6     | 14.38        | 9.04          | 63              | 108         | ✗          | hono bun server, manual validation or third party tools                             |
| **mion.bun** | **0.6.2** | **✓**  | **62457.2** | **15.58**    | **9.71**      | **81**          | **110**     | **✓**      | **mion using bun, automatic validation and serialization**                          |
| elysia.bun   | 0.7.5     | ✓      | 54493.6     | 18.07        | 14.60         | 49              | 108         | ✓          | bun FrameWork with validation using TypeBox                                         |
| http-node    | 16.18.0   | ✗      | 36443.0     | 26.94        | 6.50          | 79              | 124         | ✗          | bare node http server, should be the theoretical upper limit in node.js performance |
| fastify      | 4.10.2    | ✓      | 36173.8     | 27.20        | 6.49          | 86              | 120         | -          | Validation using schemas and ajv. schemas are generated manually                    |
| **mion**     | **0.6.2** | **✓**  | **31552.1** | **31.23**    | **6.32**      | **87**          | **113**     | **✓**      | **Automatic validation and serialization out of the box**                           |
| hapi         | 21.3.2    | ✓      | 25139.6     | 39.27        | 4.48          | 117             | 130         | ✗          | validation using joi or third party tools                                           |
| hono         | 3.12.6    | ✓      | 24847.6     | 39.75        | 4.43          | 95              | 118         | ✗          | hono node server, manual validation or third party tools                            |
| restify      | 11.1.0    | ✓      | 10074.0     | 98.73        | 2.49          | 160             | 141         | ✗          | manual validation or third party tools                                              |
| express      | 4.18.2    | ✓      | 7771.3      | 128.01       | 1.39          | 121             | 126         | ✗          | manual validation or third party tools                                              |
