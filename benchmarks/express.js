"use strict";

const express = require("express");
const { UserSchema } = require("../lib/zod-schemas");

const app = express();

// ##### MIDDLEWARE ############
app.use(express.json());
app.use((err, req, res, next) => {
  if (err.name === "ZodError") {
    res.status(400).json({ error: "Validation failed", details: err.errors });
  } else if (err.message?.includes("app error")) {
    res.status(400).json({ error: err.message });
  } else {
    res.status(500).send("Something broke!");
  }
});

app.disable("etag");
app.disable("x-powered-by");

// ##### ROUTES ############
app.get("/hello", function (req, res) {
  res.json({ hello: "world" });
});

app.post("/updateUser", function (req, res) {
  const user = UserSchema.parse(req.body); // Validates + deserializes dates

  // Update timestamps
  user.updatedAt = new Date();
  user.lastLoginAt = new Date();

  // Update profile modification
  user.profile.displayName = `${user.profile.firstName} ${user.profile.lastName.charAt(0)}.`;

  res.json(user);
});

app.listen(3000);
