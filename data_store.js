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

      // Assigns LAST_ID
      for (let i = 0; i < data_mem.length; i++) {
        if (data_mem[i].id > LAST_ID) {
          LAST_ID = data_mem[i].id;
        }
      }
    })
  },

  // Gets the book object
  get_all_books: () => {
    console.log(data_mem)
    return data_mem;
  },

  // Gets book by id
  get_book_by_id: (id) => {
    let parsed = JSON.parse(data_mem)
    for (let i = 0; i < parsed.length; i++) {
      if (id === parsed[i].id && id !== 0) {
        return parsed[i].title;
      }
    }
    return "undefined";
  },

  // Writes new data to to file
  write_to_file: (data_mem) => {
    fs.writeFile('./db/data.json', data_mem, 'utf8', (err) => {
      if (err) {
        throw err;
      }
      else console.log('File written');
    })
  }

} //End of export
