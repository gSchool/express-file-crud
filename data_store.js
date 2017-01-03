const fs = require('fs')
let globalBooks = null;
let LAST_ID = null;
module.exports={
   load_from_file(){
      fs.readFile('db/data.json','utf8',(err,data)=>{
        if (err) throw err;
         globalBooks = data;
      });
      booksID = JSON.parse(globalBooks)
      LAST_ID = booksID.sort((a,b)=> a-b)[booksID.length-1].id;
      console.log(LAST_ID)
    },
    get_all_books(){
      return globalBooks;
    },
    get_book_by_id(id){
      let booksID = JSON.parse(globalBooks);
      let bookIf = booksID.find((item)=> item.id ===id)
      if (bookIf===""){
        return undefined;
      }else{
        return bookIf;
      }
      },
    write_to_file(){
      fs.writeFile('db/data.json',globalBooks,(err)=>{
        if (err) throw err;
        console.log("saved");
      });
    }
  };
