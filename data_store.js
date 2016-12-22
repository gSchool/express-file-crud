let loaded_data = [];
const fs = require('fs');

module.exports.load_from_file = () => {
  //loaded_data should read in contents of db/data.json
  fs.readFile('./db/data.json', (err, data) => {
    if (err) throw err;
    loaded_data = data;
  });
};

module.exports.get_all_books = () => {
  //returns an array of all books in memory
  return loaded_data;
};
