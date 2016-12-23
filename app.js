const express = require('express');
const app = express();
const port = 3000;

const data_store = require('./data_store');

data_store.load_from_file();

// listener
app.listen(port, function(){
  console.log("Listening on port 3000. Go to http://localhost:3000/");
});

// GET /api/books
app.get('/api/books', (req, res) => {
  let books = data_store.get_all_books();
  res.send(books);
})

// GET /api/books/:id
app.get('/api/books/:id', (req, res) => {
  let id = Number(req.params.id);
  let book_sel = data_store.get_book_by_id(id);
  res.send(book_sel);
})
