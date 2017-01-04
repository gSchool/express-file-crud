const express = require('express');
const app = express();
const data_store = require('./data_store.js');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();


data_store.load_from_file();

app.listen(4000, function() {
  console.log("Listening on port 4000. Go to http://localhost:4000/")
})

app.get('/api/books', (req, res) => {
  let books = data_store.get_all_books();
  res.send(books);
})

app.get('/api/books/:id', (req, res) => {
  let id = Number(req.params.id);
  let book = data_store.get_book_by_id(id);
  if (book) {
    res.send(book)
  }
  else {
    res.sendStatus(404);
  }
})

app.post('/api/books', jsonParser, (req, res) => {
  if(!req.body) return res.sendStatus(400);
  let newBook = {
    id: '',
    author: '',
    title: ''
  }
  Object.assign(newBook, req.body);
  data_store.add_book(newBook);
  res.send(newBook);
})
