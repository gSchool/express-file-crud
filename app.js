const express = require('express');
const app = express();

app.listen(5050, function(){
  console.log("Listen on port 5050. Go to http://localhost:5050/");
});
