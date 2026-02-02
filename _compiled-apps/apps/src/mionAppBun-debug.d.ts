import { BunHttpOptions } from '@mionkit/bun';
import { RouterOptions } from '@mionkit/router';
import { User } from './models';
export declare const routes: {
    hello: import('@mionkit/router').RouteDef<() => string>;
    updateUser: import('@mionkit/router').RouteDef<(ctx: any, user: User) => User>;
};
export declare const initHttpBun: (routerOpts?: Partial<RouterOptions>, options?: Partial<BunHttpOptions>) => Promise<Bun.Server<any>>;
//# sourceMappingURL=mionAppBun-debug.d.ts.map