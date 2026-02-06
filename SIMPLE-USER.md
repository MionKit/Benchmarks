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
* __Run:__ Thu Feb 05 2026 23:51:30 GMT+0000 (Greenwich Mean Time)
* __Method:__ `autocannon -c 100 -d 4.1 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

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



|              | Version   | Router | Req (R/s)   | Latency (ms) | Output (Mb/s) | Max Memory (Mb) | Max Cpu (%) | Validation | Description                                                |
| :--          | --:       | --:    | :-:         | --:          | --:           | --:             | --:         | :-:        | :--                                                        |
| elysia.bun   | 1.0.0     | ✓      | 24844.0     | 40.39        | 4.76          | 72              | 112         | ✓          | Elysia framework with TypeBox validation                   |
| hono.bun     | 3.12.6    | ✓      | 23400.0     | 42.25        | 4.48          | 60              | 102         | ✓          | hono bun server with Zod validation                        |
| **mion.bun** | **0.6.2** | **✓**  | **20296.0** | **48.56**    | **4.95**      | **88**          | **103**     | **✓**      | **mion using bun, automatic validation and serialization** |
| http-node    | 16.18.0   | ✗      | 15738.0     | 62.68        | 3.95          | 85              | 120         | ✓          | bare node http server with Zod validation                  |
| **mion**     | **0.6.2** | **✓**  | **13410.0** | **73.49**    | **3.87**      | **111**         | **113**     | **✓**      | **Automatic validation and serialization out of the box**  |
| fastify      | 5.7.4     | ✓      | 10930.0     | 88.43        | 2.75          | 274             | 128         | ✓          | Fastify with Zod validation                                |
| express      | 5.2.1     | ✓      | 9277.5      | 96.66        | 2.33          | 112             | 121         | ✓          | Express with Zod validation                                |
| hapi         | 21.4.4    | ✓      | 8210.5      | 100.74       | 2.06          | 118             | 135         | ✓          | Hapi with Zod validation                                   |
| hono         | 3.12.6    | ✓      | 6463.0      | 112.90       | 1.53          | 259             | 138         | ✓          | hono node server with Zod validation                       |
