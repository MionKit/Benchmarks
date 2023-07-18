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
- `RouterOptions.useAsyncCallContext` : this is not a performance setting but rather a nice to have features to simplify development as the callContext can be obtained from anywhere in the call stat using `router.getCallContext()` rather than having to propagate the callContex down the callStack. Unfortunatelly this comes with an small performance hit so we are benchmarking it here.

We show the benchmarks and let you take your own conclusions!!

## Benchmark Results

* __Machine:__ darwin x64 | 8 vCPUs | 16.0GB Mem
* __Node:__ `v16.18.0`
* __Run:__ Tue Jul 18 2023 23:30:58 GMT+0100 (Irish Standard Time)
* __Method:__ `autocannon -c 100 -d 40.02 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

#### Req (R/s) 

![benchmarks](assets/public/charts-mion/requests.png)



#### Throughput (Mb/s) 

![benchmarks](assets/public/charts-mion/throughput.png)



#### Latency (ms) 

![benchmarks](assets/public/charts-mion/latency.png)



#### Max Memory (Mb) 

![benchmarks](assets/public/charts-mion/maxMem.png)



#### Max Cpu (%) 

![benchmarks](assets/public/charts-mion/maxCpu.png)



#### Memory Series (MB) 

![benchmarks](assets/public/charts-mion/memSeries.png)



|                              | Version   | Router | Req (R/s)   | Latency (ms) | Output (Mb/s) | Max Memory (Mb) | Max Cpu (%) | Validation | Description                                                                                     |
| :--                          | --:       | --:    | :-:         | --:          | --:           | --:             | --:         | :-:        | :--                                                                                             |
| http-node                    | 16.18.0   | ✗      | 17976.3     | 55.10        | 4.59          | 83              | 123         | ✗          | theoretical upper limit in performance.                                                         |
| **mion**                     | **0.1.0** | **✓**  | **16923.6** | **58.57**    | **4.70**      | **225**         | **148**     | **✓**      | **using mion http with promises `HttpOptions.useCallbacks = false`**                            |
| mion-async-context           | 0.1.0     | ✓      | 14034.8     | 70.71        | 4.46          | 182             | 141         | ✓          | using mion http with promises and sync call context `RouterOptions.useAsyncCallContext = true`  |
| mion-callbacks               | 0.1.0     | ✓      | 13963.2     | 71.09        | 4.43          | 202             | 141         | ✓          | using mion http with callbacks `HttpOptions.useCallbacks = true`                                |
| mion3000                     | 0.1.0     | ✓      | 13861.4     | 71.60        | 4.40          | 108             | 139         | ✓          | mion with 3000 routes loaded (should have the most memory usage)                                |
| mion-async-context-callbacks | 0.1.0     | ✓      | 13572.0     | 73.15        | 4.31          | 205             | 142         | ✓          | using mion http with callbacks and sync call context `RouterOptions.useAsyncCallContext = true` |
