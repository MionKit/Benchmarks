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

# Deprecated!

Most of the options here are not available anymore!

# ~~mion benchmarks using different settings~~

There is no one size fits all when optimizing performance, so mion offers few settings to configure according to different app needs.

- `HttpOptions.useCallbacks` : using callbacks instead promises when routing a call. defaults to promises.

We show the benchmarks and let you take your own conclusions!!

## Benchmark Results

- **Machine:** darwin x64 | 8 vCPUs | 16.0GB Mem
- **Node:** `v18.17.0`
- **Run:** Tue Aug 15 2023 15:10:29 GMT+0100 (Irish Standard Time)
- **Method:** `autocannon -c 100 -d 40.02 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

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

|                |   Version | Router |  Req (R/s)  | Latency (ms) | Output (Mb/s) | Max Memory (Mb) | Max Cpu (%) | Validation | Description                                                          |
| :------------- | --------: | -----: | :---------: | -----------: | ------------: | --------------: | ----------: | :--------: | :------------------------------------------------------------------- |
| http-node      |   16.18.0 |      ✗ |   17476.5   |        56.69 |          4.20 |              89 |         122 |     ✗      | theoretical upper limit in performance.                              |
| mion3000       |     0.1.0 |      ✓ |   15072.0   |        65.83 |          4.17 |             155 |         143 |     ✓      | mion with 3000 routes loaded (should have the most memory usage)     |
| **mion**       | **0.1.0** |  **✓** | **14664.6** |    **67.65** |      **4.06** |         **163** |     **144** |   **✓**    | **using mion http with promises `HttpOptions.useCallbacks = false`** |
| mion-callbacks |     0.1.0 |      ✓ |   14588.6   |        68.02 |          4.03 |             160 |         145 |     ✓      | using mion http with callbacks `HttpOptions.useCallbacks = true`     |
