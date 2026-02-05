/* ########
 * 2022 mion
 * Author: Ma-jerez
 * License: MIT
 * The software is provided "as is", without warranty of any kind.
 * ######## */

import { NewUser, PartialUser, User, UserId } from "./models";

const getId = (entOrId: UserId): number => {
  if (typeof entOrId === "number") return entOrId;
  return entOrId.id;
};

const store = new Map<number, User>();

// Default values for creating a new user
const createDefaultUser = (id: number, newUser: NewUser): User => ({
  id,
  ...newUser,
  createdAt: new Date(),
  updatedAt: new Date(),
});

export const usersStore = {
  create: (user: NewUser): User => {
    const id = store.size + 1;
    const newUser = createDefaultUser(id, user);
    store.set(id, newUser);
    return newUser;
  },
  get: (userId: UserId): User | undefined => {
    return store.get(getId(userId));
  },
  update: (user: PartialUser): User | undefined => {
    const existing = store.get(user.id);
    if (!existing) return undefined;
    const updated = {
      ...existing,
      ...user,
      updatedAt: new Date(),
    };
    store.set(user.id, updated);
    return updated;
  },
  delete: (userId: UserId): User | undefined => {
    const id = getId(userId);
    const user = store.get(id);
    if (!user) return undefined;
    store.delete(getId(id));
    return user;
  },
};

export const hasUnknownKeys = (knownKeys: string[], input: any): boolean => {
  if (typeof input !== "object") return true;
  const unknownKeys = Object.keys(input);
  return unknownKeys.some((ukn) => !knownKeys.includes(ukn));
};

// Known keys for the complex User model
const userKnownKeys = [
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
  "lastLoginAt",
  "tags",
];

export const isUserId = (input: any): input is UserId => {
  if (typeof input === "number") return true;
  if (typeof input !== "object") return false;
  if (hasUnknownKeys(userKnownKeys, input)) return false;
  return (
    typeof input?.id === "number" &&
    typeof input?.username === "string" &&
    typeof input?.email === "string"
  );
};

export const isNewUser = (input: any): input is NewUser => {
  if (typeof input !== "object") return false;
  // NewUser doesn't have id, createdAt, or updatedAt
  return (
    !input?.id &&
    typeof input?.username === "string" &&
    typeof input?.email === "string" &&
    !input?.createdAt &&
    !input?.updatedAt
  );
};

export const isPartialuser = (input: any): input is PartialUser => {
  if (typeof input !== "object") return false;
  return typeof input?.id === "number";
};
