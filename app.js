const data = require('./data_store')
const express = require('express');
const app = express();
const port = process.argv[2]||8000;
data.load_from_file();



app.listen(port, function(){
  console.log("Listen on port"+ port+". Go to http://localhost:"+port+"/");
});

let books = data.get_all_books();
console.log ('the books', books)
