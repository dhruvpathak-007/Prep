// Express.js is a fast, flexible and minimalist web framework for Node.js. It’s effectively a tool that simplifies building web applications and APIs using JavaScript on the server side. Express is an open-source that is developed and maintained by the Node.js foundation.It manages everything from receiving the request and giving the Response.

// 1.setting up a basic exprees appliction

const express = require("express");

const app = express();

// 2.Seting up route

app.get("/", (req, res) => {
  res.send("Welcone Dhruv");
});

app.get("/profile", (req, res) => {
  res.send("Dhruv is good boy");
});

app.listen(3000, () => {
  console.log("Server is listening...");
});
