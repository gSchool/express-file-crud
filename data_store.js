"use strict";

const fs = require('fs');
let dataArray;
let LAST_ID = 0;

module.exports = {  //This is exporting a function (also could do module.exports.load_from_file or exports.load_from_file  )

 load_from_file: () => {  //key is function name, rest is the function. This way you can call function by doing: something.function();
    fs.readFile('db/data.json', 'utf8', (err, file_contents) => {  // readFile(file,[options], callback) (callback = (err, data)) Reads contents of file. utf8 to make it readable (so don't have to stringify)
      if (err) {
        console.log(err);
      }
      dataArray = file_contents; // assigning file contents to global variable
//make LAST_ID equal the largest id loaded from file
//HOW DO I CHECK MY STEPS?????
      for (var i=0; i < dataArray.length; i++) {
        if (dataArray[i].id > LAST_ID) {
          LAST_ID = dataArray[i].id;
        }
      }
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

//updates local file with new info
  write_to_file: (dataArray) => {  //fs.writeFile(filePath, data[, options], callback)
    fs.writeFile('.db/data.json', 'utf8', dataArray, (err) => {
      if (err) {
        throw err;
      } else {
        console.log('Written successfully');
      }
    });
  },

//write function called add book that takes obj as parameter
  add_book: (newBook) => {
    LAST_ID = LAST_ID + 1; //gives it unique id (just add 1 to LAST_ID)
    dataArray.push(newBook); //adds it to books already in memory
    write_to_file(dataArray); //calls write_to_file to update file
    return newBook; //returns the new book (with its unique ID)
  }


};

console.log("working");
