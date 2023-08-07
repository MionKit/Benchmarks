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

# mion benchmarks using different settings

There is no one size fits all when optimizing performance, so mion offers few settings to configure according to different app needs.

- `HttpOptions.useCallbacks` : using callbacks instead promises when routing a call. defaults to promises.

We show the benchmarks and let you take your own conclusions!!

## Benchmark Results

* __Machine:__ darwin x64 | 8 vCPUs | 16.0GB Mem
* __Node:__ `v18.17.0`
* __Run:__ Mon Aug 07 2023 00:57:59 GMT+0100 (Irish Standard Time)
* __Method:__ `autocannon -c 100 -d 40.02 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

#### Req (R/s) 

![benchmarks](assets/public/charts-mion/requests.png)



#### Throughput (Mb/s) 

![benchmarks](assets/public/charts-mion/throughput.png)



#### Latency (ms) 

![benchmarks](assets/public/charts-mion/latency.png)



#### Max Memory (Mb) 

![benchmarks](assets/public/charts-mion/maxMem.png)



#### Memory Series (MB) 

![benchmarks](assets/public/charts-mion/memSeries.png)



|                | Version   | Router | Req (R/s)   | Latency (ms) | Output (Mb/s) | Max Memory (Mb) | Max Cpu (%) | Validation | Description                                                          |
| :--            | --:       | --:    | :-:         | --:          | --:           | --:             | --:         | :-:        | :--                                                                  |
| http-node      | 16.18.0   | ✗      | 17362.0     | 57.07        | 4.17          | 87              | 125         | ✗          | theoretical upper limit in performance.                              |
| mion3000       | 0.1.0     | ✓      | 15597.2     | 63.59        | 4.31          | 119             | 123         | ✓          | mion with 3000 routes loaded (should have the most memory usage)     |
| mion-callbacks | 0.1.0     | ✓      | 14824.0     | 66.91        | 4.10          | 157             | 141         | ✓          | using mion http with callbacks `HttpOptions.useCallbacks = true`     |
| **mion**       | **0.1.0** | **✓**  | **14781.8** | **67.13**    | **4.09**      | **159**         | **143**     | **✓**      | **using mion http with promises `HttpOptions.useCallbacks = false`** |
