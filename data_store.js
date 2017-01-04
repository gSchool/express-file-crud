const fs = require('fs')
let store;
let LAST_ID;


module.exports = {
load_from_file() {

        fs.readFile('db/data.json', 'utf8', (err, data) => {
            if (err) throw err;

            store = JSON.parse(data)
        })
    },

get_all_books() {
        return store;
    },

get_books_by_id(id) {
        for (let i = 0; i < store.length; i++) {
            //console.log(store[i]);
            if (store[i].id === id) {
                //console.log(store[i].title);
                return store[i].title;
            }
        }
    }

  }

function write_to_file() {
    fs.writeFile('/db/data.json',JSON.stringify(store), "utf8",(err) => {
        if (err) {
            throw err
        }
    })
}
