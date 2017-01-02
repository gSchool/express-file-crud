const fs = require('fs')


module.exports.load_from_file =
    function(callback) {
        fs.readFile('db/data.json', 'utf8', (err, data) => {
            if (err) throw err;
            callback(JSON.parse(data))
        })
    }

module.exports.get_all_books =
    function(store){
      var titles = []
      for (let i =0; i < store.length; i++){
        titles.push(store[i].title)
      }
      console.log(titles);
      return titles;
    }
