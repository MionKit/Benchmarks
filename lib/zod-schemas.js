"use strict";

const { z } = require("zod");

// User schema with automatic date coercion
// z.coerce.date() automatically converts ISO 8601 strings to Date objects
const UserSchema = z
  .object({
    id: z.number(),
    name: z.string(),
    surname: z.string(),
    lastUpdate: z.coerce.date(), // Automatically converts ISO string to Date
  })
  .strict(); // Rejects unknown keys (matches previous hasUnknownKeys behavior)

// Hello response schema
const HelloSchema = z.object({
  hello: z.string(),
});

module.exports = {
  UserSchema,
  HelloSchema,
};
