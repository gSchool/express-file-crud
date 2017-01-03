const express = require('express');
const app = express();
const arg1 = process.argv[2];
//determine port
const arg2 = process.argv[3] ? Number(process.argv[3]) : 8000;
const data_store = require('./data_store');

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
