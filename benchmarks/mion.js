"use strict";

const { initHttp, addRoutes, routes } = require("@MionKit/compiled-app");

// ###### Original app in typescript, check @MionKit/compiled-app src. full validation and serialization out of the box

// export interface User {
//   id: number;
//   name: string;
//   surname: string;
//   lastUpdate: Date;
// }

// export const app = {};
// export const shared = {};

// export type App = typeof app;
// export type Shared = typeof SharedArrayBuffer;
// export type HelloReply = {hello: string};
// type SayHello = {hello: string};

// export const routes: Routes = {
//   '/': (): SayHello => ({hello: 'world'}),
//   updateUser: (context, user: User): User => {
//       return {
//           ...user,
//           lastUpdate: new Date(),
//       };
//   },
// };

// ###### exported app just to be able to use in js instead ts

const { startHttpServer } = initHttp({});

/**
 * mion includes automatic validation depending on types and requires pre-compilation.
 * So everything is precompiled inside the @MionKit/compiled-app.
  routes = {
      '/': (): HelloReply => ({hello: 'world'}),
  };  
 * */
addRoutes(routes);

startHttpServer({ port: 3000 });
