const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const Spaces = require('./src/spaceSchema')
var mongoose = require('mongoose');
var MongoDB = 'mongodb://localhost:27017'
var db
app.set('view engine','ejs')
app.use(bodyParser.urlencoded({extended: true}));
app.get('/', (req,res) => res.render('index'))

mongoose.connect(MongoDB);

app.get('/spaces', function(req, res) {
  Spaces.find({}, function(err, docs) {
    res.render('spaces', {spaces: docs})
  })
})

app.get('/addspace', function(req, res) {
  res.render('addspace')
})

app.post('/register', (req, res) => {
  db.collection('userlogindb').save(req.body, (err, result) => {
    if (err) return console.log(err)
    console.log('Saved to database')
    res.redirect('/')
  })
})

app.listen(3000, () => console.log(`Listening on port 3000`))
