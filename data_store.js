const fs = require('fs');
let global_data;
module.exports = {
    load_from_file() {
        fs.readFile('./db/data.json', 'utf8', (err, data) => {
            if (err) throw err;
            global_data = data;
        })
    },
    get_all_books() {
        return global_data;
    },
    get_book_by_id(id) {
        let books_object = JSON.parse(global_data);
        let result = books_object.find(x => x.id === id);
        return result ? result : undefined;
    }
};
