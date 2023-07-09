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

# mion fastify experiment

Test creating a wrapper for @mionrouter using fastify instead native http server. plus other benchmarks using fastify with no schemas and mion with serialization and validation disabled.

Added extra benchmarks:

- fastify wrapper aroud mion router, instead native http
- fastify server without schemas
- mion server with validation and serialization enabled

## Conclusions

Against initial tests adding a functional fastify wrapper around the router instead using native http seems to have a detrimental effect.

### Benchmarks

* __Machine:__ darwin x64 | 8 vCPUs | 16.0GB Mem
* __Node:__ `v16.18.0`
* __Run:__ Sun Jul 09 2023 20:33:06 GMT+0100 (Irish Standard Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

#### Req (R/s) 

![benchmarks](assets/public/charts/requests.png)



#### Throughput (Mb/s) 

![benchmarks](assets/public/charts/throughput.png)



#### Latency (ms) 

![benchmarks](assets/public/charts/latency.png)



#### Max Memory (Mb) 

![benchmarks](assets/public/charts/maxMem.png)





|                     | Version        | Router | Req (R/s)   | Latency (ms) | Output (Mb/s) | Max Memory (Mb) | Max Cpu (%) | Validation | Description                                                                                                |
| :--                 | --:            | --:    | :-:         | --:          | --:           | --:             | --:         | :-:        | :--                                                                                                        |
| http-node           | 16.18.0        | ✗      | 19241.3     | 51.48        | 4.94          | 76              | 119         | ✗          | Super basic and completely useless bare http server, should be the theoretical upper limit in performance. |
| fastifynoschemas    | 4.19.2         | ✓      | 16267.9     | 60.96        | 4.19          | 85              | 118         | -          | Validation is done using schemas and ajv. Schemas must be generated manually or using third party tools.   |
| fastify             | 4.19.2         | ✓      | 16264.9     | 60.96        | 4.19          | 89              | 121         | -          | Validation is done using schemas and ajv. Schemas must be generated manually or using third party tools.   |
| **mion**            | **0.1.0**      | **✓**  | **14133.6** | **70.25**    | **3.92**      | **180**         | **138**     | **✓**      | **Automatic validation out of the box using @deepkit/types.**                                              |
| restify             | 8.6.1          | ✓      | 12121.0     | 81.97        | 3.13          | 89              | 127         | ✗          | Requires third party tools.                                                                                |
| mionnoserialisation | 0.1.0          | ✓      | 11112.6     | 89.40        | 3.53          | 180             | 138         | ✓          | mion with serialization nad validation disabled.                                                           |
| mionfast            | 0.1.0          | ✓      | 10587.0     | 93.87        | 3.36          | 103             | 121         | ✓          | Fastifi sertver instead @mionkit/http.                                                                     |
| hapi                | 20.3.0         | ✓      | 7802.2      | 127.51       | 2.00          | 92              | 126         | ✗          | Manual validation using joi, or third party tools.                                                         |
| deepkit             | 1.0.1-alpha.99 | ✓      | 5498.9      | 181.02       | 1.41          | 296             | 143         | ✓          | Automatic validation out of the box (The ones that made @deepkit/types), Their rpc is way more performant. |
| express             | 4.18.2         | ✓      | 4627.7      | 215.09       | 1.19          | 111             | 126         | ✗          | needs third party tools, or third party tools                                                              |
