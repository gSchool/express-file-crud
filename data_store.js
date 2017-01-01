"use strict";

const fs = require('fs');
let dataArray;

module.exports = {  //This is exporting a function (also could do module.exports.load_from_file or exports.load_from_file  )

 load_from_file: () => {  //key is function name, rest is the function. This way you can call function by doing: something.function();
    fs.readFile('db/data.json', 'utf8', (err, file_contents) => {  // readFile(file,[options], callback) (callback = (err, data)) Reads contents of file. utf8 to make it readable (so don't have to stringify)
      if (err) {
        console.log(err);
      }
      dataArray = file_contents; // assigning file contents to global variable
    });
  },

  get_all_books: () => {
    return dataArray;  //probably always need to return something, otherwise theres nothing to access in other file
  },

  get_book_by_id: (id) => {
    for (var i = 0; i < dataArray.length; i++) {
       if (dataArray[i].id === id) {
         return dataArray[i].title;
       }
    }
         return "undefined";
  },

  write_to_file: (dataArray) => {  //fs.writeFile(filePath, data[, options], callback)
    fs.writeFile('.db/data.json', 'utf8', dataArray, (err) => {
      if (err) {
        throw err;
      } else {
        console.log(`${file} written successfully`);
      }
    });
  }

};

console.log("working");

// Copied from repl-check
// function get_book_by_id(id) {
//   for (var i = 0; i < dataArray.length; i++) {
//      if (dataArray[i].id === id) {
//        return dataArray[i].title;
//      }
//   }
//        return "undefined";
//
//   }
