<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="./assets/images/logo-dark.svg?raw=true">
    <source media="(prefers-color-scheme: light)" srcset="./assets/images/logo.svg?raw=true">
    <img alt='mion, a mikro kit for Typescript Serverless APIs' src='./assets/images/logo.svg?raw=true' width="403" height="150">
  </picture>
</p>

<p align="center">
  <strong>Benchmarks for  @mionkit/node 🚀</strong><br/>
</p>

<p align=center>
  <img src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square&maxAge=99999999" alt="npm"  style="max-width:100%;">
  <img src="https://img.shields.io/badge/license-MIT-97ca00.svg?style=flat-square&maxAge=99999999" alt="npm"  style="max-width:100%;">
</p>

# mion Http Benchmarks - Simple User

- These benchmarks are based on the [fastify benchmarks](https://github.com/fastify/benchmarks) repo!
- `@MionKit/http` is part of the mion Framework. It uses and RPC style router!
- **This benchmark tests a simple user model with minimal validation overhead.**

📚 [Full mion framework documentation here!](https://github.com/MionKit/mion)

#### Running the benchmarks

install packages & link mion packages

```sh
npm i
npm link @mionkit/router @mionkit/core @mionkit/bun @mionkit/node
```

```sh
# running simple-user benchmark
node reports.js simple-user

# running quick mode (4 seconds)
node reports.js simple-user --quick
```

## What's tested

The test consists of an `updateSimpleUser` request with a **simple User model (~100 bytes payload)** that includes:

- **Basic fields**: id (number), name (string), surname (string)
- **Single Date field**: lastUpdate (requires date coercion/serialization)

### SimpleUser Model

```typescript
interface SimpleUser {
  id: number;
  name: string;
  surname: string;
  lastUpdate: Date;
}
```

### Test Payload

```json
{
  "id": 12345678901234,
  "name": "John",
  "surname": "Doe",
  "lastUpdate": "2024-01-15T10:30:00.000Z"
}
```

This benchmark is designed to measure framework performance with minimal validation overhead, providing a baseline comparison against the more complex [Update User benchmark](./UPDATE-USER.md).

## Benchmark Results

* __Machine:__ darwin x64 | 8 vCPUs | 16.0GB Mem
* __Node:__ `v24.13.0`
* __Run:__ Thu Feb 05 2026 22:41:47 GMT+0000 (Greenwich Mean Time)
* __Method:__ `autocannon -c 100 -d 4.03 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

#### Req (R/s) 

![benchmarks](assets/public/charts-servers-simple/requests.png)



#### Throughput (Mb/s) 

![benchmarks](assets/public/charts-servers-simple/throughput.png)



#### Latency (ms) 

![benchmarks](assets/public/charts-servers-simple/latency.png)



#### Max Memory (Mb) 

![benchmarks](assets/public/charts-servers-simple/maxMem.png)



#### Memory Series (MB) 

![benchmarks](assets/public/charts-servers-simple/memSeries.png)



|              | Version   | Router | Req (R/s)  | Latency (ms) | Output (Mb/s) | Max Memory (Mb) | Max Cpu (%) | Validation | Description                                                |
| :--          | --:       | --:    | :-:        | --:          | --:           | --:             | --:         | :-:        | :--                                                        |
| elysia.bun   | 1.0.0     | ✓      | 15878.0    | 62.19        | 1.98          | 41              | 89          | ✓          | Elysia framework with TypeBox validation                   |
| hono.bun     | 3.12.6    | ✓      | 11216.0    | 87.87        | 1.47          | 57              | 88          | ✓          | hono bun server with Zod validation                        |
| fastify      | 4.10.2    | ✓      | 9329.5     | 98.32        | 2.35          | 89              | 105         | ✓          | Fastify with Zod validation                                |
| http-node    | 16.18.0   | ✗      | 8498.0     | 107.33       | 2.13          | 65              | 114         | ✓          | bare node http server with Zod validation                  |
| **mion.bun** | **0.6.2** | **✓**  | **6857.0** | **140.38**   | **3.31**      | **103**         | **97**      | **✓**      | **mion using bun, automatic validation and serialization** |
| express      | 4.22.1    | ✓      | 6559.0     | 114.17       | 1.64          | 107             | 130         | ✓          | Express with Zod validation                                |
| hapi         | 21.4.4    | ✓      | 5712.0     | 120.67       | 1.43          | 95              | 138         | ✓          | Hapi with Zod validation                                   |
| hono         | 3.12.6    | ✓      | 5223.8     | 126.78       | 1.31          | 247             | 123         | ✓          | hono node server with Zod validation                       |
| **mion**     | **0.6.2** | **✓**  | **2102.3** | **188.22**   | **1.11**      | **108**         | **102**     | **✓**      | **Automatic validation and serialization out of the box**  |
