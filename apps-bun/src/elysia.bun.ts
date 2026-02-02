import { Elysia, t } from "elysia";
import { cors } from "@elysiajs/cors";

export interface User {
  id: number;
  name: string;
  surname: string;
  lastUpdate: Date;
}

export type NewUser = Omit<User, "id" | "lastUpdate">;
export type UserId = User | number;
export type PartialUser = Partial<User> & { id: number };
export type SayHello = { hello: string };
export type HelloReply = { hello: string };

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

const app = new Elysia()

.get("/hello", async () => ({ hello: "world" }))
  .post(
    "/updateUser",
    async ({ body }) => {
      // body.lastUpdate is already a Date object thanks to Transform
      // Type assertion needed because TypeBox's type inference doesn't understand Transform
      const user = body as unknown as User;
      user.lastUpdate.setMonth(user.lastUpdate.getMonth() + 1);
      return user;
    },
    {
      body: UserSchema,
    },
  )
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);
