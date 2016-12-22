const express = require("express");
const dataStore = require('./data_store');
const app = express();
const port = process.argv[3] || 8000;

app.listen(port, function() {
  console.log("Listening on port: ",port);
})
