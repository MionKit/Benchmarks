/// <reference types="bun-types" />
/// <reference types="bun-types" />
import { BunHttpOptions } from "@mionkit/bun";
import { User } from "./models";
export declare const routes: {
    hello: {
        type: import("@mionkit/router").ProcedureType.route;
        handler: () => string;
        options: Partial<Pick<import("@mionkit/router").ProcedureOptions & {
            runOnError: false;
        }, "description" | "validateParams" | "deserializeParams" | "validateReturn" | "serializeReturn" | "isAsync">> | undefined;
    };
    updateUser: {
        type: import("@mionkit/router").ProcedureType.route;
        handler: (ctx: any, user: User) => User;
        options: Partial<Pick<import("@mionkit/router").ProcedureOptions & {
            runOnError: false;
        }, "description" | "validateParams" | "deserializeParams" | "validateReturn" | "serializeReturn" | "isAsync">> | undefined;
    };
};
export declare const initHttpBun: (options?: Partial<BunHttpOptions>) => import("bun").Server | undefined;
export { registerRoutes, initRouter } from "@mionkit/router";
//# sourceMappingURL=mionAppBun.d.ts.map