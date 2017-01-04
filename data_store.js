const fs = require('fs')
let store = []
let LAST_ID;


module.exports.load_from_file =
    function(callback) {
        fs.readFile('db/data.json', 'utf8', (err, data) => {
            if (err) throw err;
            store = data

        })
    }

module.exports.get_all_books =
    function(store) {
        var titles = []
        for (let i = 0; i < store.length; i++) {
            titles.push(store[i].title)
        }
        //console.log(titles);
        return titles;
    }

module.exports.get_books_by_id =
    function(store, id) {
        for (let i = 0; i < store.length; i++) {
            //console.log(store[i]);
            if (store[i].id === id) {
                //console.log(store[i].title);
                return store[i].title;
            }
        }
    }

function write_to_file(obj) {
    fs.writeFile('/db/data.json',obj,(err) => {
        if (err) {
            throw err
        }
    })
}
