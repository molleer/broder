const express = require("express");

app = express();

app.get("/", (req, res) => {
  res.send("Hello there!");
});

app.listen(8080);
