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

- **Machine:** darwin x64 | 8 vCPUs | 16.0GB Mem
- **Node:** `v18.17.0`
- **Run:** Mon Jan 22 2024 03:06:55 GMT+0000 (Greenwich Mean Time)
- **Method:** `autocannon -c 100 -d 40.26 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

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

|           |        Version | Router |  Req (R/s)  | Latency (ms) | Output (Mb/s) | Max Memory (Mb) | Max Cpu (%) | Validation | Description                                                                                 |
| :-------- | -------------: | -----: | :---------: | -----------: | ------------: | --------------: | ----------: | :--------: | :------------------------------------------------------------------------------------------ |
| mion.bun  |          0.6.2 |      ✓ |   61640.8   |        15.83 |          9.58 |              84 |         106 |     ✓      | mion using bun, automatic validation and serialization                                      |
| http-node |        16.18.0 |      ✗ |   38760.8   |        25.30 |          6.91 |              87 |         119 |     ✗      | bare node http server, should be the theoretical upper limit in node.js performance         |
| fastify   |         4.10.2 |      ✓ |   34918.6   |        28.14 |          6.26 |              93 |         100 |     -      | Validation using schemas and ajv. schemas are generated manually or using third party tools |
| **mion**  |      **0.6.2** |  **✓** | **31288.4** |    **31.46** |      **6.27** |          **98** |     **124** |   **✓**    | **Automatic validation and serialization out of the box**                                   |
| deepkit   | 1.0.1-alpha.75 |      ✓ |   27358.8   |        36.04 |          4.88 |             183 |         135 |     ✓      | Automatic validation and serialization out of the box                                       |
| hapi      |         21.3.2 |      ✓ |   26126.4   |        37.76 |          4.66 |             127 |         129 |     ✗      | validation using joi or third party tools                                                   |
| restify   |         11.1.0 |      ✓ |   10575.8   |        94.04 |          2.61 |             104 |         122 |     ✗      | manual validation or third party tools                                                      |
| express   |         4.18.2 |      ✓ |   8306.4    |       119.71 |          1.48 |             139 |         123 |     ✗      | manual validation or third party tools                                                      |
