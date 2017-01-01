'use strict';

const fs = require('fs');
var glob_var;
var book_list = [];
var last_id =0;




module.exports = {
  // THIS FUNCTION LOADS DATA INTO glob_var
  load_from_file: () => {
    fs.readFile('./db/data.json', 'utf8', function read(err, data) {
      if (err) {
        throw err;
      } else {
        glob_var = data;
        for(let i=0; i<glob_var.length; i++) {
          if(glob_var[i].id > last_id) {
            last_id = glob_var[i].id
          }
        }
        console.log("This is inside the module.exports function")

      }
    })
  },  //This closes load_from_file function


// THIS FUNCTION GETS ALL BOOK OBJECTS
  get_all_books: () => {
    return glob_var;
  },  //This closes get_all_books function


// THIS FUNCTION GETS BOOK TITLE BY BOOK ID
  get_book_by_id: function(id) {
    for(var i=0; i<glob_var.length; i++) {
      if (id === glob_var[i].id) {
        return glob_var[i].title;
      }
    }
      return undefined;
    },  // This closes get_books_by_id function


// THIS FUNCTION ADDS A NEW BOOK TO data_store
  add_book: function(new_book) {
    last_id = last_id+1;
    //give new_book new id
    new_book.id= last_id;
    //add book with id to memory
    glob_var.push(new_book);
    //uses write_to_file to update file
    write_to_file(glob_var);
    //return book with id
    return new_book;
  }   // This closes add_book function





} //This is closing module.exports



//  SECRET FUNCTIONS....SECRET FUNCTIONS...SECRET FUNCTIONS
// THIS FUNCTION WRITES ALL global_var OBJECTS TO FILE
function write_to_file(glob_var) {
  fs.writeFile('./db/data.json', 'utf8', glob_var, function write(err,data) {
    if(err) {
      throw err;
    }
    console.log(data);
  })
} // This closes write_to_file
