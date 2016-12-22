'use strict'

const fs = require('fs');

// Global data var
let data_mem;

module.exports = {
  load_from_file: () => {
    fs.readFile('db/data.json', 'utf8', (err, file_contents) => {
      if (err) {
        console.log(err);
      }
      // assigning the file contents to my global var
      data_mem = file_contents;
    })
  },
  get_all_books: () => {
    return data_mem;
  }
}
