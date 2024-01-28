/// <reference types="node" />
/// <reference types="node" />
import { NodeHttpOptions } from "@mionkit/http";
import { type Route } from "@mionkit/router";
export declare const shared: {};
export type Shared = typeof SharedArrayBuffer;
export declare const mionSayHelloRoute: {
    type: import("@mionkit/router").ProcedureType.route;
    handler: () => string;
    runOnError: false;
    canReturnData: true;
};
export declare const updateUser: Route;
export declare const routes: {
    hello: {
        type: import("@mionkit/router").ProcedureType.route;
        handler: () => string;
        runOnError: false;
        canReturnData: true;
    };
    updateUser: Route;
};
export declare const initHttp: (options?: Partial<NodeHttpOptions>) => Promise<import("http").Server<typeof import("http").IncomingMessage, typeof import("http").ServerResponse> | import("https").Server<typeof import("http").IncomingMessage, typeof import("http").ServerResponse>>;
export { registerRoutes, initRouter } from "@mionkit/router";
export declare type __ΩShared = any[];
//# sourceMappingURL=mionAppNode.d.ts.map