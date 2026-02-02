/* ########
 * 2024 mion-benchmarks
 * Elysia Bun Server - Pre-compiled for consistent benchmarking
 * License: MIT
 * ######## */

import { Elysia, t } from "elysia";

export interface User {
  id: number;
  name: string;
  surname: string;
  lastUpdate: Date;
}

// TypeBox schema with Transform for automatic date coercion
const DateString = t
  .Transform(t.String({ format: "date-time" }))
  .Decode((value) => new Date(value)) // string -> Date on input
  .Encode((value) => value.toISOString()); // Date -> string on output

const UserSchema = t.Object({
  id: t.Number(),
  name: t.String(),
  surname: t.String(),
  lastUpdate: DateString,
});

// Create app without starting server
const createApp = () => {
  return new Elysia()
    .get("/hello", () => ({ hello: "world" }))
    .post(
      "/updateUser",
      ({ body }) => {
        // body.lastUpdate is already a Date object thanks to Transform
        // Type assertion needed because TypeBox's type inference doesn't understand Transform
        const user = body as unknown as User;
        user.lastUpdate.setMonth(user.lastUpdate.getMonth() + 1);
        return user;
      },
      { body: UserSchema },
    );
};

export interface BunServerOptions {
  port?: number;
}

export const initHttpBun = (options: BunServerOptions = {}) => {
  const port = options.port ?? 3000;
  const app = createApp().listen(port);
  console.log(`Elysia server running on port ${port}`);
  return app;
};

// For direct execution
if (import.meta.main) {
  initHttpBun({ port: 3000 });
}
