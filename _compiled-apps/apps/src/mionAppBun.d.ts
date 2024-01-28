/// <reference types="bun-types" />
import { BunHttpOptions } from "@mionkit/bun";
import { User } from "./models";
export declare const shared: {};
export type Shared = typeof SharedArrayBuffer;
export declare const mionSayHelloRoute: {
    type: import("@mionkit/router").ProcedureType.route;
    handler: () => string;
    runOnError: false;
    canReturnData: true;
};
export declare const updateUser: {
    type: import("@mionkit/router").ProcedureType.route;
    handler: (ctx: any, user: User) => User;
    runOnError: false;
    canReturnData: true;
};
export declare const routes: {
    hello: {
        type: import("@mionkit/router").ProcedureType.route;
        handler: () => string;
        runOnError: false;
        canReturnData: true;
    };
    updateUser: {
        type: import("@mionkit/router").ProcedureType.route;
        handler: (ctx: any, user: User) => User;
        runOnError: false;
        canReturnData: true;
    };
};
export declare const initHttpBun: (options?: Partial<BunHttpOptions>) => import("bun").Server;
export { registerRoutes, initRouter } from "@mionkit/router";
export declare type __ΩShared = any[];
//# sourceMappingURL=mionAppBun.d.ts.map