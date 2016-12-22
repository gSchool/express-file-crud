"use strict";

const fs = require('fs');
let dataArray;

module.exports = {
 load_from_file: () => {  //key is function name, rest is the function. Can call function by doing: something.function();
    fs.readFile('db/data.json', 'utf8', (err, file_contents)=> {  // utf8 to make it readable
      if (err) {
        console.log(err);
      }
      dataArray = file_contents; // assigning file contents to global variable
    })
  },
  get_all_books: () => {
    return dataArray;
  }
}
