const express = require("express");
const { Long } = require("mongodb");

const app = express();

app.use((req, res, next) => {
  console.log("middleware executed");
  next();
});

app.get("/about", (req, res) => {
  res.send("Executed");
});

app.listen(3000, () => {
  console.log("server is running");
});
