let loaded_data = [];
const fs = require('fs');

module.exports.load_from_file = () => {
  //loaded_data should read in contents of db/data.json
  fs.readFile('./db/data.json', 'utf8', (err, data) => {
    if (err) throw err;
    loaded_data = JSON.parse(data);
  });
};

module.exports.get_all_books = () => {
  //returns an array of all books in memory
  return loaded_data;
};

module.exports.get_book_by_id = (id) => {
  for (let i in loaded_data) {
    if (loaded_data[i].id === id) {
      //returns book matching id
      return loaded_data[i];
    }
  }
};
