import { z } from "zod";

// ============ Union Types ============
export const UserRoleSchema = z.enum(["admin", "user", "guest", "moderator"]);

export const AccountStatusSchema = z.enum([
  "active",
  "suspended",
  "pending_verification",
  "deactivated",
]);

// ============ Nested Objects ============
export const AddressSchema = z.object({
  street: z.string(),
  city: z.string(),
  state: z.string(),
  zipCode: z.string(),
  country: z.string(),
});

export const NotificationSettingsSchema = z.object({
  email: z.boolean(),
  sms: z.boolean(),
  push: z.boolean(),
  frequency: z.enum(["immediate", "daily", "weekly"]),
});

export const UserPreferencesSchema = z.object({
  theme: z.enum(["light", "dark", "system"]),
  language: z.string(),
  timezone: z.string(),
  notifications: NotificationSettingsSchema,
});

// ============ Discriminated Union ============
export const CreditCardSchema = z.object({
  type: z.literal("credit_card"),
  lastFourDigits: z.string(),
  expiryMonth: z.number(),
  expiryYear: z.number(),
  brand: z.string(),
});

export const BankAccountSchema = z.object({
  type: z.literal("bank_account"),
  bankName: z.string(),
  accountLastFour: z.string(),
  routingNumber: z.string(),
});

export const PaypalSchema = z.object({
  type: z.literal("paypal"),
  email: z.string(),
});

export const PaymentMethodSchema = z.discriminatedUnion("type", [
  CreditCardSchema,
  BankAccountSchema,
  PaypalSchema,
]);

// ============ Profile Schema ============
export const ProfileSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  displayName: z.string(),
  bio: z.string().optional(),
  avatarUrl: z.string().optional(),
  dateOfBirth: z.coerce.date(), // Automatically converts ISO string to Date
});

// ============ User Schema (complex model for update-user benchmark) ============
export const UserSchema = z
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
  .strict(); // Rejects unknown keys

export type User = z.infer<typeof UserSchema>;

// ============ Simple User Schema (for simple-user benchmark) ============
export const SimpleUserSchema = z
  .object({
    id: z.number(),
    name: z.string(),
    surname: z.string(),
    lastUpdate: z.coerce.date(), // Automatically converts ISO string to Date
  })
  .strict(); // Rejects unknown keys

export type SimpleUser = z.infer<typeof SimpleUserSchema>;

// Hello response schema
export const HelloSchema = z.object({
  hello: z.string(),
});

export type HelloResponse = z.infer<typeof HelloSchema>;
