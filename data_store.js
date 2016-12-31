const fs = require('fs');
var glob_var;

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


exports.load_from_file = load_from_file();

function load_from_file() {
    let x = fs.readFile('./db/seed.json','utf8', function read(err, data) {
      if (err) {
        throw err;
      } else {

    glob_var = data;
    console.log("This is inside the module.exports")
    console.log(glob_var);
    return glob_var;
      }
    });
    console.log("This is inside exports")
    console.log(x)
    return glob_var
}
