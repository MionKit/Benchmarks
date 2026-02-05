/* ########
 * 2024 mion-benchmarks
 * Hono Bun Server - Pre-compiled for consistent benchmarking
 * License: MIT
 * ######## */

import { Hono } from "hono";
import { z } from "zod";

// ============ Union Types ============
const UserRoleSchema = z.enum(["admin", "user", "guest", "moderator"]);

const AccountStatusSchema = z.enum([
  "active",
  "suspended",
  "pending_verification",
  "deactivated",
]);

// ============ Nested Objects ============
const AddressSchema = z.object({
  street: z.string(),
  city: z.string(),
  state: z.string(),
  zipCode: z.string(),
  country: z.string(),
});

const NotificationSettingsSchema = z.object({
  email: z.boolean(),
  sms: z.boolean(),
  push: z.boolean(),
  frequency: z.enum(["immediate", "daily", "weekly"]),
});

const UserPreferencesSchema = z.object({
  theme: z.enum(["light", "dark", "system"]),
  language: z.string(),
  timezone: z.string(),
  notifications: NotificationSettingsSchema,
});

// ============ Discriminated Union ============
const CreditCardSchema = z.object({
  type: z.literal("credit_card"),
  lastFourDigits: z.string(),
  expiryMonth: z.number(),
  expiryYear: z.number(),
  brand: z.string(),
});

const BankAccountSchema = z.object({
  type: z.literal("bank_account"),
  bankName: z.string(),
  accountLastFour: z.string(),
  routingNumber: z.string(),
});

const PaypalSchema = z.object({
  type: z.literal("paypal"),
  email: z.string(),
});

const PaymentMethodSchema = z.discriminatedUnion("type", [
  CreditCardSchema,
  BankAccountSchema,
  PaypalSchema,
]);

// ============ Profile Schema ============
const ProfileSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  displayName: z.string(),
  bio: z.string().optional(),
  avatarUrl: z.string().optional(),
  dateOfBirth: z.coerce.date(), // Automatically converts ISO string to Date
});

// ============ User Schema ============
const UserSchema = z
  .object({
    // Basic info
    id: z.number(),
    username: z.string(),
    email: z.string(),

    // Profile
    profile: ProfileSchema,

    // Account metadata
    role: UserRoleSchema,
    status: AccountStatusSchema,

    // Single address
    address: AddressSchema,

    // Array of discriminated union
    paymentMethods: z.array(PaymentMethodSchema),

    // Preferences
    preferences: UserPreferencesSchema,

    // Timestamps
    createdAt: z.coerce.date(), // Automatically converts ISO string to Date
    updatedAt: z.coerce.date(), // Automatically converts ISO string to Date
    lastLoginAt: z.coerce.date().optional(), // Optional date field

    // Tags
    tags: z.array(z.string()),
  })
  .strict();

type User = z.infer<typeof UserSchema>;

// ============ Simple User Schema (for simple-user benchmark) ============
const SimpleUserSchema = z
  .object({
    id: z.number(),
    name: z.string(),
    surname: z.string(),
    lastUpdate: z.coerce.date(), // Automatically converts ISO string to Date
  })
  .strict();

type SimpleUser = z.infer<typeof SimpleUserSchema>;

const app = new Hono();

app.get("/hello", (c) => {
  return c.json({ hello: "world" });
});

app.post("/updateUser", async (c) => {
  const rawUser = await c.req.json();
  const user = UserSchema.parse(rawUser); // Validates + deserializes dates

  // Update timestamps
  user.updatedAt = new Date();
  user.lastLoginAt = new Date();

  // Update profile modification
  user.profile.displayName = `${user.profile.firstName} ${user.profile.lastName.charAt(0)}.`;

  return c.json(user);
});

app.post("/updateSimpleUser", async (c) => {
  const rawUser = await c.req.json();
  const user = SimpleUserSchema.parse(rawUser); // Validates + deserializes dates
  user.lastUpdate = new Date();
  return c.json(user);
});

export interface BunServerOptions {
  port?: number;
}

export const initHttpBun = (options: BunServerOptions = {}) => {
  const port = options.port ?? 3000;
  return Bun.serve({
    port,
    fetch: app.fetch,
  });
};

// For direct execution
if (import.meta.main) {
  initHttpBun({ port: 3000 });
  console.log("Hono Bun server running on port 3000");
}
