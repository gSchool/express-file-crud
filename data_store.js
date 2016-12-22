const path = require('path');
const fs = require('fs');
// const body_parser = require('body-parser');
// const json_parser =body_parser.json();
let global = null;

module.exports = {
  load_from_file () {
    fs.readFile("./db/data.json", "utf-8", function(err, data) {
      if (err) {
        throw err;
      }
      global = data;
    })
  },

  get_all_books() {
    return global;
  },

  get_book_by_id(id) {
    let books = JSON.parse(global);
    let book = books.find((element) => element.id === id);
    return book;
  }
}
