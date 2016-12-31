'use strict';

const fs = require('fs');
var glob_var;



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
  }


}
