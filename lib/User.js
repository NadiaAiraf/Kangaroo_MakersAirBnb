var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = new Schema({
      firstname:  String,
      surname:    String,
      username:   String,
      password:   String,
      email:      String
});
module.exports = User;
