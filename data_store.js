const fs = require('fs')
let obj

module.exports = {
  load_from_file: () => {
  fs.readFile('./db/data.json', 'utf-8', (err, data) => {
    if(err){
      throw err
    }
    obj = data
    console.log(`this shit is being loaded ${data}`);
  })
},

  get_all_books: () => {
    console.log(obj);
  }
}
