"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const hono = require("hono");
const zod = require("zod");
const UserRoleSchema = zod.z.enum(["admin", "user", "guest", "moderator"]);
const AccountStatusSchema = zod.z.enum([
  "active",
  "suspended",
  "pending_verification",
  "deactivated"
]);
const AddressSchema = zod.z.object({
  street: zod.z.string(),
  city: zod.z.string(),
  state: zod.z.string(),
  zipCode: zod.z.string(),
  country: zod.z.string()
});
const NotificationSettingsSchema = zod.z.object({
  email: zod.z.boolean(),
  sms: zod.z.boolean(),
  push: zod.z.boolean(),
  frequency: zod.z.enum(["immediate", "daily", "weekly"])
});
const UserPreferencesSchema = zod.z.object({
  theme: zod.z.enum(["light", "dark", "system"]),
  language: zod.z.string(),
  timezone: zod.z.string(),
  notifications: NotificationSettingsSchema
});
const CreditCardSchema = zod.z.object({
  type: zod.z.literal("credit_card"),
  lastFourDigits: zod.z.string(),
  expiryMonth: zod.z.number(),
  expiryYear: zod.z.number(),
  brand: zod.z.string()
});
const BankAccountSchema = zod.z.object({
  type: zod.z.literal("bank_account"),
  bankName: zod.z.string(),
  accountLastFour: zod.z.string(),
  routingNumber: zod.z.string()
});
const PaypalSchema = zod.z.object({
  type: zod.z.literal("paypal"),
  email: zod.z.string()
});
const PaymentMethodSchema = zod.z.discriminatedUnion("type", [
  CreditCardSchema,
  BankAccountSchema,
  PaypalSchema
]);
const ProfileSchema = zod.z.object({
  firstName: zod.z.string(),
  lastName: zod.z.string(),
  displayName: zod.z.string(),
  bio: zod.z.string().optional(),
  avatarUrl: zod.z.string().optional(),
  dateOfBirth: zod.z.coerce.date()
  // Automatically converts ISO string to Date
});
const UserSchema = zod.z.object({
  // Basic info
  id: zod.z.number(),
  username: zod.z.string(),
  email: zod.z.string(),
  // Profile
  profile: ProfileSchema,
  // Account metadata
  role: UserRoleSchema,
  status: AccountStatusSchema,
  // Single address
  address: AddressSchema,
  // Array of discriminated union
  paymentMethods: zod.z.array(PaymentMethodSchema),
  // Preferences
  preferences: UserPreferencesSchema,
  // Timestamps
  createdAt: zod.z.coerce.date(),
  // Automatically converts ISO string to Date
  updatedAt: zod.z.coerce.date(),
  // Automatically converts ISO string to Date
  lastLoginAt: zod.z.coerce.date().optional(),
  // Optional date field
  // Tags
  tags: zod.z.array(zod.z.string())
}).strict();
const app = new hono.Hono();
app.get("/hello", (c) => {
  return c.json({ hello: "world" });
});
app.post("/updateUser", async (c) => {
  const rawUser = await c.req.json();
  const user = UserSchema.parse(rawUser);
  user.updatedAt = /* @__PURE__ */ new Date();
  user.lastLoginAt = /* @__PURE__ */ new Date();
  user.profile.displayName = `${user.profile.firstName} ${user.profile.lastName.charAt(0)}.`;
  return c.json(user);
});
const initHttpBun = (options = {}) => {
  const port = options.port ?? 3e3;
  return Bun.serve({
    port,
    fetch: app.fetch
  });
};
if (void 0) {
  initHttpBun({ port: 3e3 });
  console.log("Hono Bun server running on port 3000");
}
exports.initHttpBun = initHttpBun;
//# sourceMappingURL=honoAppBun.js.map
