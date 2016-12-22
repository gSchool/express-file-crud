const fs = require('fs')
let obj = null

module.exports.load_from_file = () => {
  fs.readFile('./db/data.json', 'utf-8', (err, data) => {
    if(err){
      throw err
    }
    obj = data
    console.log(obj);
  })
}
