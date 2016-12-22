const express = require('express');
const app = express();
const http = require('http');

app.use(function(req, res) {
  res.send('Bubble Butt, Bubble bubble butt');
})


app.listen(4000, function() {
  console.log("Listening on port 4000. Go to http://localhost:4000/")
})
