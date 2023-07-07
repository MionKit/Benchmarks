/// <reference types="node" />
import { Server } from "http";
import { App } from "@deepkit/app";
import { HttpRouterRegistry, HttpRequest } from "@deepkit/http";
import { SayHello } from "./models";
type mionSayHelloResponse = {
    "/": SayHello;
};
export declare const deepKitSayHelloRoute: () => mionSayHelloResponse;
export declare const setRoutes: () => void;
export declare const initDeepkitApp: () => {
    deepKitApp: App<any>;
    deepkitServer: Server<typeof HttpRequest, any>;
    deepKitRouter: HttpRouterRegistry;
};
export {};
//# sourceMappingURL=deepkitApp.d.ts.map