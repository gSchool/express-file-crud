'use strict'

const fs = require('fs');

// Global variables
let data_mem;
let LAST_ID = 0;


module.exports = {

  // Loads data to global variable
  load_from_file: () => {
    fs.readFile('./db/data.json', 'utf8', function(err, data) {
      if(err) {
        return err;
      }
      data_mem = JSON.parse(data)
      // console.log(data_mem);

      // Assigns largest id
      for (let i = 0; i < data_mem.length; i++) {
        if (data_mem[i].id > LAST_ID) {
          LAST_ID = data_mem[i].id;
        }
      }
    })
  },

  // Gets the book object
  get_all_books: () => {
    return data_mem;
  },

  // Gets book by id
  get_book_by_id: (id) => {
    for (let i = 0; i < data_mem.length; i++) {
      if (id === data_mem[i].id) {
        return data_mem[i].title;
      }
    }
    return "undefined";
  },

  // Writes new data to file
  write_to_file: (data_mem) => {
    fs.writeFile('./db/data.json', data_mem, 'utf8', (err) => {
      if (err) {
        throw err;
      }
      else console.log('File written');
    })
  },

  // Adds new book
  add_book: (obj) => {
    obj.id = LAST_ID + 1;
    data_mem.push(obj);
    write_to_file();
    return obj;
  }

} //End of export
