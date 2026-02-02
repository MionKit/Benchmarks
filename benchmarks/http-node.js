"use strict";

const { UserSchema } = require("../lib/zod-schemas");

// ##### ROUTES ############
const reply = (httpResponse, json, statusCode) => {
  httpResponse.statusCode = statusCode;
  httpResponse.setHeader("content-length", json.length);
  httpResponse.write(json);
  httpResponse.end();
};

const server = require("http").createServer(function (req, res) {
  res.setHeader("content-type", "application/json; charset=utf-8");

  const data = [];
  req.on("data", function (chunk) {
    data.push(chunk);
  });

  req.on("end", function () {
    const rawBody = Buffer.concat(data).toString();
    if (req.url === "/hello") {
      res.end(JSON.stringify({ hello: "world" }));
    } else if (req.url === "/updateUser") {
      try {
        const body = JSON.parse(rawBody);
        const user = UserSchema.parse(body); // Validates + deserializes date
        user.lastUpdate.setMonth(user.lastUpdate.getMonth() + 1);
        const resBody = JSON.stringify(user);
        reply(res, resBody, 200);
      } catch (err) {
        const errorBody = JSON.stringify({
          error:
            err.name === "ZodError" ? "Validation failed" : "Invalid input",
        });
        reply(res, errorBody, 400);
      }
    } else {
      const errorBody = JSON.stringify({ error: "route not found" });
      reply(res, errorBody, 404);
    }
  });
});

server.listen(3000);
