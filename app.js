// Dependencies
const express = require("express");

// Configuration
const app = express();

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to the Express Minerals App!!");
});

app.get("/rocks", (req, res) => {
  res.send(rocks);
});

// Export
module.exports = app;
