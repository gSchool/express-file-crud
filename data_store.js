'use strict';

const fs = require('fs');
var glob_var;
var book_list = [];




module.exports = {
  load_from_file: () => {
    fs.readFile('./db/seed.json', 'utf8', function read(err, data) {
      if (err) {
        throw err;
      } else {
        glob_var = data;
        console.log("This is inside the module.exports function")

      }
    })
  },

  get_all_books: () => {
    return global_var;
  },

  get_book_by_id: function(id) {
    for(i=0; i<global_var.length; i++) {
      if (id = global_var[i].id) {
        return global_var[i].title;
      } else {
        return undefined;
      }
    }
  }


}
