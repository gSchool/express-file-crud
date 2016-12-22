const express = require('express')
const app = express()
const port = 8000
const dataStore = require('./data_store')

app.listen(port, function() {
    console.log("Go to http://localhost:8000");
})
