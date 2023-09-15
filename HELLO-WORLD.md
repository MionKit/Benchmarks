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
* __Run:__ Fri Sep 15 2023 01:58:11 GMT+0100 (Irish Standard Time)
* __Method:__ `autocannon -c 100 -d 40.03 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

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



|           | Version        | Router | Req (R/s)   | Latency (ms) | Output (Mb/s) | Max Memory (Mb) | Max Cpu (%) | Validation | Description                                                                                               |
| :--       | --:            | --:    | :-:         | --:          | --:           | --:             | --:         | :-:        | :--                                                                                                       |
| http-node | 16.18.0        | ✗      | 36277.0     | 27.07        | 6.47          | 86              | 116         | ✗          | Super basic and completely useless bare http server, should be the theoretical upper limit in performance |
| fastify   | 4.10.2         | ✓      | 32503.0     | 30.26        | 5.83          | 92              | 120         | -          | Validation using schemas and ajv. schemas are generated manually or using third party tools               |
| **mion**  | **0.1.0**      | **✓**  | **29408.8** | **33.50**    | **5.89**      | **92**          | **125**     | **✓**      | **Automatic validation and serialization out of the box**                                                 |
| deepkit   | 1.0.1-alpha.75 | ✓      | 27302.0     | 36.12        | 4.87          | 177             | 136         | ✓          | Automatic validation and serialization out of the box                                                     |
| hapi      | 21.3.2         | ✓      | 24191.6     | 40.82        | 4.31          | 116             | 126         | ✗          | validation using joi or third party tools                                                                 |
| restify   | 11.1.0         | ✓      | 10375.4     | 95.78        | 2.56          | 99              | 121         | ✗          | manual validation or third party tools                                                                    |
| express   | 4.18.2         | ✓      | 7876.1      | 126.32       | 1.40          | 129             | 123         | ✗          | manual validation or third party tools                                                                    |
