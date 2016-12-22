const data = require('./data_store')
const express = require('express');
const bodyParse = require('body-parser');
const app = express();
const port = process.argv[2]||8000;
const jsonParse = bodyParse.json();
data.load_from_file();

app.listen(port, function(){
  console.log("Listen on port"+ port+". Go to http://localhost:"+port+"/");
});


app.get('/api/books',(req,res)=>{
let books = data.get_all_books();
res.send(books);
});

app.get('/api/books/:id', jsonParse, (req,res)=>{
  let id = Number(req.params.id);
  let bookID = data.get_book_by_id(id);
  res.send(bookID);
});
