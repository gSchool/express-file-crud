const express = require('express');
const app = express();
const data_store = require('data_store')
app.listen(2020, function(){
  console.log('Listening on Port 2020. Go to http://localhost:2020');
});
