const express = require('express');
const app = express();
const port = 3000;

// listener
app.listen(port, function(){
  console.log("Listening on port 3000. Go to http://localhost:3000/");
});

const data_store = require(./data_store.js);
