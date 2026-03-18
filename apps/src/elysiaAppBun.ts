/* ########
 * 2024 mion-benchmarks
 * Elysia Bun Server - Pre-compiled for consistent benchmarking
 * License: MIT
 * ######## */

import { Elysia, t } from "elysia";
import type { User, SimpleUser } from "./models";

// TypeBox schema with Transform for automatic date coercion
const DateString = t
  .Transform(t.String({ format: "date-time" }))
  .Decode((value) => new Date(value)) // string -> Date on input
  .Encode((value) => value.toISOString()); // Date -> string on output

const OptionalDateString = t.Optional(
  t
    .Transform(t.String({ format: "date-time" }))
    .Decode((value) => new Date(value))
    .Encode((value) => value.toISOString()),
);

// ============ Nested Objects ============
const AddressSchema = t.Object(
  {
    street: t.String(),
    city: t.String(),
    state: t.String(),
    zipCode: t.String(),
    country: t.String(),
  },
  { additionalProperties: false },
);

const NotificationSettingsSchema = t.Object(
  {
    email: t.Boolean(),
    sms: t.Boolean(),
    push: t.Boolean(),
    frequency: t.Union([
      t.Literal("immediate"),
      t.Literal("daily"),
      t.Literal("weekly"),
    ]),
  },
  { additionalProperties: false },
);

const UserPreferencesSchema = t.Object(
  {
    theme: t.Union([
      t.Literal("light"),
      t.Literal("dark"),
      t.Literal("system"),
    ]),
    language: t.String(),
    timezone: t.String(),
    notifications: NotificationSettingsSchema,
  },
  { additionalProperties: false },
);

// ============ Discriminated Union ============
const CreditCardSchema = t.Object(
  {
    type: t.Literal("credit_card"),
    lastFourDigits: t.String(),
    expiryMonth: t.Number(),
    expiryYear: t.Number(),
    brand: t.String(),
  },
  { additionalProperties: false },
);

const BankAccountSchema = t.Object(
  {
    type: t.Literal("bank_account"),
    bankName: t.String(),
    accountLastFour: t.String(),
    routingNumber: t.String(),
  },
  { additionalProperties: false },
);

const PaypalSchema = t.Object(
  {
    type: t.Literal("paypal"),
    email: t.String(),
  },
  { additionalProperties: false },
);

const PaymentMethodSchema = t.Union([
  CreditCardSchema,
  BankAccountSchema,
  PaypalSchema,
]);

// ============ Profile Schema ============
const ProfileSchema = t.Object(
  {
    firstName: t.String(),
    lastName: t.String(),
    displayName: t.String(),
    bio: t.Optional(t.String()),
    avatarUrl: t.Optional(t.String()),
    dateOfBirth: DateString,
  },
  { additionalProperties: false },
);

// ============ User Schema ============
const UserSchema = t.Object(
  {
    // Basic info
    id: t.Number(),
    username: t.String(),
    email: t.String(),

    // Profile
    profile: ProfileSchema,

    // Account metadata
    role: t.Union([
      t.Literal("admin"),
      t.Literal("user"),
      t.Literal("guest"),
      t.Literal("moderator"),
    ]),
    status: t.Union([
      t.Literal("active"),
      t.Literal("suspended"),
      t.Literal("pending_verification"),
      t.Literal("deactivated"),
    ]),

    // Single address
    address: AddressSchema,

    // Array of discriminated union
    paymentMethods: t.Array(PaymentMethodSchema),

    // Preferences
    preferences: UserPreferencesSchema,

    // Timestamps
    createdAt: DateString,
    updatedAt: DateString,
    lastLoginAt: OptionalDateString,

    // Tags
    tags: t.Array(t.String()),
  },
  { additionalProperties: false },
);

// ============ Simple User Schema (for simple-user benchmark) ============
const SimpleUserSchema = t.Object(
  {
    id: t.Number(),
    name: t.String(),
    surname: t.String(),
    lastUpdate: DateString,
  },
  { additionalProperties: false },
);

// Create app without starting server
const createApp = () => {
  return new Elysia({ normalize: false })
    .get("/hello", () => ({ hello: "world" }))
    .post(
      "/updateUser",
      ({ body }) => {
        // body fields are already Date objects thanks to Transform
        // Type assertion needed because TypeBox's type inference doesn't understand Transform
        const user = body as unknown as User;

        // Update timestamps
        user.updatedAt = new Date();
        user.lastLoginAt = new Date();

        // Update profile modification
        user.profile.displayName = `${user.profile.firstName} ${user.profile.lastName.charAt(0)}.`;

        return user;
      },
      { body: UserSchema },
    )
    .post(
      "/updateSimpleUser",
      ({ body }) => {
        // body fields are already Date objects thanks to Transform
        const user = body as unknown as SimpleUser;
        user.lastUpdate = new Date();
        return user;
      },
      { body: SimpleUserSchema },
    );
};

export interface BunServerOptions {
  port?: number;
}

export const initHttpBun = (options: BunServerOptions = {}) => {
  const port = options.port ?? 3000;
  const app = createApp().listen(port);
  // Logging disabled for benchmarks - uncomment for debugging
  // console.log(`Elysia server running on port ${port}`);
  return app;
};

// For direct execution
if (import.meta.main) {
  initHttpBun({ port: 3000 });
}
