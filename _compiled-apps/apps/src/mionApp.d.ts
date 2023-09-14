import { HttpOptions } from "@mionkit/http";
import { type Route } from "@mionkit/router";
export declare const shared: {};
export type Shared = typeof SharedArrayBuffer;
export declare const mionSayHelloRoute: Route;
export declare const updateUser: Route;
export declare const routes: {
    hello: import("@mionkit/router").Handler<import("@mionkit/router").CallContext<any>, any>;
    updateUser: import("@mionkit/router").Handler<import("@mionkit/router").CallContext<any>, any>;
};
export declare const initHttp: (options?: Partial<HttpOptions>) => void;
export { registerRoutes as addRoutes } from "@mionkit/router";
export declare type __ΩShared = any[];
//# sourceMappingURL=mionApp.d.ts.map