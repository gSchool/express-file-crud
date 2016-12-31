"use strict";

const express = require('express');
const app = express();
const port = 3000;

const storeMod = require('./data_store');  //This const (storeMod) is assigned to the module.exports object from data_store.js file//Need . on the require here
//think of "require" as meaning 'require the module that is on this page (in the parenthesis).'
storeMod.load_from_file();


app.listen(port, function() {
  console.log("example log listening on port 3000! Go to http://localhost:3000/");
});

// console.log("process.argv is:" + process.argv);

app.get('/api/books', (req, res) => {
  res.send(storeMod.get_all_books()); // to check: in console type: http GET localhost:3000/api/books
});

console.log(storeMod.get_all_books() ); // this doesn't work bc it needs to get the info
