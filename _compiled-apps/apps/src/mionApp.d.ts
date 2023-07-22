import { HttpOptions } from "@mionkit/http";
import { type Routes, type Route } from "@mionkit/router";
import { User } from "./models";
export declare const shared: {};
export type Shared = typeof SharedArrayBuffer;
export declare const mionSayHelloRoute: Route;
export declare const updateUser: Route;
export declare const updateUserNoAppOrContext: (user: User) => Promise<User>;
export declare const logAsyncCallContext: (name: string) => {
    hello: string;
};
export declare const routes: Routes;
export declare const routesWithAsyncCallContext: Routes;
export declare const initHttp: (options?: Partial<HttpOptions>) => void;
export { registerRoutes as addRoutes } from "@mionkit/router";
export declare type __ΩShared = any[];
//# sourceMappingURL=mionApp.d.ts.map