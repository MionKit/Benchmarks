"use strict";

const { z } = require("zod");

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
  .strict(); // Rejects unknown keys

// Hello response schema
const HelloSchema = z.object({
  hello: z.string(),
});

// ============ Simple User Schema (for simple-user benchmark) ============
const SimpleUserSchema = z
  .object({
    id: z.number(),
    name: z.string(),
    surname: z.string(),
    lastUpdate: z.coerce.date(), // Automatically converts ISO string to Date
  })
  .strict(); // Rejects unknown keys

module.exports = {
  UserSchema,
  SimpleUserSchema,
  HelloSchema,
  // Export sub-schemas for potential reuse
  AddressSchema,
  UserPreferencesSchema,
  NotificationSettingsSchema,
  PaymentMethodSchema,
  ProfileSchema,
  UserRoleSchema,
  AccountStatusSchema,
};
