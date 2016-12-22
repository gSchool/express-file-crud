'use strict'

const express = require('express')
const app = express()
const port = process.env.PORT || 8000
const store = require('./data_store.js')

store.load_from_file()

app.listen(port, function(){
  console.log(`Listening for port ${port}. Go to http://localhost:8000/`);
})
