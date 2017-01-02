"use strict";

const express = require('express');
const app = express();
const port = 3000;

const bodyParser = require('body-parser');

const storeMod = require('./data_store');  //This const (storeMod) is assigned to the module.exports object from data_store.js file   // Need . on the require here
//think of "require" as meaning 'require the module that is on this page (in the parenthesis).'
storeMod.load_from_file();


app.listen(port, function() {
  console.log("example log listening on port 3000! Go to http://localhost:3000/");
});

// console.log("process.argv is:" + process.argv);

// \/ \/ Routes HTTP GET requests to the specified path with the specified callback functions.
app.get('/api/books', (req, res) => { //app is express: app.get(path, callbackFunction [,optionalCallback]) //Res is response
  let bookArray = storeMod.get_all_books(); //res.send([body]) (body can be string, buffer object, or array.  Sends the http request
  res.send(bookArray);// to check: in console type: http GET localhost:3000/api/books
});

app.get('api/books/:id', (req, res) => {
  let id = Number(req.params.id);
  let getABookById = storeMod.get_book_by_id(id);
  res.send(getABookById);
  //need to add 404 error here?
});
//NEED TO EXPORT add_book function ?

app.post('api/books', bodyParser.json(), (req, res) => { //https://github.com/expressjs/body-parser#bodyparserjsonoptions
  let body = req.body; // req.body is your array of objects now (http://stackoverflow.com/questions/18087696/express-framework-app-post-and-app-get)
  res.send(storeMod.add_book(body));
});
