const express = require('express');
const app = express();
const data_store = require('./data_store');

app.use(function(req, res) {
  res.send('Bubble Butt, Bubble bubble bubble butt');
})

data_store.load_from_file()

app.listen(4000, function() {
  console.log("Listening on port 4000. Go to http://localhost:4000/")
})
