import { Obj, SharedDataFactory, RouterOptions } from "@mionkit/router";
import { HttpOptions } from "@mionkit/http";
export declare const initFsHttp: <App extends Obj, SharedData extends Obj>(app: App, handlersDataFactory?: SharedDataFactory<SharedData> | undefined, routerOptions?: Partial<RouterOptions<any>>) => void;
export declare const startFsServer: (httpOptions_?: Partial<HttpOptions>) => Promise<void>;
//# sourceMappingURL=fastMion.d.ts.map