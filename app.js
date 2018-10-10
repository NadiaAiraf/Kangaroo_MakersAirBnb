const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const MongoClient = require('mongodb').MongoClient
const path = require('path');
var db

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.resolve(__dirname, 'public')));

MongoClient.connect('mongodb://localhost:27017/', { useNewUrlParser: true }, (err, client) => {
  if (err) return console.log(err)
  db = client.db('userlogindb')
  app.listen(3000, () => {
    console.log('listening on 3000')
  })
})

app.post('/register', (req, res) => {
  db.collection('userlogindb').save(req.body, (err, result) => {
    if (err) return console.log(err)
    console.log('Saved to database')
    res.redirect('/')
  })
})
