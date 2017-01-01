'use strict';

const fs = require('fs');
var glob_var;
var book_list = [];




module.exports = {
  // THIS FUNCTION LOADS DATA INTO glob_var
  load_from_file: () => {
    fs.readFile('./db/data.json', 'utf8', function read(err, data) {
      if (err) {
        throw err;
      } else {
        glob_var = data;
        console.log("This is inside the module.exports function")

      }
    })
  },  //This closes load_from_file function

// THIS FUNCTION GETS ALL BOOK OBJECTS
  get_all_books: () => {
    return global_var;
  },  //This closes get_all_books function

// THIS FUNCTION GETS BOOK TITLE BY BOOK ID
  get_book_by_id: function(id) {
    for(var i=0; i<global_var.length; i++) {
      if (id === global_var[i].id) {
        return global_var[i].title;
      }
    }
      return undefined;
    }  // This closes get_books_by_id function



} //This is closing module.exports
