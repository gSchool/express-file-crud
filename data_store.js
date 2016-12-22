const fs = require('fs')
var global = null;
module.exports={
 load_from_file(){
  fs.readFile('db/data.json','utf8',(err,data)=>{
    // if (err) throw err;
     global = data;
     console.log("books", global);
  });
  }
}
