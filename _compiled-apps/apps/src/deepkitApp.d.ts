/// <reference types="node" />
import { Server } from "http";
import { App } from "@deepkit/app";
import { HttpRouterRegistry, HttpRequest } from "@deepkit/http";
import { LogMessage, LoggerTransport } from "@deepkit/logger";
import { SayHello } from "./models";
export declare class MyTransport implements LoggerTransport {
    write(message: LogMessage): void;
    supportsColor(): boolean;
}
export declare const deepKitSayHelloRoute: () => SayHello;
export declare const setRoutes: () => void;
export declare const initDeepkitApp: () => {
    deepKitApp: App<any>;
    deepkitServer: Server<typeof HttpRequest, any>;
    deepKitRouter: HttpRouterRegistry;
};
//# sourceMappingURL=deepkitApp.d.ts.map