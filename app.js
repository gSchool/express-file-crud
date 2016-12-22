'use strict'

const express = require('express')
const app = express()
const http = require('http')
const port = process.env.PORT || 8000

app.listen(port, function(){
  console.log(`Listening for port ${port}. Go to http://localhost:8000/`);
})
