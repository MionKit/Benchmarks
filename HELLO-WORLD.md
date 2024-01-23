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
* __Run:__ Tue Jan 23 2024 02:21:24 GMT+0000 (Greenwich Mean Time)
* __Method:__ `autocannon -c 100 -d 40.2 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

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
| mion.bun  | 0.6.2          | ✓      | 63281.6     | 15.38        | 9.84          | 82              | 105         | ✓          | mion using bun, automatic validation and serialization                                      |
| http-node | 16.18.0        | ✗      | 36608.8     | 26.82        | 6.53          | 83              | 115         | ✗          | bare node http server, should be the theoretical upper limit in node.js performance         |
| fastify   | 4.10.2         | ✓      | 34427.8     | 28.58        | 6.17          | 92              | 126         | -          | Validation using schemas and ajv. schemas are generated manually or using third party tools |
| **mion**  | **0.6.2**      | **✓**  | **30097.2** | **32.76**    | **6.03**      | **95**          | **121**     | **✓**      | **Automatic validation and serialization out of the box**                                   |
| deepkit   | 1.0.1-alpha.75 | ✓      | 26647.6     | 37.02        | 4.75          | 198             | 132         | ✓          | Automatic validation and serialization out of the box                                       |
| hapi      | 21.3.2         | ✓      | 25451.2     | 38.78        | 4.54          | 118             | 116         | ✗          | validation using joi or third party tools                                                   |
| hono      | 3.12.6         | ✓      | 24569.2     | 40.19        | 4.38          | 104             | 118         | ✗          | hono node server, manual validation or third party tools                                    |
| restify   | 11.1.0         | ✓      | 9878.0      | 100.74       | 2.44          | 170             | 140         | ✗          | manual validation or third party tools                                                      |
| express   | 4.18.2         | ✓      | 8012.3      | 124.14       | 1.43          | 132             | 123         | ✗          | manual validation or third party tools                                                      |
