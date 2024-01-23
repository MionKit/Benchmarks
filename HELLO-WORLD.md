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
* __Node:__ `v18.17.0`
* __Run:__ Tue Jan 23 2024 23:02:45 GMT+0000 (Greenwich Mean Time)
* __Method:__ `autocannon -c 100 -d 40.24 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

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



|           | Version        | Router | Req (R/s)   | Latency (ms) | Output (Mb/s) | Max Memory (Mb) | Max Cpu (%) | Validation | Description                                                                                 |
| :--       | --:            | --:    | :-:         | --:          | --:           | --:             | --:         | :-:        | :--                                                                                         |
| mion.bun  | 0.6.2          | ✓      | 59142.4     | 16.50        | 9.19          | 82              | 112         | ✓          | mion using bun, automatic validation and serialization                                      |
| http-node | 16.18.0        | ✗      | 37409.6     | 26.27        | 6.67          | 89              | 120         | ✗          | bare node http server, should be the theoretical upper limit in node.js performance         |
| fastify   | 4.10.2         | ✓      | 33308.4     | 29.54        | 5.97          | 95              | 119         | -          | Validation using schemas and ajv. schemas are generated manually or using third party tools |
| **mion**  | **0.6.2**      | **✓**  | **30652.0** | **32.12**    | **6.14**      | **98**          | **120**     | **✓**      | **Automatic validation and serialization out of the box**                                   |
| deepkit   | 1.0.1-alpha.75 | ✓      | 27125.6     | 36.36        | 4.84          | 175             | 120         | ✓          | Automatic validation and serialization out of the box                                       |
| hono      | 3.12.6         | ✓      | 26262.8     | 37.57        | 4.68          | 98              | 118         | ✗          | hono node server, manual validation or third party tools                                    |
| hapi      | 21.3.2         | ✓      | 20784.7     | 47.61        | 3.71          | 106             | 127         | ✗          | validation using joi or third party tools                                                   |
| restify   | 11.1.0         | ✓      | 10303.0     | 96.48        | 2.54          | 167             | 145         | ✗          | manual validation or third party tools                                                      |
| express   | 4.18.2         | ✓      | 8112.5      | 122.59       | 1.45          | 135             | 125         | ✗          | manual validation or third party tools                                                      |
