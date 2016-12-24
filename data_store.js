const fs = require('fs')
let obj

module.exports = {
  load_from_file: () => {
  fs.readFile('./db/data.json', 'utf-8', (err, data) => {
    if(err){
      throw err
    }
    obj = JSON.parse(data)
    console.log(`this shit is being loaded ${data}`);
    console.log(obj.length);

  })
},

  get_all_books: () => {
    return obj
  },

  get_book_by_id: (id) => {
    for(i=0; i<obj.length; i++){
    if(obj[i].id === id){
      return obj[i]
    }
  }
  return undefined 
},

}
