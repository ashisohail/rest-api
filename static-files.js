"use strict"; // Defines that JavaScript code should be executed in "strict mode".

const express = require("express"),
  path = require("path");
const app = express();
const PORT = 3000;

// Make the images directory a publicly accessible asset
app.use("/", express.static("public"));

//localhost:3000/kids-shoe.jpg

app.get("/", (req, res, next) => {
  res.send("Home page");
});

app.get("/greet", (req, res, next) => {
  const name = req.query;
  res.send(name);
  next();
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
