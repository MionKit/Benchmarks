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

## Benchmark Results

* __Machine:__ darwin arm64 | 12 vCPUs | 16.0GB Mem
* __Node:__ `v24.13.0`
* __Run:__ Wed Apr 15 2026 22:04:55 GMT+0100 (Irish Standard Time)
* __Method:__ `autocannon -c 100 -d 20.099952 -p 1 localhost:3000` (two rounds; one to warm-up, one to measure)

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



|              | Version   | Router | Req (R/s)    | Latency (ms) | Output (Mb/s) | Max Memory (Mb) | Max Cpu (%) | Validation | Description                                                |
| :--          | --:       | --:    | :-:          | --:          | --:           | --:             | --:         | :-:        | :--                                                        |
| elysia.bun   | 1.0.0     | ✓      | 124499.5     | 0.77         | 14.84         | 55              | 109         | ✓          | Elysia framework with TypeBox validation                   |
| hono.bun     | 3.12.6    | ✓      | 110404.7     | 0.87         | 13.16         | 67              | 109         | ✓          | hono bun server with Zod validation                        |
| **mion.bun** | **0.6.2** | **✓**  | **101825.0** | **0.94**     | **15.25**     | **60**          | **109**     | **✓**      | **mion using bun, automatic validation and serialization** |
| http-node    | 16.18.0   | ✗      | 84535.9      | 1.14         | 15.08         | 133             | 114         | ✓          | bare node http server with Zod validation                  |
| **mion**     | **0.6.2** | **✓**  | **73443.0**  | **1.32**     | **14.29**     | **139**         | **114**     | **✓**      | **Automatic validation and serialization out of the box**  |
| hono         | 3.12.6    | ✓      | 73011.9      | 1.33         | 11.98         | 145             | 114         | ✓          | hono node server with Zod validation                       |
| fastify      | 5.7.4     | ✓      | 59551.2      | 1.63         | 10.68         | 144             | 104         | ✓          | Fastify with native JSON Schema validation                 |
| hapi         | 21.4.4    | ✓      | 58388.5      | 1.66         | 10.41         | 219             | 108         | ✓          | Hapi with Zod validation                                   |
| express      | 5.2.1     | ✓      | 56729.9      | 1.71         | 10.12         | 151             | 106         | ✓          | Express with Zod validation                                |
