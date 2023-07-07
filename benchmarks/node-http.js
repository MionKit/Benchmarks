"use strict";

// ##### user type
// interface User {
//   id: number;
//   name: string;
//   surname: string;
//   lastUpdate: Date;
// }

// ##### validation / deserialization : USING MANUAL Validation, the framework might support something else ############
const hasUnknownKeys = (knownKeys, input) => {
  if (typeof input !== "object") return true;
  const unknownKeys = Object.keys(input);
  return unknownKeys.some((ukn) => !knownKeys.includes(ukn));
};

// before serialize
const isUser = (input) => {
  if (typeof input !== "object") return false;
  if (hasUnknownKeys(["id", "name", "surname", "lastUpdate"], input))
    return false;
  return (
    typeof input?.id === "number" &&
    typeof input?.name === "string" &&
    typeof input?.surname === "string" &&
    typeof input?.lastUpdate === "string"
  );
};

const deserializeUser = (jsonParseResult) => {
  if (typeof jsonParseResult?.lastUpdate === "string")
    return {
      ...jsonParseResult,
      lastUpdate: new Date(jsonParseResult.lastUpdate),
    };
  return jsonParseResult;
};

// ##### ROUTES ############
const reply = (httpResponse, json, statusCode) => {
  httpResponse.statusCode = statusCode;
  httpResponse.setHeader("content-length", json.length);
  httpResponse.write(json);
  httpResponse.end();
};

const server = require("http").createServer(function (req, res) {
  res.setHeader("content-type", "application/json; charset=utf-8");

  if (req.url === "/") {
    res.end(JSON.stringify({ "/": { hello: "world" } }));
  } else if (req.url === "/updateUser") {
    const body = JSON.parse(
      '{"/updateUser":{"id":123,"name":"john","surname":"smith","lastUpdate":"2020-12-17T02:24:00.000Z"}}'
    ); // lazy to read request data properly in bare http
    const rawUser = body["/updateUser"];
    if (!isUser(rawUser)) {
      const errorBody = JSON.stringify({ error: "invalid input, not an user" });
      reply(res, errorBody, 400);
    }
    const user = deserializeUser(rawUser); // we would need to deserialize to be able to use date etc
    const resBody = JSON.stringify({
      "/updateUser": {
        ...user,
        name: "lorem",
        surname: "ipsum",
        lastUpdate: new Date(),
      },
    });
    reply(res, resBody, 200);
  } else {
    const errorBody = JSON.stringify({ error: "route not found" });
    reply(res, errorBody, 404);
  }
});

server.listen(3000);
