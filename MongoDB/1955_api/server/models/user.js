
var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
 name:  { type: String, required: [true, "Enter value for Name"], minlength: [2, "Minimum length is 2"]},
 created_date: { type: Date, default: Date.now },
});

mongoose.model('User', UserSchema); // We are setting this Schema in our Models as 'User'
var User = mongoose.model('User');