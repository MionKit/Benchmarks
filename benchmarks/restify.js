"use strict";

const restify = require("restify");

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
const server = restify.createServer();
server.use(restify.plugins.bodyParser({}));

server.post("/updateUser", function (req, res) {
  const rawUser = req.body?.["/updateUser"];
  if (!isUser(rawUser)) throw "app error, invalid parameter, not a user";
  const user = deserializeUser(rawUser); // we would need to deserialize to be able to use date etc
  res.contentType = "json";
  res.send({
    "/updateUser": {
      ...user,
      name: "lorem",
      surname: "ipsum",
      lastUpdate: new Date(),
    },
  });
});

server.post("/", function (req, res) {
  res.contentType = "json";
  res.send({ hello: "world" });
});

server.listen(3000);
