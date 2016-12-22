const express = require('express');
const app = express();
const arg1 = process.argv[2];
//determine port
const arg2 = process.argv[3] ? Number(process.argv[3]) : 8000;
const data_store = require('./data_store');

data_store.load_from_file();

app.listen(arg2, function() {
  console.log('Listening on port ' + arg2);
});

//
