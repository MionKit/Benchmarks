"use strict";

// !! IMPORTANT !!!
// fastify memory consumptions seem a bit hight after upgrading to latest v5
// we tried both using zod and fastify schemas and behaviour seems the same

// Disable logging and optimize for benchmarks
const fastify = require("fastify")({
  logger: false,
  disableRequestLogging: true,
  requestIdHeader: false,
  requestIdLogLabel: false,
});

// ============ JSON Schema Definitions ============

// Shared schema definitions
const addressSchema = {
  type: "object",
  required: ["street", "city", "state", "zipCode", "country"],
  additionalProperties: false,
  properties: {
    street: { type: "string" },
    city: { type: "string" },
    state: { type: "string" },
    zipCode: { type: "string" },
    country: { type: "string" },
  },
};

const notificationSettingsSchema = {
  type: "object",
  required: ["email", "sms", "push", "frequency"],
  additionalProperties: false,
  properties: {
    email: { type: "boolean" },
    sms: { type: "boolean" },
    push: { type: "boolean" },
    frequency: { type: "string", enum: ["immediate", "daily", "weekly"] },
  },
};

const userPreferencesSchema = {
  type: "object",
  required: ["theme", "language", "timezone", "notifications"],
  additionalProperties: false,
  properties: {
    theme: { type: "string", enum: ["light", "dark", "system"] },
    language: { type: "string" },
    timezone: { type: "string" },
    notifications: notificationSettingsSchema,
  },
};

const profileSchema = {
  type: "object",
  required: ["firstName", "lastName", "displayName", "dateOfBirth"],
  additionalProperties: false,
  properties: {
    firstName: { type: "string" },
    lastName: { type: "string" },
    displayName: { type: "string" },
    bio: { type: "string" },
    avatarUrl: { type: "string" },
    dateOfBirth: { type: "string", format: "date-time" },
  },
};

// Payment method schemas (discriminated union via oneOf)
const creditCardSchema = {
  type: "object",
  required: ["type", "lastFourDigits", "expiryMonth", "expiryYear", "brand"],
  additionalProperties: false,
  properties: {
    type: { type: "string", const: "credit_card" },
    lastFourDigits: { type: "string" },
    expiryMonth: { type: "integer" },
    expiryYear: { type: "integer" },
    brand: { type: "string" },
  },
};

const bankAccountSchema = {
  type: "object",
  required: ["type", "bankName", "accountLastFour", "routingNumber"],
  additionalProperties: false,
  properties: {
    type: { type: "string", const: "bank_account" },
    bankName: { type: "string" },
    accountLastFour: { type: "string" },
    routingNumber: { type: "string" },
  },
};

const paypalSchema = {
  type: "object",
  required: ["type", "email"],
  additionalProperties: false,
  properties: {
    type: { type: "string", const: "paypal" },
    email: { type: "string" },
  },
};

const paymentMethodSchema = {
  oneOf: [creditCardSchema, bankAccountSchema, paypalSchema],
};

// Main User schema
const userSchema = {
  type: "object",
  required: [
    "id",
    "username",
    "email",
    "profile",
    "role",
    "status",
    "address",
    "paymentMethods",
    "preferences",
    "createdAt",
    "updatedAt",
    "tags",
  ],
  additionalProperties: false,
  properties: {
    id: { type: "integer" },
    username: { type: "string" },
    email: { type: "string" },
    profile: profileSchema,
    role: { type: "string", enum: ["admin", "user", "guest", "moderator"] },
    status: {
      type: "string",
      enum: ["active", "suspended", "pending_verification", "deactivated"],
    },
    address: addressSchema,
    paymentMethods: {
      type: "array",
      items: paymentMethodSchema,
    },
    preferences: userPreferencesSchema,
    createdAt: { type: "string", format: "date-time" },
    updatedAt: { type: "string", format: "date-time" },
    lastLoginAt: { type: "string", format: "date-time" },
    tags: {
      type: "array",
      items: { type: "string" },
    },
  },
};

// Simple User schema
const simpleUserSchema = {
  type: "object",
  required: ["id", "name", "surname", "lastUpdate"],
  additionalProperties: false,
  properties: {
    id: { type: "integer" },
    name: { type: "string" },
    surname: { type: "string" },
    lastUpdate: { type: "string", format: "date-time" },
  },
};

// Hello response schema
const helloSchema = {
  type: "object",
  properties: {
    hello: { type: "string" },
  },
};

// ##### ROUTES ############

fastify.get(
  "/hello",
  {
    schema: {
      response: {
        200: helloSchema,
      },
    },
  },
  function (req, reply) {
    reply.send({ hello: "world" });
  },
);

fastify.post(
  "/updateUser",
  {
    schema: {
      body: userSchema,
      response: {
        200: userSchema,
      },
    },
  },
  async function (req, reply) {
    const user = req.body;

    // Update timestamps
    user.updatedAt = new Date().toISOString();
    user.lastLoginAt = new Date().toISOString();

    // Update profile modification
    user.profile.displayName = `${user.profile.firstName} ${user.profile.lastName.charAt(0)}.`;

    reply.send(user);
  },
);

fastify.post(
  "/updateSimpleUser",
  {
    schema: {
      body: simpleUserSchema,
      response: {
        200: simpleUserSchema,
      },
    },
  },
  async function (req, reply) {
    const user = req.body;
    user.lastUpdate = new Date().toISOString();
    reply.send(user);
  },
);

fastify.listen({ port: 3000, host: "localhost" });
