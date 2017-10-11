
var mongoose = require('mongoose');
var bcrypt = require('bcrypt-as-promised');
const SALT = 10;

var UserSchema = new mongoose.Schema({
 email:  { 
	 type: String, 
	 required: [true, "Email field cannot be empty"], 
	 minlength: [2, "Minimum length is 6"],
	 unique: true,
	 trim: true,
	 lowercase: true,
	 validate: [
		 {
			 validator: function(val){
				var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
				return emailRegex.test(val); // 
			 },
			 message: "{VALUE } should be of format example@example.example and cannot be empty."
		 }
	 ],
 },
 first_name:  { 
	 type: String, 
	 required: [true, "First Name field cannot be empty"], 
	 minlength: [2, "Minimum length is 2 for First Name"],
	 trim: true,
 },
 last_name:  { 
	 type: String, 
	 required: [true, "Last Name field cannot be empty"], 
	 min: [2, "Minimum length is 2 for Last Name"],
	 trim: true,
 },
 password:  { 
	 type: String, 
	 required: [true, "Password field cannot be empty"],
	 validate: {
		validator: function(val){
			return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,32}/.test( val );
		},
		message: "Password failed validation, you must have at least 1 number, uppercase and special character"
	 }
 },
 birthday:  { 
	 type: Date, 
	 required: [true, "Birthday field cannot be empty in DB"],
	 validate: {
		 validator: function(val){			 
			return val < Date.now();
		 },
		 message: "Birthday cannot be in future in DB"
	 }
 }, 
},
{
	timestamps: true,
}
);

UserSchema.pre('save', function(next, done){ 
	let user = this;
  bcrypt.hash(user.password, SALT)
	.then(function(hashed_password){		
		user.password = hashed_password;
		next();
	})
	.catch(function(error){
		next(error);
	});	
  //done();
});


UserSchema.methods.validatePwd = function(user_pwd){	
	return bcrypt.compare(user_pwd, this.password).then(function(){								
				return true;
			})
			.catch(function(){
				return false;
			});	
}

UserSchema.methods.validatePwd = 

mongoose.model('User', UserSchema); // We are setting this Schema in our Models as 'Pet'
var User = mongoose.model('User');


