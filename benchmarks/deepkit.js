"use strict";

const { initDeepkitApp, setRoutes } = require("@mikrokit/compiled-app");

// ###### Original app in typescript, check @mikrokit/compiled-app src. full validation and serialization out of the box

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

// export const mikrokitSayHelloRoute: Route = (): SayHello => ({hello: 'world'});

// export const routes: Routes = {
//   '/': mikrokitSayHelloRoute,
//   updateUser: (context, user: User): User => {
//       return {
//           ...user,
//           lastUpdate: new Date(),
//       };
//   },
// };

// ###### exported app just to be able to use in js instead ts

const { deepkitServer } = initDeepkitApp();

setRoutes();

deepkitServer.listen(3000);
