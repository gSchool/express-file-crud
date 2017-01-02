const express = require("express");
const dataStore = require('./data_store');
const app = express();
const port = process.argv[3] || 8000;
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json();

dataStore.load_from_file();

app.get('/api/books', (req, res) => {
  let data = dataStore.get_all_books();
  res.send(data);
})

app.get('/api/books/:id', (req, res) => {
  let id = Number(req.params.id);
  let book = dataStore.get_book_by_id(id);
  if (book) {
    res.send(book);
  }
  else {
    res.sendStatus(404);
  }
})

app.post('/api/books/', jsonParser, (req, res) => {
  if (!req.body) return res.sendStatus(404);
  let newBook = {
    id: "",
    author: "",
    title: ""
  }
  Object.assign(newBook, req.body);
  let success = dataStore.add_book(newBook);
  res.send(success);
})

app.put('/api/books/:id', jsonParser, (req, res) => {
  let id = Number(req.params.id);
  if (!req.body) return res.sendStatus(404);
  let success = dataStore.update_book(id, req.body);
  res.send(success);
})

app.delete('/api/books/:id', jsonParser, (req, res) => {
  let id = Number(req.params.id);
  let success = dataStore.delete_book(id);
  if (success) {
    res.send(success);
  }
  else {
    res.sendStatus(404);
  }
})

app.listen(port, function() {
    console.log("Listening on port: ",port);
})
