const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello DevSecOps");
});

app.get("/search", (req, res) => {
  res.send("You searched: " + req.query.q); // XSS by design
});

app.listen(3000, () => {
  console.log("App running on port 3000");
});
