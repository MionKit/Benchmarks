import { App } from "@deepkit/app";
import { FrameworkModule } from "@deepkit/framework";
import { HttpRouterRegistry } from "@deepkit/http";
import { LogMessage, LoggerTransport } from "@deepkit/logger";
export declare class MyTransport implements LoggerTransport {
    constructor();
    write(message: LogMessage): void;
    supportsColor(): boolean;
}
export declare const initDeepkitApp: () => {
    deepKitApp: App<{
        imports: FrameworkModule[];
    }>;
    deepKitRouter: HttpRouterRegistry;
};
//# sourceMappingURL=deepkitApp.d.ts.map