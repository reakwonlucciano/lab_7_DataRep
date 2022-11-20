const express = require('express') // this is new body parser included in express
const app = express()
const port = 4000
var bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json

// this included to avoid cors error
app.use(bodyParser.json())

const cors = require('cors'); // getting cors
app.use(cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// getting-started.js
const mongoose = require('mongoose'); // mongoose for database

// mongoose connection string, TO CONNECT TO THE DATABASE (lab7)
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://admin:admin@cluster0.lndddgg.mongodb.net/?retryWrites=true&w=majority');
  
  // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
}

// mongoose schema
// what type of data im going to store, into database. what the database will look like
const bookSchema = new mongoose.Schema({
  title: String,
  cover: String,
  author: String
});

// use this model which has our bookModel, so refer to this when want to
// interact with the database, allows to write data to database
const bookModel = mongoose.model('my books', bookSchema);


app.get('/', (req, res) => {
  res.send('Hello World!')
})

// api for books, get method that sends json back to the client when invoked
app.post('/api/books',(req,res)=>{
  console.log(req.body);
  
   // interact with model, writing data recieved from application to write to database(lab7)
  bookModel.create({
    title:req.body.title,
    cover:req.body.cover,
    author:req.body.author
  })
  
   // send msg back so not to duplicate because it will know it had sent
  res.send('Data Recieved');
})

app.get('/api/books', (req, res) => {

//a method that reads all data from the database and gets it to display on the react
  bookModel.find((error, data)=>{
    res.json(data);
  })
})

// a method that reads a document/movie by id from your database in your node/express
//server

// get request for localhost:4000/api/books
app.get('/api/book/:id', (req, res)=>{
  
  // requests id and logs to console
  console.log(req.params.id);

  bookModel.findById(req.params.id,(error, Data)=>{
    res.json(data);   // send msg back so not to duplicate because it will know it had sent
  })
})

// listen port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
