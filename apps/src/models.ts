/* ########
 * 2022 mion
 * Author: Ma-jerez
 * License: MIT
 * The software is provided "as is", without warranty of any kind.
 * ######## */

// ============ Union Types (instead of enums) ============
export type UserRole = "admin" | "user" | "guest" | "moderator";

export type AccountStatus =
  | "active"
  | "suspended"
  | "pending_verification"
  | "deactivated";

// ============ Nested Objects ============
export interface Address {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

export interface UserPreferences {
  theme: "light" | "dark" | "system";
  language: string;
  timezone: string;
  notifications: NotificationSettings;
}

export interface NotificationSettings {
  email: boolean;
  sms: boolean;
  push: boolean;
  frequency: "immediate" | "daily" | "weekly";
}

// ============ Discriminated Union ============
export type PaymentMethod =
  | {
      type: "credit_card";
      lastFourDigits: string;
      expiryMonth: number;
      expiryYear: number;
      brand: string;
    }
  | {
      type: "bank_account";
      bankName: string;
      accountLastFour: string;
      routingNumber: string;
    }
  | { type: "paypal"; email: string };

// ============ User Model ============
export interface User {
  // Basic info
  id: number;
  username: string;
  email: string;

  // Profile
  profile: {
    firstName: string;
    lastName: string;
    displayName: string;
    bio?: string;
    avatarUrl?: string;
    dateOfBirth: Date;
  };

  // Account metadata
  role: UserRole;
  status: AccountStatus;

  // Single address
  address: Address;

  // Array of discriminated union
  paymentMethods: PaymentMethod[];

  // Preferences
  preferences: UserPreferences;

  // Timestamps
  createdAt: Date;
  updatedAt: Date;
  lastLoginAt?: Date;

  // Tags
  tags: string[];
}

// ============ Helper Types (derived from User) ============
export type NewUser = Omit<User, "id" | "createdAt" | "updatedAt">;
export type UserId = User | number;
export type PartialUser = Partial<User> & { id: number };
export type SayHello = { hello: string };
export type HelloReply = { hello: string };

// ============ Simple User Model (for simple-user benchmark) ============
export interface SimpleUser {
  id: number;
  name: string;
  surname: string;
  lastUpdate: Date;
}
