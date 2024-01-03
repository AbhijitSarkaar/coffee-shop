const express = require("express");
const path = require("path");

const app = express();

app.use("/", express.static(path.resolve(__dirname, "../dist")));
app.use("/images", express.static(path.resolve(__dirname, "../assets/images")));

app.get("/", (req, res) => {
  res.sendFile("index.html");
});

module.exports = app;
