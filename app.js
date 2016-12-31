'use strict';

const express = require('express');
const app = express();
const data_store = require('./data_store')

const port = 8000;




var new_data = [1,2];

new_data= data_store.load_from_file();
console.log("This is in app.js")
console.log(new_data)






app.listen(port, function () {
  console.log("Hello World")
});


app.get('/api/books', function (req,res) {
   res.send(data_store.get_all_books());
});
