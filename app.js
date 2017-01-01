'use strict';

const express = require('express');
const app = express();
const data_store = require('./data_store')

const port = 8000;


var id;
var book_Array = [];

data_store.load_from_file();






app.listen(port, function () {
  console.log("Hello World")
});


app.get('/api/books', function (req,res) {
   res.send(data_store.get_all_books());
});

app.get('/api/books/:id', function(req,res) {
  let id = req.params.id
    if(id === undefined) {
      res.status(404).send("Not found")
    } else {
      let number = Number(id)
      res.send(data.store.get_books_by_id(number))
    }
    }
