const path = require('path');
const fs = require('fs');
let global = null;

module.exports = function load_from_file() {
  fs.readFile(function(err, data) {
    if (err) {
      throw err;
    }
    global = data;
  })
}
