const express = require('express')
const app = express()
const port = 8000
const dataStore = require('./data_store')

var store = ""
 dataStore.load_from_file((data)=>{
   store = data
 })
 console.log(store);
app.get("/",(req,res)=>{
  res.send(store)
})




app.listen(port, function() {
    console.log("Go to http://localhost:8000");
})
