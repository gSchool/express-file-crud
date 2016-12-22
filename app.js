const express = require("express");
const dataStore = require('./data_store');
const app = express();
const port = process.argv[3] || 8000;

dataStore.load_from_file();
dataStore.get_all_books();

app.get('/api/books', (req, res) => {
  let data = dataStore.get_all_books();
  res.send(data);
})

app.listen(port, function() {
    console.log("Listening on port: ",port);
  })
