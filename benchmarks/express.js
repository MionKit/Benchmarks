"use strict";

const express = require("express");
const { UserSchema, SimpleUserSchema } = require("../lib/zod-schemas");

const app = express();

// ##### MIDDLEWARE ############
// Configure body-parser with explicit options for high-concurrency scenarios
app.use(express.json({ limit: "10mb" }));

// Error handling middleware for body-parser errors
app.use((err, req, res, next) => {
  if (err.type === "entity.parse.failed") {
    return res.status(400).json({ error: "Invalid JSON" });
  }
  next(err);
});

app.disable("etag");
app.disable("x-powered-by");

// ##### ROUTES ############
app.get("/hello", function (req, res) {
  res.json({ hello: "world" });
});

app.post("/updateUser", function (req, res) {
  try {
    const user = UserSchema.parse(req.body); // Validates + deserializes dates

    // Update timestamps
    user.updatedAt = new Date();
    user.lastLoginAt = new Date();

    // Update profile modification
    user.profile.displayName = `${user.profile.firstName} ${user.profile.lastName.charAt(0)}.`;

    res.json(user);
  } catch (err) {
    if (err.name === "ZodError") {
      res.status(400).json({ error: "Validation failed", details: err.errors });
    } else {
      res.status(500).json({ error: err.message });
    }
  }
});

app.post("/updateSimpleUser", function (req, res) {
  try {
    const user = SimpleUserSchema.parse(req.body); // Validates + deserializes dates
    user.lastUpdate = new Date();
    res.json(user);
  } catch (err) {
    if (err.name === "ZodError") {
      res.status(400).json({ error: "Validation failed", details: err.errors });
    } else {
      res.status(500).json({ error: err.message });
    }
  }
});

app.listen(3000);
