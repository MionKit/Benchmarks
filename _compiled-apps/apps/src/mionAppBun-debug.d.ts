import { BunHttpOptions } from '@mionjs/platform-bun';
import { RouterOptions } from '@mionjs/router';
import { User } from './models';
export declare const routes: {
    hello: import('@mionjs/router').RouteDef<() => string>;
    updateUser: import('@mionjs/router').RouteDef<(ctx: any, user: User) => User>;
};
export declare const initHttpBun: (routerOpts?: Partial<RouterOptions>, options?: Partial<BunHttpOptions>) => Promise<Bun.Server<any>>;
//# sourceMappingURL=mionAppBun-debug.d.ts.map