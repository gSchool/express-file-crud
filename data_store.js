const fs = require('fs');
let library;
let LAST_ID;
module.exports = {
    load_from_file() {
        fs.readFile('./db/data.json', 'utf8', (err, data) => {
            if (err) throw err;
            library = JSON.parse(data);
            LAST_ID = library.sort((a, b) => a - b)[library.length - 1].id;
        })
    },
    get_all_books() {
        return JSON.stringify(library);
    },
    get_book_by_id(id) {
        let book = library.find(x => x.id === id);
        return book ? book : undefined;
    },
    add_book(object) {
        object.id = LAST_ID + 1;
        library.push(object);
        write_to_file();
        return library[LAST_ID];
    },
    update_book(id, object) {
        let index;
        let book = library.find((x, y) => {
            index = y;
            return x.id === id;
        });
        if (book) {
            object.id = id;
            library[index] = object;
            write_to_file();
            return library[index];
        } else {
            return undefined;
        }
    },
    delete_book(id) {
        let index;
        let book = library.find((x, y) => {
            index = y;
            return x.id === id;
        });
        library.splice(index, 1);
        //Here I am assuming that you want the deletion changes to persist beyond a server reboot
        write_to_file();
        return book ? book : undefined;
    }
};

function write_to_file() {
    fs.writeFile('./db/data.json', JSON.stringify(library), err => {
        if (err) throw err;
    })
}
