'use strict'

const fs = require('fs');

// Global data var
let data_mem;
//Global last id var
let LAST_ID;

module.exports = {
  load_from_file: () => {
    fs.readFile('db/data.json', 'utf8', (err, file_contents) => {
      if (err) {
        console.log(err);
      }
      // assigning the file contents to my global var
      data_mem = JSON.parse(file_contents);
      let max_id = -1;
      data_mem.map( (obj)=>{
        if (obj.id > max_id) {
          max_id = obj.id;
        }
      })
      LAST_ID = max_id;
    })
  },
  get_all_books: () => {
    return data_mem;
  },
  get_book_by_id: (id) => {
    // Set checker var
    let checker = 0;
    // get books object
    let books = data_mem;
    // define book sel
    let book_sel;
    // Iterate through
    books.forEach( (item) => {
      if (item.id === id) {
        checker = 1;
        book_sel = item;
      }
    });
    // If id DNE
    if (checker === 0) {
      return undefined;
    }
    // Return selected book
    return book_sel;
  },
  add_book: (obj) => {
    let id = LAST_ID + 1;
    obj.id = id;
    data_mem.push(obj);
    write_to_file();
    return obj;
  },
  update_book: (id, obj) => {
    // Set checker var
    let checker = 0;
    // get books object
    let books = data_mem;
    // define book sel
    let book_sel;
    // Iterate through
    books.forEach( (item) => {
      if (item.id === id) {
        checker = 1;
        book_sel = item;
      }
    });
    // If id DNE
    if (checker === 0) {
      return undefined;
    }

    Object.assign(book_sel, obj);
    obj.id = id;
    write_to_file();
    return book_sel;
  }
}

function write_to_file() {
  let data_memory = JSON.stringify(data_mem);
  fs.writeFile('db/data.json', data_memory, 'utf8', (err) => {
    if (err) {
      console.error(err);
    }
    console.log("Write to file complete!")
  })
}
