"use strict";

const express = require('express');
const app = express();
const port = 3000;

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(port, function() {
  console.log("example log listening on port 3000!");
}):
