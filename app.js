const express = require('express');
const path = require('path');
const app = express();
const mongodb = require('mongodb');

var bodyParser = require('body-parser');

var dbConn = mongodb.MongoClient.connect('mongodb://localhost:27017/userlogindb');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, 'public')));

app.post('/post-feedback', function (req, res) {
    dbConn.then(function(db) {
        // delete req.body._id; // for safety reasons
        db.collection('feedbacks').insertOne(req.body);
    });
    res.send('Data received:\n' + JSON.stringify(req.body));
});

app.get('/view-database', function(req, res) {
  dbConn.then(function(db) {
    db.collection('feedbacks').find({}).toArray().then(function(feedbacks) {
      res.status(200).json(feedbacks);
    });
  });
});

app.listen(process.env.PORT || 3000, process.env.IP || '0.0.0.0' );
