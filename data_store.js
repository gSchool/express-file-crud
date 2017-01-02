const fs = require('fs')

module.exports =
     function load_from_file(){
      var store = fs.readFile('db/data.json', 'utf8', (err,data) => {
        if (err) throw err;
        store = data
        console.log(store);
      })
    }
