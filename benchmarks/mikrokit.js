"use strict";

const { initHttp, addRoutes, routes } = require("@mikrokit/compiled-app");

const options = {
  enableValidation: false,
  enableSerialization: false,
};

const { startHttpServer } = initHttp(options);

/**
 * Mikrokit includes automatic validation depending on types and requires pre-compilation.
 * So everything is precompiled inside the @mikrokit/compiled-app.
  routes = {
      '/': (): HelloReply => ({hello: 'world'}),
  };  
 * */
addRoutes(routes);

startHttpServer({ port: 3000 });
