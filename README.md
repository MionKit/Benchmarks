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
- For metrics (cold-start) see [metrics.md](./METRICS.md)

📚 [Full mion framework documentation here!](https://github.com/MionKit/mion)

### Running & displaying the benchmarks

```sh
# start the tests
npm start

# display results in a table
npm run compare-t
```

## Other benchmarks

- **Multiple mion settings:** [MION-OPTIONS.md](MION-OPTIONS.md)  
  Running the same application but using different mion settings.
- **Cold start times:** [METRICS.md](METRICS.md)  
  Cold start times are also indicative of how the [serverless version](https://github.com/MionKit/mion/tree/master/packages/serverless) could perform in this regard, as both `@MionKit/http` an `@MionKit/serverless` are just a wrapper around `@MionKit/router` which contains all the logic.

## What's tested

The test consist of an `updateUser` request where the fields of the user must be validated, the `lastUpdate` field is a date that must be transformed into a JS Date (deserialized), and the same user must be returned back with an updated `lastUpdate` to the time of the request.

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
    return {
      ...user,
      lastUpdate: new Date(),
    };
  },
};

// ### Express ###
// A plugin must be used to parse the json body
// validation must be done manually and user.lastUpdate must be deserialized manually into a date
// in this example the complexity would be in the isUser and deserializeUser functions (check src code fo that)
app.post("/updateUser", function (req, res) {
  const rawUser = req.body?.updateUser;
  if (!isUser(rawUser)) throw "app error, invalid parameter, not a user";
  const user = deserializeUser(rawUser);
  res.json({
    ...user,
    lastUpdate: new Date(),
  });
});
```

### Benchmarks

- **Machine:** darwin x64 | 8 vCPUs | 16.0GB Mem
- **Node:** `v16.18.0`
- **Run:** Thu Jul 13 2023 01:25:53 GMT+0100 (Irish Standard Time)
- **Method:** `autocannon -c 100 -d 40.03 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

#### Req (R/s)

![benchmarks](assets/public/charts-mion/requests.png)

#### Throughput (Mb/s)

![benchmarks](assets/public/charts-mion/throughput.png)

#### Latency (ms)

![benchmarks](assets/public/charts-mion/latency.png)

#### Max Memory (Mb)

![benchmarks](assets/public/charts-mion/maxMem.png)

|           |        Version | Router |  Req (R/s)  | Latency (ms) | Output (Mb/s) | Max Memory (Mb) | Max Cpu (%) | Validation | Description                                                                                                |
| :-------- | -------------: | -----: | :---------: | -----------: | ------------: | --------------: | ----------: | :--------: | :--------------------------------------------------------------------------------------------------------- |
| http-node |        16.18.0 |      ✗ |   18978.7   |        52.18 |          4.87 |              82 |         120 |     ✗      | Super basic and completely useless bare http server, should be the theoretical upper limit in performance. |
| **mion**  |      **0.1.0** |  **✓** | **17199.2** |    **57.65** |      **4.77** |         **223** |     **143** |   **✓**    | **validation and serialization out of the box**                                                            |
| fastify   |         4.19.2 |      ✓ |   15844.0   |        62.60 |          4.08 |              87 |         118 |     -      | Validation is done using schemas and ajv. Schemas must be generated manually or using third party tools.   |
| restify   |          8.6.1 |      ✓ |   12429.4   |        79.91 |          3.21 |              94 |         116 |     ✗      | Requires third party tools.                                                                                |
| hapi      |         20.3.0 |      ✓ |   7894.6    |       126.05 |          2.02 |              96 |         126 |     ✗      | Manual validation using joi, or third party tools.                                                         |
| deepkit   | 1.0.1-alpha.75 |      ✓ |   5369.7    |       185.43 |          1.37 |             313 |         131 |     ✓      | Automatic validation out of the box (The ones that made @deepkit/types), Their rpc is way more performant. |
| express   |         4.18.2 |      ✓ |   4596.9    |       216.54 |          1.18 |             112 |         127 |     ✗      | needs third party tools, or third party tools                                                              |
