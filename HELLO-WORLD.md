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
* __Run:__ Sun Feb 01 2026 17:29:41 GMT+0000 (Greenwich Mean Time)
* __Method:__ `autocannon -c 100 -d 40.11 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

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
| hono.bun     | 3.12.6    | ✓      | 80580.8     | 11.95        | 10.76         | 66              | 108         | ✗          | hono bun server, manual validation or third party tools                             |
| elysia.bun   | 0.7.5     | ✓      | 65219.6     | 14.97        | 17.48         | 49              | 106         | ✓          | bun FrameWork with validation using TypeBox                                         |
| **mion.bun** | **0.6.2** | **✓**  | **50218.4** | **19.41**    | **7.57**      | **113**         | **108**     | **✓**      | **mion using bun, automatic validation and serialization**                          |
| http-node    | 16.18.0   | ✗      | 36483.2     | 26.91        | 6.51          | 126             | 124         | ✗          | bare node http server, should be the theoretical upper limit in node.js performance |
| fastify      | 4.10.2    | ✓      | 36275.8     | 27.06        | 6.50          | 142             | 119         | -          | Validation using schemas and ajv. schemas are generated manually                    |
| **mion**     | **0.6.2** | **✓**  | **31235.2** | **31.51**    | **6.11**      | **142**         | **117**     | **✓**      | **Automatic validation and serialization out of the box**                           |
| hapi         | 21.4.4    | ✓      | 26048.4     | 37.88        | 4.65          | 226             | 122         | ✗          | validation using joi or third party tools                                           |
| hono         | 3.12.6    | ✓      | 25814.4     | 38.22        | 4.60          | 223             | 120         | ✗          | hono node server, manual validation or third party tools                            |
| express      | 4.22.1    | ✓      | 20060.8     | 49.32        | 3.58          | 151             | 117         | ✗          | manual validation or third party tools                                              |
| restify      | 11.1.0    | ✓      | N/A         | N/A          | N/A           | 0               | 0           | ✗          | manual validation or third party tools                                              |
