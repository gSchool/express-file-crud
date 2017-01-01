'use strict';

const express = require('express');
const app = express();
const data_store = require('./data_store')

const port = 8000;


var id;
var book_Array = [];

data_store.load_from_file();





// THIS FUNCTION WILL LISTEN FOR THE PORT
app.listen(port, function () {
  console.log("Hello World")
});  //This closes app.listen


// THIS FUNCTION WILL SEND THE INFO FROM get_all_books
app.get('/api/books', function (req,res) {
   res.send(data_store.get_all_books());
}); //This closes app.get


// THIS FUNCTION WILL SEND THE TITLE OF BOOK BY ID USING get_book_by_id
app.get('/api/books/:id', function(req,res) {
  let id = req.params.id
    if(id === undefined) {
      res.status(404).send("Not found")
    } else {
      let number = Number(id)
      res.send(data.store.get_books_by_id(number))
    }
  }); //This close app.get

  
