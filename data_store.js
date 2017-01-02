const fs = require('fs')


module.exports.load_from_file =
     function(callback){

       fs.readFile('db/data.json', 'utf8', (err,data) => {
        if (err) throw err;
        callback(JSON.parse(data))
      })
    }
