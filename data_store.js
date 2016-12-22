const fs = require('fs');
let global_data;
let parsley;
let LAST_ID;
module.exports = {
    load_from_file() {
        fs.readFile('./db/data.json', 'utf8', (err, data) => {
            if (err) throw err;
            global_data = JSON.parse(data);
            LAST_ID = global_data.sort((a,b) => a - b)[global_data.length - 1].id;
        })
    },
    get_all_books() {
        return JSON.stringify(global_data);
    },
    get_book_by_id(id) {
        let result = global_data.find(x => x.id === id);
        return result ? result : undefined;
    },
    add_book(object) {
      object.id = LAST_ID + 1;
      global_data.push(object);
      write_to_file();
    },
    update_book(id, object){
      let idx;
      let original = global_data.find((x, y) => {
        idx = y;
        return x.id === id;
      });
      if (original) {
        global_data[idx] = object;
        global_data[idx].id = id;
        write_to_file();
        return global_data;
      } else {
        return;
      }
    }
};
function write_to_file() {
  fs.writeFile('./db/data.json', JSON.stringify(global_data), err => {
    if (err) throw err;
  })
}
