


const express = require('express');
const app = express();
const data_store = require('./data_store');
 const port = process.env.PORT || 8000
//step 6
const loadFile = function load_from_file () {
	
}





app.listen(port, function() {
  console.log('Listening on port', port);
});