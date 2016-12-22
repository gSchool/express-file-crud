


const express = require('express');
//initialize
const app = express();
const data_store = require('./data_store');





const port = 8000
app.listen(port, function() {
  console.log('Listening on port 8000');
});