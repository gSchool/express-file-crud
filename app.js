const express = require('express')
const app = express()
const port = 8000
const dataStore = require('./data_store')

var store = ""
 dataStore.load_from_file((data)=>{
   store = data
   //dataStore.get_books_by_id(store,3)
 })

 //console.log(store);
app.get("/api/books",(req,res)=>{
  res.send(dataStore.get_all_books(store))
})

app.get("/api/books/:id", (req, res) => {
  let id = Number(req.params.id)
  res.send(dataStore.get_books_by_id(store,id))
  res.status(404)
})




app.listen(port, function() {
    console.log("Go to http://localhost:8000");
})
