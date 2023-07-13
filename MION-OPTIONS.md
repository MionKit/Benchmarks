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

### Benchmarks

- **Machine:** darwin x64 | 8 vCPUs | 16.0GB Mem
- **Node:** `v16.18.0`
- **Run:** Thu Jul 13 2023 11:58:52 GMT+0100 (Irish Standard Time)
- **Method:** `autocannon -c 100 -d 40.02 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

#### Req (R/s)

![benchmarks](assets/public/charts-servers/requests.png)

#### Throughput (Mb/s)

![benchmarks](assets/public/charts-servers/throughput.png)

#### Latency (ms)

![benchmarks](assets/public/charts-servers/latency.png)

#### Max Memory (Mb)

![benchmarks](assets/public/charts-servers/maxMem.png)

#### Memory Series (MB)

![benchmarks](assets/public/charts-servers/memSeries.png)

|                              |   Version | Router |  Req (R/s)  | Latency (ms) | Output (Mb/s) | Max Memory (Mb) | Max Cpu (%) | Validation | Description                                                                                     |
| :--------------------------- | --------: | -----: | :---------: | -----------: | ------------: | --------------: | ----------: | :--------: | :---------------------------------------------------------------------------------------------- |
| http-node                    |   16.18.0 |      ✗ |   19259.9   |        51.40 |          4.94 |              84 |         120 |     ✗      | theoretical upper limit in performance.                                                         |
| **mion**                     | **0.1.0** |  **✓** | **16241.7** |    **61.08** |      **4.51** |         **215** |     **146** |   **✓**    | **using mion http with promises `HttpOptions.useCallbacks = false`**                            |
| mion-callbacks               |     0.1.0 |      ✓ |   15573.0   |        63.70 |          4.95 |             102 |         119 |     ✓      | using mion http with callbacks `HttpOptions.useCallbacks = true`                                |
| mion-async-context-callbacks |     0.1.0 |      ✓ |   13296.0   |        74.72 |          4.22 |             210 |         137 |     ✓      | using mion http with callbacks and sync call context `RouterOptions.useAsyncCallContext = true` |
| mion-async-context           |     0.1.0 |      ✓ |   12693.6   |        78.24 |          4.03 |             211 |         140 |     ✓      | using mion http with promises and sync call context `RouterOptions.useAsyncCallContext = true`  |
