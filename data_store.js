const fs = require('fs')
var globalBooks = null;
module.exports={
   load_from_file(){
      fs.readFile('db/data.json','utf8',(err,data)=>{
        if (err) throw err;
         globalBooks = data;
      });
    },
    get_all_books(){
      return globalBooks;
    },
    get_book_by_id(id){
      let booksID = JSON.parse(globalBooks);
      let bookIf = booksID.find((item)=> item.id ===id)
      if (bookIf===""){
        return undefined
      }else{
        return bookIf
      }
      }
  }
