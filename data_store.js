'use strict'

const fs = require('fs');
// Global variable
let data_mem = null;

module.exports = {

  load_from_file: () => {
    fs.readFile('./db/data.json', 'utf8', function(err, data) {
      if(err) {
        console.log('Hey yo!')
        return err;
      }
      data_mem = data
      // console.log(data_mem);
    })
  },

  get_all_books: () => {
    return data_mem;
  },

  get_book_by_id: (id) => {
    let parsed = JSON.parse(data_mem)
    for (let i = 0; i < parsed.length; i++) {
      if (id === parsed[i].id && id !== 0) {
        return parsed[i].title;
      }
    }
    return "undefined";
  },



} //End of export
