import { NodeHttpOptions } from '@mionkit/http';
import { RouterOptions } from '@mionkit/router';
import { User } from './models';
export declare const routes: {
    hello: import('@mionkit/router').RouteDef<() => string>;
    updateUser: import('@mionkit/router').RouteDef<(ctx: any, user: User) => User>;
};
export declare const initHttp: (routerOpts?: Partial<RouterOptions>, httpOpts?: Partial<NodeHttpOptions>) => Promise<import('http').Server<typeof import('http').IncomingMessage, typeof import('http').ServerResponse> | import('https').Server<typeof import('http').IncomingMessage, typeof import('http').ServerResponse>>;
//# sourceMappingURL=mionAppNode-debug.d.ts.map