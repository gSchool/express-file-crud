const express = require('express');
const app = express();
const port = process.argv[3] || 8000;
const data = require('./data_store.js')

app.listen(port, function(){
	console.log("Listening on port: ", port)
});


