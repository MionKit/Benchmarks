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
* __Run:__ Mon Jan 29 2024 22:27:22 GMT+0000 (Greenwich Mean Time)
* __Method:__ `autocannon -c 100 -d 40.02 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

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
| **mion.bun** | **0.6.2** | **✓**  | **63724.8** | **15.19**    | **9.91**      | **87**          | **107**     | **✓**      | **mion using bun, automatic validation and serialization**                          |
| http-node    | 16.18.0   | ✗      | 39481.6     | 24.83        | 7.04          | 81              | 129         | ✗          | bare node http server, should be the theoretical upper limit in node.js performance |
| fastify      | 4.10.2    | ✓      | 39065.6     | 25.10        | 7.00          | 87              | 123         | -          | Validation using schemas and ajv. schemas are generated manually                    |
| **mion**     | **0.6.2** | **✓**  | **33488.6** | **29.35**    | **6.71**      | **91**          | **127**     | **✓**      | **Automatic validation and serialization out of the box**                           |
| hono         | 3.12.6    | ✓      | 29306.0     | 33.61        | 5.23          | 89              | 123         | ✗          | hono node server, manual validation or third party tools                            |
| hapi         | 21.3.2    | ✓      | 26155.6     | 37.72        | 4.66          | 101             | 128         | ✗          | validation using joi or third party tools                                           |
| restify      | 11.1.0    | ✓      | 10475.8     | 94.94        | 2.59          | 165             | 144         | ✗          | manual validation or third party tools                                              |
| express      | 4.18.2    | ✓      | 8172.9      | 121.70       | 1.46          | 121             | 126         | ✗          | manual validation or third party tools                                              |
