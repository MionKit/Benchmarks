import { z } from "zod";

// User schema with automatic date coercion
// z.coerce.date() automatically converts ISO 8601 strings to Date objects
export const UserSchema = z
  .object({
    id: z.number(),
    name: z.string(),
    surname: z.string(),
    lastUpdate: z.coerce.date(), // Automatically converts ISO string to Date
  })
  .strict(); // Rejects unknown keys (matches previous hasUnknownKeys behavior)

export type User = z.infer<typeof UserSchema>;

// Hello response schema
export const HelloSchema = z.object({
  hello: z.string(),
});

export type HelloResponse = z.infer<typeof HelloSchema>;
