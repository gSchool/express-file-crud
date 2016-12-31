'use strict';

const fs = require('fs');
var glob_var;
var book_list = [];

<<<<<<< HEAD
// function readContent(callback) {
//     fs.readFile("./Index.html", function (err, content) {
//         if (err) return callback(err)
//         callback(null, content)
//     })
// }
//
// readContent(function (err, content) {
//     console.log(content)
// })


// function to_be_called(callback) {
//   fs.readFile('./db/seed.json', 'utf8' function read(err, data) {
//     if(err) {
//       throw err;
//     } else {
//       glob_var = data;
//       console.log("This is inside function x")
//       console.log(glob_var);
//       callback();
//     }
//   })
//
// }
//
// console.log("This is BZs new way")
// console.log(glob_var);


// exports.load_from_file = to_be_called();

module.exports = {
  load_from_file: function() {
    fs.readFile('./db/seed.json','utf8', function read(err, data) {
      if (err) {
        throw err;
      } else {
          glob_var = data;
          console.log("This is inside the module.exports")
          console.log(glob_var);
          return glob_var;
        }
      })
    }
  get_all_books: function() {
    return glob_var;
  }


  }




// exports.get_all_books = get_all_books();
//
// function get_all_books() {
//   for(i of data) {
//     book_list.push(data[i].title)
//
//   }
//   return book_list;
// }
=======


module.exports = {
  load_from_file: () => {
    fs.readFile('./db/seed.json', 'utf8', function read(err, data) {
      if (err) {
        throw err;
      } else {
        glob_var = data;
        console.log("This is inside the module.exports function")

      }
    })
  },

  get_all_books: () => {
    return global_var;
  }


}
>>>>>>> get_function_branch
