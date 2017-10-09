var mongoose = require('mongoose')
var User = mongoose.model('User');

module.exports = {	
		 
	show: function(req, res) {	  
	  User.find({}, function(err, Users) { 
		if(err){
			console.log("something went wrong");			 
			 res.json(Users.errors);
		}else{					
			res.json(Users); 
		}
	  })	 
	},
	
	create: function(req, res) {  		
	  // create a new User with the name
	  var user = new User( {name: req.params.name} );
	  // Try to save that new User to the database (this is the method that actually inserts into the db) and run a callback function with an error (if any) from the operation.
	  user.save(function(err) {
		// if there is an error console.log that something went wrong!
		if(err) {
		  console.log('something went wrong');		
		  res.json( {errors: user.errors} );
		} else { // else console.log that we did well 
		  console.log('successfully added a User!');		  
		  res.json({message: "Successfully added " + req.params.name +" to the system"})
		  //res.redirect('/');
		}
	  })
	},
	
	info: function(req, res) {		
	 User.findOne({name: req.params.name}, function(err, Users) { 
		if(err){
			console.log("something went wrong");
			 res.json({errors: Users.errors})
		}else{				
			res.json(Users);
		}
	  })	 
	},

	destroy: function(req, res) {			 
	 User.findOneAndRemove({name: req.params.name}, function(err, Users) { 
		if(err){
			 console.log("something went wrong");
			 res.json({errors: Users.errors})
		}else{			
			res.json( {message: "Successfully removed " + req.params.name + " from the system"} );
			//res.redirect('/');
		}
	  })	 
	},	
}

