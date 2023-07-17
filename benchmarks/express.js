"use strict";

const express = require("express");

// ##### user type
// interface User {
//   id: number;
//   name: string;
//   surname: string;
//   lastUpdate: Date;
// }

// ##### validation / deserialization ############
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

const app = express();

// ##### MIDDLEWARE ############
app.use(express.json());
app.use((err, req, res, next) => {
  if (err.message.includes("app error"))
    res.status(400).json({ error: err.message });
  else res.status(500).send("Something broke!");
});

app.disable("etag");
app.disable("x-powered-by");

// ##### ROUTES ############
app.post("/", function (req, res) {
  res.json({ "/": { hello: "world" } });
});

app.post("/updateUser", function (req, res) {
  const rawUser = req.body?.["/updateUser"];
  if (!isUser(rawUser)) throw "app error, invalid parameter, not a user";
  const user = deserializeUser(rawUser);
  user.lastUpdate.setMonth(user.lastUpdate.getMonth() + 1);
  res.json({
    "/updateUser": user,
  });
});

app.listen(3000);
