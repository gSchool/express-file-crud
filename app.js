const express = require('express');
const app = express();
const port = 3000;

const data_store = require('./data_store');

const bodyParser = require('body-parser');


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

var jsonParser = bodyParser.json()

// POST api/books
app.post('/api/books', jsonParser, (req, res) => {
  if (!req.body) return res.sendStatus(400)
  let body = req.body;

  let new_book = {
    id: "",
    author: "",
    title: ""
  }

  Object.assign(new_book, body);
  data_store.add_book(new_book);
  res.send(new_book);
})

// PUT api/books/:id
app.put('/api/books/:id', jsonParser, (req, res) => {
  if (!req.body) return res.sendStatus(404);
  let body = req.body;
  let id = Number(req.params.id);
  // data_store.update_book(id, body);
  let updated_book = data_store.update_book(id, body);
  res.send(updated_book);
})
