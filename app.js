'use strict';

const express = require('express');
const app = express();
const data_store = require('./data_store')
const body_parser = require('body-parser')

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



 // POST A JSON REQUEST OF NEW BOOK
 app.post('/api/books',body_parser.json(), function(req, res) {
   //get body of request and send it to add_book
   //route should send a json response with the newly created book
   res.send(data_store.add_book(req.body))
 });  // This closes app.post new book



  // PUT A JSON REQUEST OF UPDATED BOOK
  app.put('/api/books/:id', body_parser.json(), function(req, res) {
    //get body of request and pass to update_book
    let body = data_store.update_book(req.body);
    //if no book with the given id respond with 404 not found
    if(body === undefined) {
      res.status(404).send("Not found");
    } else {
      //route should send a json response with newly update book
      res.send(body);
    }
  });  // This closes app.put update book



// DEFINE A DELETE ROUTE USING delete_book
  app.delete('/api/books/:id', body_parser.json(), function(req,res) {
    let body = data.store.delete_book(req.body);
    //if no book with given id respons with 404 not found
    if(body === undefined) {
      res.status(404).send("Not found");
    } else {
      res.send(body);
    }
  });  // This closes app.delete delete.book
