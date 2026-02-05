export type UserRole = "admin" | "user" | "guest" | "moderator";
export type AccountStatus = "active" | "suspended" | "pending_verification" | "deactivated";
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
export type PaymentMethod = {
    type: "credit_card";
    lastFourDigits: string;
    expiryMonth: number;
    expiryYear: number;
    brand: string;
} | {
    type: "bank_account";
    bankName: string;
    accountLastFour: string;
    routingNumber: string;
} | {
    type: "paypal";
    email: string;
};
export interface User {
    id: number;
    username: string;
    email: string;
    profile: {
        firstName: string;
        lastName: string;
        displayName: string;
        bio?: string;
        avatarUrl?: string;
        dateOfBirth: Date;
    };
    role: UserRole;
    status: AccountStatus;
    address: Address;
    paymentMethods: PaymentMethod[];
    preferences: UserPreferences;
    createdAt: Date;
    updatedAt: Date;
    lastLoginAt?: Date;
    tags: string[];
}
export type NewUser = Omit<User, "id" | "createdAt" | "updatedAt">;
export type UserId = User | number;
export type PartialUser = Partial<User> & {
    id: number;
};
export type SayHello = {
    hello: string;
};
export type HelloReply = {
    hello: string;
};
export declare type __ΩUserRole = any[];
export declare type __ΩAccountStatus = any[];
export declare type __ΩAddress = any[];
export declare type __ΩUserPreferences = any[];
export declare type __ΩNotificationSettings = any[];
export declare type __ΩPaymentMethod = any[];
export declare type __ΩUser = any[];
export declare type __ΩNewUser = any[];
export declare type __ΩUserId = any[];
export declare type __ΩPartialUser = any[];
export declare type __ΩSayHello = any[];
export declare type __ΩHelloReply = any[];
//# sourceMappingURL=models.d.ts.map