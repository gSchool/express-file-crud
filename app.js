'use strict'

const express = require('express')
const app = express()
const port = process.env.PORT || 8000
const store = require('./data_store.js')

store.load_from_file()
// store.get_all_books()
// store.get_book_by_id()

app.listen(port, function(){
  console.log(`Listening for port ${port}. Go to http://localhost:8000/`);
})

app.get('/api/books', (req, res) => {
  let books = store.get_all_books()
  res.send(books)
})

app.get('/api/books/:id', (req, res) => {
  let id = Number(req.params.id)
  let book = store.get_book_by_id(id)
  console.log(book);
  res.send(book)
})
