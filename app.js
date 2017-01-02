const express = require('express');
const app = express();
const data_store = require('./data_store.js');
const bodyParser = require('body-parser');

app.use(function(req, res) {
  res.send('Listening on port 4000');
})

data_store.load_from_file();

app.listen(4000, function() {
  console.log("Listening on port 4000. Go to http://localhost:4000/")
})

app.get('/api/books', (req, res) => {
  let books = data_store.get_all_books();
  res.send(books);
})
