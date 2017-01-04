'use strict'

var fs = require('fs'); //do I have to have this here???
var path = require('path'); 
var dataPath = path.join(__dirname, 'data.json');
 

//step 6
function load_from_file() {
	fs.readFile(dataPath, 'utf8', function(err, dataJSON){
		if (err) {
			console.error(err.stack);
			return res.sendStatus(500);
		}

		var myData = JSON.parse(dataJSON);
		res.send(myData);
	});
} 

//step 7
function get_all_books() {
	
}


module.exports = {
	load_from_file: load_from_file;
}