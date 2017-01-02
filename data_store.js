const path = require('path');
const fs = require('fs');
let global = null;
let LAST_ID;


module.exports = {
  load_from_file () {
    fs.readFile("./db/data.json", "utf-8", (err, data) => {
      if (err) {
        throw err;
      }
      global = JSON.parse(data);
      LAST_ID = Math.max.apply(Math, global.map(global => global.id));
    })
  },

  get_all_books() {
    return global;
  },

  get_book_by_id(id) {
    let book = global.find((element) => element.id === id);
    return book;
  },

  add_book(obj) {
    obj.id = LAST_ID + 1;
    global.push(obj);
    write_to_file();
    return obj;
  },

  update_book(id, obj) {
    delete obj.id;
    let book = global.find((element) => element.id === id);
    if (book) {
      global.forEach((element) => {
        if (element.id === id) {
          Object.assign(element, obj);
          book = element;
        }
      })
      write_to_file();
      return book;
    }
  }
}


function write_to_file() {
  fs.writeFile("./db/data.json", JSON.stringify(global), "utf-8", (err) => {
    if(err) {
      console.error(err);
    }
    console.log("wrote to file");
  })
}
