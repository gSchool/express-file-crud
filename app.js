const express = require("express");
const dataStore = require('./data_store');
const app = express();
const port = process.argv[3] || 8000;
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json();

dataStore.load_from_file();

app.get('/api/books', (req, res) => {
  let data = dataStore.get_all_books();
  let code = data ? 200 : 400;
  res.status(code).send(data);
})

app.get('/api/books/:id', (req, res) => {
  let id = Number(req.params.id);
  let book = dataStore.get_book_by_id(id);
  let code = book ? 200 : 400;
  res.status(code).send(book);
})

app.post('/api/books/', jsonParser, (req, res) => {
  if (!req.body) return res.sendStatus(404);
  let newBook = {
    id: "",
    author: "",
    title: ""
  }
  Object.assign(newBook, req.body);
  let book = dataStore.add_book(newBook);
  let code = book ? 200 : 400;
  res.status(code).send(book);
})

app.put('/api/books/:id', jsonParser, (req, res) => {
  let id = Number(req.params.id);
  if (!req.body) return res.sendStatus(404);
  let book = dataStore.update_book(id, req.body);
  let code = book ? 200 : 400;
  res.status(code).send(book);
})

app.delete('/api/books/:id', jsonParser, (req, res) => {
  let id = Number(req.params.id);
  let book = dataStore.delete_book(id);
  let code = book ? 200 : 400;
  res.status(code).send(book);
})

app.listen(port, function() {
    console.log(`Listening on port: ${port}.`);
})
