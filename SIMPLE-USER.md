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

# mion Http Benchmarks - Simple User

- These benchmarks are based on the [fastify benchmarks](https://github.com/fastify/benchmarks) repo!
- `@MionKit/http` is part of the mion Framework. It uses and RPC style router!
- **This benchmark tests a simple user model with minimal validation overhead.**

📚 [Full mion framework documentation here!](https://github.com/MionKit/mion)

#### Running the benchmarks

install packages & link mion packages

```sh
npm i
npm link @mionjs/router @mionjs/core @mionjs/platform-bun @mionjs/platform-node
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

* __Machine:__ darwin arm64 | 12 vCPUs | 16.0GB Mem
* __Node:__ `v24.13.0`
* __Run:__ Wed Mar 18 2026 00:37:29 GMT+0000 (Greenwich Mean Time)
* __Method:__ `autocannon -c 100 -d 20.13 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

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
| http-node    | 16.18.0   | ✗      | 70956.8     | 13.68        | 17.79         | 138             | 109         | ✓          | bare node http server with Zod validation                  |
| **mion.bun** | **0.6.2** | **✓**  | **69763.2** | **13.96**    | **16.96**     | **70**          | **98**      | **✓**      | **mion using bun, automatic validation and serialization** |
| hono.bun     | 3.12.6    | ✓      | 69270.4     | 14.03        | 13.27         | 73              | 95          | ✓          | hono bun server with Zod validation                        |
| elysia.bun   | 1.0.0     | ✓      | 69062.4     | 14.09        | 13.23         | 89              | 95          | ✓          | Elysia framework with TypeBox validation                   |
| **mion**     | **0.6.2** | **✓**  | **63555.2** | **15.24**    | **18.29**     | **156**         | **110**     | **✓**      | **Automatic validation and serialization out of the box**  |
| fastify      | 5.7.4     | ✓      | 45465.6     | 21.48        | 11.44         | 313             | 131         | ✓          | Fastify with native JSON Schema validation                 |
| express      | 5.2.1     | ✓      | 45190.4     | 21.63        | 11.33         | 175             | 116         | ✓          | Express with Zod validation                                |
| hapi         | 21.4.4    | ✓      | 40512.0     | 24.17        | 10.16         | 261             | 113         | ✓          | Hapi with Zod validation                                   |
| hono         | 3.12.6    | ✓      | 32911.6     | 29.87        | 7.78          | 821             | 130         | ✓          | hono node server with Zod validation                       |
