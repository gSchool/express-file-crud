'use strict'

const fs = require('fs');

let data_mem;

module.exports = {
  load_from_file: (data_mem) => {
    fs.readFile('db/data.json', 'utf8', (err, file_contents) => {
      if (err) throw err;
      data_mem = file_contents;
    })
  }
}
