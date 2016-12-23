const express = require('express');
const app = express();
const ds = require('./data_store')
const bp = require('body-parser');
const jp = bp.json();
let port = Number(process.argv[3]) || 8000;

ds.load_from_file();

app.listen(port, function(){
  console.log(`Listening on Port ${port}. Go to http://localhost:${port}`);
});
app.get('/api', (req, res)=>{
  res.send('How can we help you?');
});
app.get('/api/books', (req, res) => {
  let data = ds.get_all_books();
  let status = data ? 200 : 404;
  res.status(status).send(data);
});

app.get('/api/books/:id', jp, (req, res) => {
  let id = Number(req.params.id);
  let data = ds.get_book_by_id(id);
  let status = data ? 200 : 404;
  res.status(status).send(data);
});

app.post('/api/books', jp, (req, res) => {
  let add = ds.add_book(req.body);
  let status = add ? 200 : 400;
  res.status(status).send(add);
});

app.put('/api/books/:id', jp, (req, res) => {
  let id = Number(req.params.id);
  let update = ds.update_book(id, req.body);
  let status = update ? 200 : 404;
  res.status(status).send(update);
});

app.delete('/api/books/:id', jp, (req, res) => {
  let id = Number(req.params.id);
  let del = ds.delete_book(id);
  let status = del ? 200 : 404;
  res.status(status).send(del);
})
