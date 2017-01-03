let loaded_data = [];
let LAST_ID = null;
const fs = require('fs');

function load_from_file() {
  //loaded_data should read in contents of db/data.json
  fs.readFile('./db/data.json', 'utf8', (err, data) => {
    if (err) throw err;
    loaded_data = JSON.parse(data);
    for (let i in loaded_data) {
      if (loaded_data[i].id > LAST_ID) {
        LAST_ID = loaded_data[i].id;
      }
    }
  });
};

function get_all_books() {
  //returns an array of all books in memory
  return loaded_data;
};

function get_book_by_id(id) {
  for (let i in loaded_data) {
    if (loaded_data[i].id === id) {
      //returns book matching id
      return loaded_data[i];
    }
  }
};

function update_book(id, obj) {
  let book_to_update = get_book_by_id(id);
  if (book_to_update) {
    //get keys from update object
    for (keys in obj) {
      book_to_update[keys] = obj[keys];
    }
    //update data
    for (let i in loaded_data) {
      if (loaded_data[i].id === id) {
        loaded_data[i] = book_to_update;
      }
    }
    write_to_file();
  }
  return book_to_update;
};

function add_book(obj) {
  obj.id = ++LAST_ID;
  loaded_data.push(obj);
  write_to_file();
  return (obj);
};

function write_to_file() {
  let data_string = JSON.stringify(loaded_data);
  fs.writeFile('./db/data.json', data_string, (err) => {
    if (err) throw err;
  });
};

module.exports = {
  add_book: add_book,
  get_all_books: get_all_books,
  get_book_by_id: get_book_by_id,
  load_from_file: load_from_file,
  update_book: update_book
};
