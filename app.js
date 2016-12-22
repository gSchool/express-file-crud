const express = require('express');
const app = express();

// listener
app.listen(3000, function(){
  console.log("Listening on port 3000. Go to http://localhost:3000/");
});
