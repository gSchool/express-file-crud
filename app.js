
const express = require('express');
const app = express();

const port = 8000;

const data_store = require('./data_store')

app.listen(port, function () {
  console.log("Hello World")

});
