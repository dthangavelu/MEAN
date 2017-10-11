var mongoose = require('mongoose')
var User = mongoose.model('User');
const url = require('url');  

module.exports = {	
	
	index: function(req, res) {	
		req.session.logged_in_user = "";		
		res.render("index");
	},		 

	dashboard_pg:  function(req, res) {	
		data = {
			  logged_in_user: req.session.logged_in_user,
			  errors: undefined,
		}	
		res.render("dashboard", data);
	},	
	
	logout:  function(req, res) {	
		delete req.session.logged_in_user;
		res.render("index");
	},	
	
	register: function(req, res) {  	  	  
	  let errors = {};
	  	  
	  if(req.body.first_name === ""){
		 errors.first_name = {message: "First Name field cannot be empty"};		 
	  }
	  
	  if(req.body.last_name === ""){
		 errors.last_name = {message: "Last Name field cannot be empty"};
	  }
	  
	  if(req.body.email === ""){
		 errors.email = {message: "Email field cannot be empty"};
	  }
	  
	  if(req.body.password === ""){
		 errors.password = {message: "Password field cannot be empty"};
	  }
	  
	  if(req.body.password_confirmation === ""){
		 errors.password_confirmation = {message: "Password Confirmation field cannot be empty"};
	  }
	  
	  if(req.body.birthday === ""){
		 errors.birthday = {message: "Birthday field cannot be empty"};
	  }else {
		 if(Date.parse(req.body.birthday) > Date.now()){
		 errors.future_bday = {message: "Birthday cannot be in future"};
		}
	  }
	  
	  if(req.body.password !== "" && req.body.password_confirmation !== ""){
		if(req.body.password !== req.body.password_confirmation){
			errors.password_donot_match = {message: "Passwords do not match"};
		}		
	  }
	  
	  if(errors === undefined) {	
		return res.render("index", {errors: errors} );		
	  }	
		
	  var user = new User(
		{ first_name: req.body.first_name,
		  last_name: req.body.last_name,
		  email: req.body.email,
		  password: req.body.password,		  
		  birthday: req.body.birthday }
	  );
	  // Try to save that new user to the database (this is the method that actually inserts into the db) and run a callback function with an error (if any) from the operation.
	  user.save(function(err) {
		// if there is an error console.log that something went wrong!
		if(err) {
		  console.log('something went wrong when saving user');
		  data = {
			  errors: user.errors,
		  }
		  res.render("index", data);
		} else { // else console.log that we did well and then redirect to the root route
		  console.log('successfully registered an user!');
		  req.session.logged_in_user = req.body.email;
		  console.log("req.session.logged_in_user *****************************", req.session.logged_in_user );
		 /*  data = {
			  logged_in_user: req.session.logged_in_user,
		  } */
		  //res.render("dashboard", data);
		res.redirect("/dashboard_pg");
		}
	  });
	},
	
	login: function(req, res) {	
		let user_email="";
		let errors = {};
		if(req.body.email === ""){
			errors.email = {message: "Email field cannot be empty"};
	    }
		  
		if(req.body.password === ""){
			errors.password = {message: "Password field cannot be empty"};
		}
				
		if(errors === undefined) {	
		console.log("errors**********", errors);
			return res.render("index", {errors: errors} );		
		}		  
	   
		user_email = req.body.email.toLowerCase().trim();	   
	   
	  User.findOne({email: user_email}, function(err, users) { 
		if(err){
			console.log("something went wrong in login route in user finding user");
			 res.render('index', {errors: users.errors})
		}else{			
			if(users.length === 0){
				return res.render("index", {errors: {login_failed: {message: "Email does not exist in the system"}}} );		
			}					
			if(users.validatePwd(req.body.password)){
				req.session.logged_in_user = req.body.email;
				return res.redirect("/dashboard_pg");
			}else{
				return res.render("index", {errors: {login_failed: {message: "Password do not match in the system"}}} );		
			}
			
			/* .then(function(){				
				req.session.logged_in_user = req.body.email;
				return res.redirect("/dashboard_pg");
			})
			.catch(function(){
				return res.render("index", {errors: {login_failed: {message: "Password do not match in the system"}}} );		
			});	 */		
		}
	  });	 
	},
}

