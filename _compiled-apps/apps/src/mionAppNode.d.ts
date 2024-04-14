/// <reference types="node" />
/// <reference types="node" />
import { NodeHttpOptions } from "@mionkit/http";
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
export declare const initHttp: (options?: Partial<NodeHttpOptions>) => Promise<import("http").Server<typeof import("http").IncomingMessage, typeof import("http").ServerResponse> | import("https").Server<typeof import("http").IncomingMessage, typeof import("http").ServerResponse>>;
export { registerRoutes, initRouter } from "@mionkit/router";
//# sourceMappingURL=mionAppNode.d.ts.map