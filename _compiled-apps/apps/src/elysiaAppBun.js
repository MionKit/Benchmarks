"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const elysia = require("elysia");
const DateString = elysia.t.Transform(elysia.t.String({ format: "date-time" })).Decode((value) => new Date(value)).Encode((value) => value.toISOString());
const OptionalDateString = elysia.t.Transform(elysia.t.Optional(elysia.t.String({ format: "date-time" }))).Decode((value) => value ? new Date(value) : void 0).Encode((value) => value ? value.toISOString() : void 0);
const AddressSchema = elysia.t.Object({
  street: elysia.t.String(),
  city: elysia.t.String(),
  state: elysia.t.String(),
  zipCode: elysia.t.String(),
  country: elysia.t.String()
});
const NotificationSettingsSchema = elysia.t.Object({
  email: elysia.t.Boolean(),
  sms: elysia.t.Boolean(),
  push: elysia.t.Boolean(),
  frequency: elysia.t.Union([
    elysia.t.Literal("immediate"),
    elysia.t.Literal("daily"),
    elysia.t.Literal("weekly")
  ])
});
const UserPreferencesSchema = elysia.t.Object({
  theme: elysia.t.Union([elysia.t.Literal("light"), elysia.t.Literal("dark"), elysia.t.Literal("system")]),
  language: elysia.t.String(),
  timezone: elysia.t.String(),
  notifications: NotificationSettingsSchema
});
const CreditCardSchema = elysia.t.Object({
  type: elysia.t.Literal("credit_card"),
  lastFourDigits: elysia.t.String(),
  expiryMonth: elysia.t.Number(),
  expiryYear: elysia.t.Number(),
  brand: elysia.t.String()
});
const BankAccountSchema = elysia.t.Object({
  type: elysia.t.Literal("bank_account"),
  bankName: elysia.t.String(),
  accountLastFour: elysia.t.String(),
  routingNumber: elysia.t.String()
});
const PaypalSchema = elysia.t.Object({
  type: elysia.t.Literal("paypal"),
  email: elysia.t.String()
});
const PaymentMethodSchema = elysia.t.Union([
  CreditCardSchema,
  BankAccountSchema,
  PaypalSchema
]);
const ProfileSchema = elysia.t.Object({
  firstName: elysia.t.String(),
  lastName: elysia.t.String(),
  displayName: elysia.t.String(),
  bio: elysia.t.Optional(elysia.t.String()),
  avatarUrl: elysia.t.Optional(elysia.t.String()),
  dateOfBirth: DateString
});
const UserSchema = elysia.t.Object({
  // Basic info
  id: elysia.t.Number(),
  username: elysia.t.String(),
  email: elysia.t.String(),
  // Profile
  profile: ProfileSchema,
  // Account metadata
  role: elysia.t.Union([
    elysia.t.Literal("admin"),
    elysia.t.Literal("user"),
    elysia.t.Literal("guest"),
    elysia.t.Literal("moderator")
  ]),
  status: elysia.t.Union([
    elysia.t.Literal("active"),
    elysia.t.Literal("suspended"),
    elysia.t.Literal("pending_verification"),
    elysia.t.Literal("deactivated")
  ]),
  // Single address
  address: AddressSchema,
  // Array of discriminated union
  paymentMethods: elysia.t.Array(PaymentMethodSchema),
  // Preferences
  preferences: UserPreferencesSchema,
  // Timestamps
  createdAt: DateString,
  updatedAt: DateString,
  lastLoginAt: OptionalDateString,
  // Tags
  tags: elysia.t.Array(elysia.t.String())
});
const SimpleUserSchema = elysia.t.Object({
  id: elysia.t.Number(),
  name: elysia.t.String(),
  surname: elysia.t.String(),
  lastUpdate: DateString
});
const createApp = () => {
  return new elysia.Elysia().get("/hello", () => ({ hello: "world" })).post(
    "/updateUser",
    ({ body }) => {
      const user = body;
      user.updatedAt = /* @__PURE__ */ new Date();
      user.lastLoginAt = /* @__PURE__ */ new Date();
      user.profile.displayName = `${user.profile.firstName} ${user.profile.lastName.charAt(0)}.`;
      return user;
    },
    { body: UserSchema }
  ).post(
    "/updateSimpleUser",
    ({ body }) => {
      const user = body;
      user.lastUpdate = /* @__PURE__ */ new Date();
      return user;
    },
    { body: SimpleUserSchema }
  );
};
const initHttpBun = (options = {}) => {
  const port = options.port ?? 3e3;
  const app = createApp().listen(port);
  return app;
};
if (void 0) {
  initHttpBun({ port: 3e3 });
}
exports.initHttpBun = initHttpBun;
//# sourceMappingURL=elysiaAppBun.js.map
