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

# mion Http Benchmarks

- These benchmarks are based on the [fastify benchmarks](https://github.com/fastify/benchmarks) repo!
- `@MionKit/http` is part of the mion Framework. It uses and RPC style router!
- **This package shows how fast is mion comparatively to full featured frameworks like fastify and others.**
- You can find a full list of many other small and faster servers in the original fastify benchmarks repo.
- For cold-start metrics see [cold-starts.md](./COLD-STARTS.md)

📚 [Full mion framework documentation here!](https://github.com/MionKit/mion)

#### Running the benchmarks

install packages & link mion packages

```sh
npm i
npm link @mionkit/router @mionkit/core @mionkit/bun @mionkit/http
```

```sh
# running all benchmarks and update all readmes
npm run report
```

#### Cold Starts

- Cold start times: This is a metric we specially want to keep in check as fast cold start times are essential for serverless environments  
  [COLD-STARTS.md](COLD-STARTS.md)

## What's tested

The test consist of an `updateUser` request where the fields of the user must be validated, the `lastUpdate` field is a date that must be transformed into a JS Date (deserialized), then add one month and send back in the response.

> The benchmark involves both routing + validation of parameters!

```ts
export interface User {
  id: number;
  name: string;
  surname: string;
  lastUpdate: Date;
}

// ### mion ###
// the received user by the route is already validated and deserialized
// user.lastUpdate is already a js date instead and string (result of JSON.parse)
export const routes: Routes = {
  updateUser: (context, user: User): User => {
    user.lastUpdate.setMonth(user.lastUpdate.getMonth() + 1);
    return user;
  },
};

// ### Express ###
// A plugin must be used to parse the json body
// validation must be done manually and user.lastUpdate must be deserialized manually into a date
// in this case developer would have to manually write `isUser` and `deserializeUser` functions. (check src code fo those functions)
app.post("/updateUser", function (req, res) {
  const rawUser = req.body?.updateUser;
  if (!isUser(rawUser)) throw "app error, invalid parameter, not a user";
  const user = deserializeUser(rawUser);
  user.lastUpdate.setMonth(user.lastUpdate.getMonth() + 1);
  res.json(user);
});
```

#### Notes on current results:

mion is focused on being lightweight and fast so it can be run in serverless environments. We run the benchmarks before every PR gets merged to ensure there is no performance regression. There are [PRs](https://github.com/MionKit/mion/pull/48) that has been rejected because due to performance regression.

Our goal is to perform similar to fastify as it is the industry standard in terms of performance. Please always take benchmarks as general guidelines as you might obtain different results in your real world application. we just run the benchmarks to ensure there is no performance degradation when new features/fixes are added to mion.

## Benchmark Results

- **Machine:** darwin x64 | 8 vCPUs | 16.0GB Mem
- **Node:** `v24.13.0`
- **Run:** Mon Feb 02 2026 18:01:17 GMT+0000 (Greenwich Mean Time)
- **Method:** `autocannon -c 100 -d 40.26 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

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

|              |   Version | Router |  Req (R/s)  | Latency (ms) | Output (Mb/s) | Max Memory (Mb) | Max Cpu (%) | Validation | Description                                                |
| :----------- | --------: | -----: | :---------: | -----------: | ------------: | --------------: | ----------: | :--------: | :--------------------------------------------------------- |
| **mion.bun** | **0.6.2** |  **✓** | **26494.0** |    **37.45** |      **3.59** |          **82** |     **110** |   **✓**    | **mion using bun, automatic validation and serialization** |
| elysia.bun   |     0.7.5 |      ✓ |   25378.4   |        39.74 |          8.69 |              58 |         110 |     ✓      | bun FrameWork with validation using TypeBox                |
| **mion**     | **0.6.2** |  **✓** | **17125.9** |    **57.85** |      **3.09** |         **146** |     **120** |   **✓**    | **Automatic validation and serialization out of the box**  |
| http-node    |   16.18.0 |      ✗ |   16977.9   |        58.36 |          4.29 |             135 |         124 |     ✓      | bare node http server with Zod validation                  |
| fastify      |    4.10.2 |      ✓ |   15369.6   |        64.51 |          3.90 |             151 |         119 |     ✓      | Fastify with Zod validation                                |
| express      |    4.22.1 |      ✓ |   10573.0   |        93.96 |          2.67 |             147 |         112 |     ✓      | Express with Zod validation                                |
| hapi         |    21.4.4 |      ✓ |   9389.4    |       105.87 |          2.37 |             225 |         117 |     ✓      | Hapi with Zod validation                                   |
| hono         |    3.12.6 |      ✓ |   9200.6    |       108.06 |          2.32 |             253 |         119 |     ✓      | hono node server with Zod validation                       |
| hono.bun     |    3.12.6 |      ✓ |     N/A     |          N/A |           N/A |              23 |         106 |     ✓      | hono bun server with Zod validation                        |
