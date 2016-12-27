const fs = require('fs')
let books
let LAST_ID = 0


module.exports = {
  load_from_file: () => {
  fs.readFile('./db/data.json', 'utf-8', (err, data) => {
    if(err){
      throw err
    }
    books = JSON.parse(data)
    console.log(`this shit is being loaded: ${data}`)
    books.map(function(num){
      if (num.id > LAST_ID) LAST_ID = num.id
    })
    console.log(`${LAST_ID} books in storage`);
  })
},

  get_all_books: () => {
    return books
  },

  get_book_by_id: (id) => {
    for(i=0; i<books.length; i++){
    if(books[i].id === id){
      return books[i]
    }
  }
  return undefined
},

add_book: (newBook) => {
  newBook.id = LAST_ID + 1
  books.push(newBook)
  write_to_file(JSON.stringify(books))
  return newBook
},

update_book: (id, updateBook) => {
  for (var i = 0; i < books.length; i++) {
    if(id === books[i].id){
      books[i].author = updateBook.author
      books[i].title = updateBook.title
      write_to_file(JSON.stringify(books))
      return books[i]
    }
  }
}

};

function write_to_file(obj){
  fs.writeFile('./db/data.json', obj, (err) => {
    if(err){
      throw err
    } else {
      console.log(`updated ${obj}`)
    }
  })
}
