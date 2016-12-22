const path = require('path')
const fs = require('fs')
let global = null;

module.exports = {
	load_from_file: function() {
		fs.readFile( function(err, data) {

		if(err){
			throw err;
		}
		global = data;
		
		})
	},
	
	get_all_books: function() {
		return global;
	}
}

