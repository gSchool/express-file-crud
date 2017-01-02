const fs = require('fs');

let data_mem;

module.exports = {
  load_from_file: function() {
    fs.readFile('./db/data.json', 'utf8', function(err, data) {
      if(err) {
        console.log('Hey yo!')
        return err;
      }
      data_mem = data;
      console.log(data_mem);
    })
  },
  get_all_books: () => {
    return data_mem;
  },
  get_book_by_id: (id) => {
    let check = 0;
    data.mem.forEach( (book_id) => {
      if(book_id.id === id) {
        check = 1
      }
      else {
        return undefined;
      }
    })
  }

}
