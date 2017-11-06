
var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
 
 name:  { 
	 type: String, 
	 required: [true, "Name field cannot be empty"], 
	 minlength: [2, "Minimum length is 2 for Name"],
	 trim: true,
	 unique : true,
 },
 
});

mongoose.model('User', UserSchema); // We are setting this Schema in our Models as 'User'
var User = mongoose.model('User');


