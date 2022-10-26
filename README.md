<p align="center">
  <img alt='MikroKit, Benchmarks' src='./assets/public/logo.svg?raw=true' width="403" height="150">
</p>
<p align="center">
  <strong>Benchmarks for @mikrokit/http.</strong><br/>
</p>

<p align=center>
  <img src="https://img.shields.io/travis/mikrokit/mikrokit.svg?style=flat-square&maxAge=86400" alt="Travis" style="max-width:100%;">
  <img src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square&maxAge=99999999" alt="npm"  style="max-width:100%;">
  <img src="https://img.shields.io/badge/license-MIT-97ca00.svg?style=flat-square&maxAge=99999999" alt="npm"  style="max-width:100%;">
</p>

# Mikrokit Http Benchmarks

- These benchmarks are based on the [fastify benchmarks](https://github.com/fastify/benchmarks) repo!
- `@mikrokit/http` is part of the Mikrokit Framework. It uses and RPC style router!
- **This package shows how fast is Mikrokit comparatively to full featured frameworks like fastify and others.**
- You can find a full list of many other small and faster servers in the original fastify benchmarks repo.
- For metrics (cold-start) see [metrics.md](./METRICS.md)

📚 [Full Mikrokit framework documentation here!](https://github.com/MikroKit/MikroKit)

### Running & displaying the benchmarks

```sh
# start the tests
npm start

# display results in a table
npm run compare-t
```

### Cold start times

**For cold start times please check [METRICS.md](METRICS.md)**

Cold start times are also indicative of how the [serverless version](https://github.com/MikroKit/MikroKit/tree/master/packages/serverless) could perform in this regard, as both `@mikrokit/http` an `@mikrokit/serverless` are just a wrapper around `@mikrokit/router` which contains all the logic.

## What's tested

We are not just testing a simple "hello world", we are testing a more realistic scenario of api requests.

The test consist of an `updateUser` request where the fields of the user must be validated, the `lastUpdate` field is a date that must be transformed into a JS Date (deserialized), and the same user must be returned back with an updated `lastUpdate` to the time of the request.

```ts
export interface User {
  id: number;
  name: string;
  surname: string;
  lastUpdate: Date;
}

// ### Mikrokit ###
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
- **Run:** Wed Oct 26 2022 23:11:27 GMT+0200 (Central European Summer Time)
- **Method:** `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|              |           Vers |  Rout |  Req (R/s)  | Laten (ms) | Output (Mb/s) | Vali Dation | Description                                                                                                                                                      |
| :----------- | -------------: | ----: | :---------: | ---------: | ------------: | :---------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| http-bare    |        10.13.0 |     ✗ |   19109.9   |      51.80 |          4.90 |      ✗      | Super basic and completely useless bare http server, should be the theoretical upper limit in performance.                                                       |
| fastify      |          4.9.2 |     ✓ |   16584.7   |      59.76 |          4.27 |      -      | Validation is done using schemas and ajv. Schemas must be generated manually or using third party tools.                                                         |
| **mikrokit** |      **0.1.0** | **✓** | **13273.2** |  **74.80** |      **3.70** |    **✓**    | **Automatic validation out of the box using @deepkit/types.**                                                                                                    |
| restify      |          8.6.1 |     ✓ |   12314.0   |      80.64 |          3.18 |      ✗      | Requires third party tools.                                                                                                                                      |
| hapi         |         20.2.2 |     ✓ |   8015.3    |     124.11 |          2.06 |      ✗      | Manual validation using joi, or third party tools.                                                                                                               |
| express      |         4.18.2 |     ✓ |   4624.8    |     215.27 |          1.19 |      ✗      | needs third party tools, or third party tools                                                                                                                    |
| deepkit      | 1.0.1-alpha.75 |     ✓ |   2124.2    |     468.55 |          0.54 |      ✓      | Automatic validation out of the box (The ones that made @deepkit/types👍). They have a RPC over webSockets that's way more performant than the http tested here. |
