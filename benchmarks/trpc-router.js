// "use strict";

// const trpc = require("@trpc/server");
// const { fastifyTRPCPlugin } = require("@trpc/server/adapters/fastify");

// // ##### user type
// // interface User {
// //   id: number;
// //   name: string;
// //   surname: string;
// //   lastUpdate: Date;
// // }

// // ##### validation / deserialization : USING MANUAL Validation, the framework might support something else ############
// const hasUnknownKeys = (knownKeys, input) => {
//   if (typeof input !== "object") return true;
//   const unknownKeys = Object.keys(input);
//   return unknownKeys.some((ukn) => !knownKeys.includes(ukn));
// };

// // before serialize
// const isUser = (input) => {
//   if (typeof input !== "object") return false;
//   if (hasUnknownKeys(["id", "name", "surname", "lastUpdate"], input))
//     return false;
//   return (
//     typeof input?.id === "number" &&
//     typeof input?.name === "string" &&
//     typeof input?.surname === "string" &&
//     typeof input?.lastUpdate === "string"
//   );
// };

// const deserializeUser = (jsonParseResult) => {
//   if (typeof jsonParseResult?.lastUpdate === "string")
//     return {
//       ...jsonParseResult,
//       lastUpdate: new Date(jsonParseResult.lastUpdate),
//     };
//   return jsonParseResult;
// };

// // ##### ROUTES ############
// const fastify = require("fastify")();

// // https://trpc.io/docs/v9/router
// const appRouter = trpc.router();

// appRouter.mutation("", {
//   resolve: () => {
//     return { hello: "world" };
//   },
// });

// appRouter.mutation("updateUser", {
//   resolve: (input) => {
//     // TODO: Cant make trcp work with posts method and the expected return format.
//     // it si too opinitonated
//     // const rawUser = req.body?.["/updateUser"];
//     // if (!isUser(rawUser)) throw "app error, invalid parameter, not a user";
//     // const user = deserializeUser(rawUser); // we would need to deserialize to be able to use date etc
//     // res.contentType = "json";
//     // return {
//     //   "/updateUser": {
//     //     ...user,
//     //     name: "lorem",
//     //     surname: "ipsum",
//     //     lastUpdate: new Date(),
//     //   },
//     // };
//   },
// });

// fastify.register(fastifyTRPCPlugin, {
//   prefix: "",
//   trpcOptions: { router: appRouter, createContext: () => {} },
// });

// // Route URL is composed by prefix + query() first string param.
// // In this benchmark, assigning an empty string to both of them is a way for exposing URL "/".
// // A more realistic case would be having prefix="/trpc" and query('tasks'),
// // which would expose the URL "/trpc/tasks"
// fastify.listen({ port: 3000, host: "127.0.0.1" });
