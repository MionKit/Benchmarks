import { Elysia } from 'elysia';
import { User } from './models';
export interface BunServerOptions {
    port?: number;
}
export declare const initHttpBun: (options?: BunServerOptions) => Elysia<"", {
    decorator: {};
    store: {};
    derive: {};
    resolve: {};
}, {
    typebox: {};
    error: {};
}, {
    schema: {};
    standaloneSchema: {};
    macro: {};
    macroFn: {};
    parser: {};
    response: {};
}, {
    hello: {
        get: {
            body: unknown;
            params: {};
            query: unknown;
            headers: unknown;
            response: {
                200: {
                    hello: string;
                };
            };
        };
    };
} & {
    updateUser: {
        post: {
            body: {
                id: number;
                createdAt: Date;
                updatedAt: Date;
                username: string;
                email: string;
                profile: {
                    bio?: string | undefined;
                    avatarUrl?: string | undefined;
                    firstName: string;
                    lastName: string;
                    displayName: string;
                    dateOfBirth: Date;
                };
                role: "admin" | "user" | "guest" | "moderator";
                status: "active" | "suspended" | "pending_verification" | "deactivated";
                address: {
                    street: string;
                    city: string;
                    state: string;
                    zipCode: string;
                    country: string;
                };
                paymentMethods: ({
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
                    email: string;
                    type: "paypal";
                })[];
                preferences: {
                    theme: "light" | "dark" | "system";
                    language: string;
                    timezone: string;
                    notifications: {
                        email: boolean;
                        sms: boolean;
                        push: boolean;
                        frequency: "immediate" | "daily" | "weekly";
                    };
                };
                lastLoginAt: Date | undefined;
                tags: string[];
            };
            params: {};
            query: unknown;
            headers: unknown;
            response: {
                200: User;
                422: {
                    type: "validation";
                    on: string;
                    summary?: string;
                    message?: string;
                    found?: unknown;
                    property?: string;
                    expected?: string;
                };
            };
        };
    };
}, {
    derive: {};
    resolve: {};
    schema: {};
    standaloneSchema: {};
    response: {};
}, {
    derive: {};
    resolve: {};
    schema: {};
    standaloneSchema: {};
    response: {};
}>;
export declare type __ΩBunServerOptions = any[];
//# sourceMappingURL=elysiaAppBun.d.ts.map