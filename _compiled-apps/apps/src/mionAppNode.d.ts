import { NodeHttpOptions } from '@mionjs/platform-node';
import { RouterOptions } from '@mionjs/router';
import { routes } from './mionRoutes';
export { routes };
export declare const initHttp: (routerOpts?: Partial<RouterOptions>, httpOpts?: Partial<NodeHttpOptions>) => Promise<import('http').Server<typeof import('http').IncomingMessage, typeof import('http').ServerResponse> | import('https').Server<typeof import('http').IncomingMessage, typeof import('http').ServerResponse>>;
//# sourceMappingURL=mionAppNode.d.ts.map