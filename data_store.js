const fs = require('fs');
let global_data;
module.exports = {
  load_from_file(){
    fs.readFile('./db/data.json', (err, data) => {
      global_data = data;
    })
  }
};
