const express = require('express');
const app = express();
const arg1 = process.argv[2];
//determine port
const arg2 = process.argv[3] ? Number(process.argv[3]) : 8000;
const data_store = require('./data_store');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

data_store.load_from_file();


app.listen(arg2, function() {
  console.log('Listening on port ' + arg2);
});

app.get('/api/books', (req, res) => {
  let books = data_store.get_all_books();
  res.setHeader('Content-Type', 'application/json');
  if (books === undefined) {
    //return 404
    res.status(404).send('Books not found.');
  } else {
    res.send(books);
  }
});

app.get('/api/books/:id', (req, res) => {
  let id = Number(req.params.id);
  let book = data_store.get_book_by_id(id);
  res.setHeader('Content-Type', 'application/json');
  if (book === undefined) {
    //return 404
    res.status(404).send('Book not found.');
  } else {
    res.send(book);
  }
});

app.post('/api/books', jsonParser, (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  if (req.body !== undefined) {
    let new_book = req.body;
    data_store.add_book(new_book);
    let stringified = JSON.stringify(new_book);
    res.send(stringified);
  } else {
    res.status(400).send('Invalid request.');
  }
});

app.put('/api/books/:id', jsonParser, (req, res) => {
  let id = Number(req.params.id);
  if (req.body !== undefined) {
    let u_book = req.body;
    let upped_book = data_store.update_book(id, u_book);
    if (upped_book) {
      let stringified = JSON.stringify(upped_book);
      res.status(200).send(stringified);
    } else {
      res.status(404).send('Book not found');
    }
  } else {
    res.status(400).send('Request invalid.');
  }
});

app.delete('/api/books/:id', (req, res) => {
  let id = Number(req.params.id);
  let deleted_book = data_store.delete_book(id);
  if (deleted_book) {
    let stringified = JSON.stringify(deleted_book);
    res.status(200).send(stringified);
  } else {
    res.status(404).send('Book not found');
  }
});
