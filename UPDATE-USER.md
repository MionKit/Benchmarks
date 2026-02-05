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

# mion Http Benchmarks

- These benchmarks are based on the [fastify benchmarks](https://github.com/fastify/benchmarks) repo!
- `@MionKit/http` is part of the mion Framework. It uses and RPC style router!
- **This package shows how fast is mion comparatively to full featured frameworks like fastify and others.**
- You can find a full list of many other small and faster servers in the original fastify benchmarks repo.

📚 [Full mion framework documentation here!](https://github.com/MionKit/mion)

#### Running the benchmarks

install packages & link mion packages

```sh
npm i
npm link @mionkit/router @mionkit/core @mionkit/bun @mionkit/node
```

```sh
# running all benchmarks and update all readmes
npm run report
```

## What's tested

The test consists of an `updateUser` request with a **complex User model (~1KB payload)** that includes:

- **Nested objects**: profile, address, preferences, notifications
- **Discriminated unions**: paymentMethods (credit_card | bank_account | paypal)
- **Arrays**: paymentMethods[], tags[]
- **Multiple Date fields**: dateOfBirth, createdAt, updatedAt, lastLoginAt
- **Union types**: role, status, theme, frequency
- **Optional fields**: bio, avatarUrl, lastLoginAt

The business logic updates timestamps and modifies the user's display name.

> The benchmark involves routing + validation + serialization/deserialization of complex nested data!

```ts
export interface User {
  id: number;
  username: string;
  email: string;
  profile: {
    firstName: string;
    lastName: string;
    displayName: string;
    bio?: string;
    avatarUrl?: string;
    dateOfBirth: Date;
  };
  role: "admin" | "user" | "guest" | "moderator";
  status: "active" | "suspended" | "pending_verification" | "deactivated";
  address: Address;
  paymentMethods: PaymentMethod[]; // Discriminated union
  preferences: UserPreferences;
  createdAt: Date;
  updatedAt: Date;
  lastLoginAt?: Date;
  tags: string[];
}

// ### mion ###
// the received user by the route is already validated and deserialized
// all Date fields are already JS Date objects (not strings from JSON.parse)
export const routes: Routes = {
  updateUser: (ctx, user: User): User => {
    user.updatedAt = new Date();
    user.lastLoginAt = new Date();
    user.profile.displayName = `${user.profile.firstName} ${user.profile.lastName.charAt(0)}.`;
    return user;
  },
};

// ### Other frameworks (Express, Fastify, Hono, etc.) ###
// Use Zod schemas for validation and date coercion
const UserSchema = z.object({
  id: z.number(),
  username: z.string(),
  // ... full schema with nested objects, discriminated unions, etc.
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  // ...
});

app.post("/updateUser", function (req, res) {
  const user = UserSchema.parse(req.body); // Validates + deserializes dates
  user.updatedAt = new Date();
  user.lastLoginAt = new Date();
  user.profile.displayName = `${user.profile.firstName} ${user.profile.lastName.charAt(0)}.`;
  res.json(user);
});
```

#### Notes on current results:

mion is focused on being lightweight and fast so it can be run in serverless environments. We run the benchmarks before every PR gets merged to ensure there is no performance regression. There are [PRs](https://github.com/MionKit/mion/pull/48) that has been rejected because due to performance regression.

Our goal is to perform similar to fastify as it is the industry standard in terms of performance. Please always take benchmarks as general guidelines as you might obtain different results in your real world application. we just run the benchmarks to ensure there is no performance degradation when new features/fixes are added to mion.

## Benchmark Results

* __Machine:__ darwin x64 | 8 vCPUs | 16.0GB Mem
* __Node:__ `v24.13.0`
* __Run:__ Thu Feb 05 2026 23:32:45 GMT+0000 (Greenwich Mean Time)
* __Method:__ `autocannon -c 100 -d 20.03 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

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



|              | Version   | Router | Req (R/s)   | Latency (ms) | Output (Mb/s) | Max Memory (Mb) | Max Cpu (%) | Validation | Description                                                |
| :--          | --:       | --:    | :-:         | --:          | --:           | --:             | --:         | :-:        | :--                                                        |
| **mion.bun** | **0.6.2** | **✓**  | **15277.6** | **64.86**    | **15.76**     | **96**          | **104**     | **✓**      | **mion using bun, automatic validation and serialization** |
| hono.bun     | 3.12.6    | ✓      | 13190.8     | 75.18        | 13.19         | 88              | 104         | ✓          | hono bun server with Zod validation                        |
| elysia.bun   | 1.0.0     | ✓      | 13078.4     | 75.82        | 12.89         | 100             | 107         | ✓          | Elysia framework with TypeBox validation                   |
| **mion**     | **0.6.2** | **✓**  | **11677.2** | **84.99**    | **12.57**     | **124**         | **118**     | **✓**      | **Automatic validation and serialization out of the box**  |
| http-node    | 16.18.0   | ✗      | 10529.6     | 94.30        | 11.00         | 99              | 117         | ✓          | bare node http server with Zod validation                  |
| fastify      | 4.10.2    | ✓      | 9744.8      | 101.90       | 10.19         | 111             | 113         | ✓          | Fastify with Zod validation                                |
| express      | 4.22.1    | ✓      | 7204.2      | 137.89       | 7.53          | 153             | 115         | ✓          | Express with Zod validation                                |
| hono         | 3.12.6    | ✓      | 6361.2      | 156.18       | 6.65          | 263             | 115         | ✓          | hono node server with Zod validation                       |
| hapi         | 21.4.4    | ✓      | 6299.6      | 157.69       | 6.58          | 156             | 116         | ✓          | Hapi with Zod validation                                   |
