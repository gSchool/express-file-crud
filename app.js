const express = require('express')
const app = express()
const port = 8000
const dataStore = require('./data_store')


 dataStore.load_from_file();





app.get("/api/books",(req,res)=>{
  let all_books = dataStore.get_all_books();
  let code = all_books ? 200 : 400;
  res.status(code).send(all_books);
})

app.get("/api/books/:id", (req, res) => {
  let id = Number(req.params.id)
  let book = dataStore.get_books_by_id(id);
  let code = book ? 200 : 400;
  res.status(code).send(book)
})




app.listen(port, function() {
    console.log("Go to http://localhost:8000");
})
