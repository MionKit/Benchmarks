/// <reference types="node" />
/// <reference types="bun-types" />
/// <reference types="node" />
import { NodeHttpOptions } from "@mionkit/http";
import { type Route } from "@mionkit/router";
export declare const shared: {};
export type Shared = typeof SharedArrayBuffer;
export declare const mionSayHelloRoute: () => string;
export declare const updateUser: Route;
export declare const routes: {
    hello: () => string;
    updateUser: import("@mionkit/router").Handler<import("@mionkit/router").CallContext<any>, any>;
};
export declare const initHttp: (options?: Partial<NodeHttpOptions>) => Promise<import("http").Server<typeof import("http").IncomingMessage, typeof import("http").ServerResponse> | import("https").Server<typeof import("http").IncomingMessage, typeof import("http").ServerResponse>>;
export { registerRoutes, initRouter } from "@mionkit/router";
export declare type __ΩShared = any[];
//# sourceMappingURL=mionAppNode.d.ts.map