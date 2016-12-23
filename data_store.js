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
  },
  get_book_by_id: (id) => {
    // Set checker var
    let checker = 0;
    // get books object
    let books = JSON.parse(data_mem);
    // define book sel
    let book_sel;
    // Iterate through
    books.forEach( (item) => {
      if (item.id === id) {
        checker = 1;
        book_sel = item.title;
      }
    });
    // If id DNE
    if (checker === 0) {
      return undefined;
    }
    return book_sel;
  }
}
