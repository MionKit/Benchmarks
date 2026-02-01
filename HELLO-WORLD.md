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
* __Run:__ Fri Jan 30 2026 18:09:20 GMT+0000 (Greenwich Mean Time)
* __Method:__ `autocannon -c 100 -d 40.14 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

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
| hono.bun     | 3.12.6    | ✓      | 82670.4     | 11.65        | 11.04         | 66              | 109         | ✗          | hono bun server, manual validation or third party tools                             |
| elysia.bun   | 0.7.5     | ✓      | 64476.0     | 15.17        | 17.28         | 50              | 108         | ✓          | bun FrameWork with validation using TypeBox                                         |
| fastify      | 4.10.2    | ✓      | 36411.2     | 26.95        | 6.53          | 143             | 113         | -          | Validation using schemas and ajv. schemas are generated manually                    |
| http-node    | 16.18.0   | ✗      | 29530.8     | 33.37        | 5.27          | 127             | 110         | ✗          | bare node http server, should be the theoretical upper limit in node.js performance |
| **mion.bun** | **0.6.2** | **✓**  | **27650.8** | **35.68**    | **8.94**      | **107**         | **104**     | **✓**      | **mion using bun, automatic validation and serialization**                          |
| hapi         | 21.3.2    | ✓      | 27312.0     | 36.10        | 4.87          | 234             | 110         | ✗          | validation using joi or third party tools                                           |
| hono         | 3.12.6    | ✓      | 25245.5     | 39.11        | 4.50          | 218             | 111         | ✗          | hono node server, manual validation or third party tools                            |
| express      | 4.18.2    | ✓      | 19821.1     | 49.92        | 3.53          | 146             | 115         | ✗          | manual validation or third party tools                                              |
| **mion**     | **0.6.2** | **✓**  | **N/A**     | **N/A**      | **N/A**       | **0**           | **0**       | **✓**      | **Automatic validation and serialization out of the box**                           |
| restify      | 11.1.0    | ✓      | N/A         | N/A          | N/A           | 0               | 0           | ✗          | manual validation or third party tools                                              |
