var mongoose = require('mongoose')
var Pet = mongoose.model('Pet');

module.exports = {	
		 
	show: function(req, res) {	  
	  Pet.find({}, function(err, pets) { 
		if(err){
			console.log("something went wrong");
			 res.render('home', {errors: pets.errors})
		}else{		
			data = {
				pets: pets,
			}
			res.render("home", data);
		}
	  })
	 
	},

	create_form: function(req, res) {	  
	 res.render("add_new_pet");
	},


	info: function(req, res) {		
	 Pet.findOne({_id: req.params._id}, function(err, pets) { 
		if(err){
			console.log("something went wrong");
			 res.render('home', {errors: pets.errors})
		}else{		
			data = {
				pets: pets,
			}
			res.render("pet_info", data);
		}
	  })
	 
	},

	create: function(req, res) {  
	  // create a new Pet with the name and age corresponding to those from req.body
	  var pet = new Pet(req.body);
	  // Try to save that new pet to the database (this is the method that actually inserts into the db) and run a callback function with an error (if any) from the operation.
	  pet.save(function(err) {
		// if there is an error console.log that something went wrong!
		if(err) {
		  console.log('something went wrong');
		  data = {
			  errors: pet.errors,
		  }
		  res.render("add_new_pet", data);
		} else { // else console.log that we did well and then redirect to the root route
		  console.log('successfully added a pet!');
		  res.redirect('/');
		}
	  })
	},

	update_form: function(req, res) {		
	 Pet.findOne({_id: req.params._id}, function(err, pets) { 
		if(err){
			 console.log("something went wrong");
			 res.render('home', {errors: pets.errors})
		}else{			
			data = {
				pets: pets,
			}
			res.render("pet_edit", data);
		}
	  })
	 
	},

	update: function(req, res) {		
	 Pet.update({_id: req.params._id}, { $set: { name: req.body.name, breed: req.body.breed, age: req.body.age, size: req.body.size, color: req.body.color, gender: req.body.gender }}, function(err, pets) { 
		if(err){
			console.log("something went wrong");
			 res.render('pet_edit', {errors: pets.errors})
		}else{		
			data = {
				pets: pets,
			}
				
			res.redirect('/pets/' + req.params._id);
		}
	  })
	 
	},

	destroy: function(req, res) {		
	 Pet.remove({_id: req.params._id}, function(err, pets) { 
		if(err){
			 console.log("something went wrong");
			 res.render('home', {errors: pets.errors})
		}else{			
			res.redirect("/");
		}
	  })
	 
	},	
}

