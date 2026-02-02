import { Elysia } from 'elysia';
export interface User {
    id: number;
    name: string;
    surname: string;
    lastUpdate: Date;
}
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
                lastUpdate: Date;
                name: string;
                surname: string;
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
export declare type __ΩUser = any[];
export declare type __ΩBunServerOptions = any[];
//# sourceMappingURL=elysiaAppBun.d.ts.map