const fs = require('fs')

module.exports = function load_from_file() {
  fs.readFile('./db/data.json', 'utf-8', (err, data) => {
    if(err){
      console.error("dumb dumb")
    }
    console.log(data)
  })
}
