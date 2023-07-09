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

### Cold start times

**For cold start times please check [METRICS.md](METRICS.md)**

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

* __Machine:__ darwin x64 | 8 vCPUs | 16.0GB Mem
* __Node:__ `v16.18.0`
* __Run:__ Sun Jul 09 2023 01:09:31 GMT+0100 (Irish Standard Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

#### Req (R/s) 

![benchmarks](assets/public/charts/requests.png)



#### Throughput (Mb/s) 

![benchmarks](assets/public/charts/throughput.png)



#### Latency (ms) 

![benchmarks](assets/public/charts/latency.png)



#### Max Memory (Mb) 

![benchmarks](assets/public/charts/maxMem.png)



#### Max Cpu (%) 

![benchmarks](assets/public/charts/maxCpu.png)



|           | Version        | Router | Req (R/s)   | Latency (ms) | Output (Mb/s) | Max Memory (Mb) | Max Cpu (%) | Validation | Description                                                                                                |
| :--       | --:            | --:    | :-:         | --:          | --:           | --:             | --:         | :-:        | :--                                                                                                        |
| http-node | 16.18.0        | ✗      | 17992.5     | 55.10        | 4.62          | 77              | 120         | ✗          | Super basic and completely useless bare http server, should be the theoretical upper limit in performance. |
| fastify   | 4.19.2         | ✓      | 17514.1     | 56.59        | 4.51          | 89              | 124         | -          | Validation is done using schemas and ajv. Schemas must be generated manually or using third party tools.   |
| **mion**  | **0.1.0**      | **✓**  | **14845.6** | **66.89**    | **4.12**      | **188**         | **135**     | **✓**      | **Automatic validation out of the box using @deepkit/types.**                                              |
| restify   | 8.6.1          | ✓      | 11060.0     | 89.85        | 2.86          | 108             | 117         | ✗          | Requires third party tools.                                                                                |
| hapi      | 20.3.0         | ✓      | 7741.8      | 128.53       | 1.99          | 114             | 128         | ✗          | Manual validation using joi, or third party tools.                                                         |
| deepkit   | 1.0.1-alpha.75 | ✓      | 5185.0      | 192.09       | 1.33          | 286             | 130         | ✓          | Automatic validation out of the box (The ones that made @deepkit/types), Their rpc is way more performant. |
| express   | 4.18.2         | ✓      | 4558.4      | 218.46       | 1.17          | 112             | 127         | ✗          | needs third party tools, or third party tools                                                              |
