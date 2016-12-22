const fs = ('fs');

module.exports = {
  load_from_file: function() {
    fs.readFile('./db/data', 'utf8', function(err, data) {
      if(err) {
        return err;
      }
      console.log(data);
    })
  }
}
