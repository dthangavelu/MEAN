
// Require the Express Module
var express = require('express');
// Create an Express App
var app = express();
// Require body-parser (to receive post data from clients)
var bodyParser = require('body-parser');
// Integrate body-parser with our App
app.use(bodyParser.urlencoded({ extended: true }));
// Require path
var path = require('path');

var session = require('express-session');
app.use(session({secret: 'supersecret'}));

var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/petsDB');
mongoose.Promise = global.Promise;

// Setting our Static Folder Directory
app.use(express.static(path.join(__dirname, './static')));
// Setting our Views Folder Directory
app.set('views', path.join(__dirname, './views'));
// Setting our View Engine set to EJS
app.set('view engine', 'ejs');

var PetSchema = new mongoose.Schema({
 name:  { type: String, required: [true, "Enter value for Name"], minlength: [2, "Minimum length is 2"]},
 breed:  { type: String, required: [true, "Enter value for Breed"], minlength: [2, "Minimum length is 2"]},
 age:  { type: String, required: [true, "Enter value for Age"], min: [1, "Minimum age is 1 day"]},
 size:  { type: String, required: [true, "Enter value for Size"]},
 color:  { type: String, required: [true, "Enter value for Color"]},
 gender:  { type: String, required: [true, "Enter value for Gender"]},
 created_date: { type: Date, default: Date.now },
})
mongoose.model('Pet', PetSchema); // We are setting this Schema in our Models as 'Pet'
var Pet = mongoose.model('Pet');
 
 app.get('/', function(req, res) {	 
 //res.sendFile(path.join(__dirname + '/static/home.html')); 
  Pet.find({}, function(err, pets) { 
	if(err){
		console.log("something went wrong");
		 res.render('home', {errors: pets.errors})
	}else{		
		if(pets && pets.length > 0){
			console.log("pet found");
		}else{
			console.log("NO PET IN system");
		}
		data = {
			pets: pets,
		}
		res.render("home", data);
	}
  })
 
})

app.get('/pets/new', function(req, res) {	  
 res.render("add_new_pet");
})


app.get('/pets/:_id', function(req, res) {	
	console.log("ID FROM URL*PET INFO*****************", req.params._id);
 Pet.findOne({_id: req.params._id}, function(err, pets) { 
	if(err){
		console.log("something went wrong");
		 res.render('home', {errors: pets.errors})
	}else{		
		if(pets){
			console.log("pet found");
		}else{
			console.log("NO PET IN system");
		}
		data = {
			pets: pets,
		}
		res.render("pet_info", data);
	}
  })
 
})


app.post('/pets', function(req, res) {  
  // create a new User with the name and age corresponding to those from req.body
  var pet = new Pet(req.body);
  // Try to save that new user to the database (this is the method that actually inserts into the db) and run a callback function with an error (if any) from the operation.
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
})


app.get('/pets/edit/:_id', function(req, res) {		
 Pet.findOne({_id: req.params._id}, function(err, pets) { 
	if(err){
		 console.log("something went wrong");
		 res.render('home', {errors: pets.errors})
	}else{		
		if(pets){
			console.log("pet found");
		}else{
			console.log("NO PET IN system");
		}
		data = {
			pets: pets,
		}
		res.render("pet_edit", data);
	}
  })
 
})

app.post('/pets/:_id', function(req, res) {	
	console.log("ID FROM URL**update post****************", req.params._id);
	console.log("re body in update*******************", req.body);
 Pet.update({_id: req.params._id}, { $set: { name: req.body.name, breed: req.body.breed, age: req.body.age, size: req.body.size, color: req.body.color, gender: req.body.gender }}, function(err, pets) { 
	if(err){
		console.log("something went wrong");
		 res.render('pet_edit', {errors: pets.errors})
	}else{		
		if(pets){
			console.log("pet found");
		}else{
			console.log("NO PET IN system");
		}
		data = {
			pets: pets,
		}
		//res.render("pet_info", data);
				
		res.redirect('/pets/' + req.params._id);
	}
  })
 
})

app.get('/pets/destroy/:_id', function(req, res) {		
 Pet.remove({_id: req.params._id}, function(err, pets) { 
	if(err){
		 console.log("something went wrong");
		 res.render('home', {errors: pets.errors})
	}else{			
		res.redirect("/");
	}
  })
 
})


/* 
app.post('/add_quote', function(req, res) {
  console.log("POST DATA", req.body);
  // create a new User with the name and age corresponding to those from req.body
  var user = new User({name: req.body.name, quote: req.body.quote});
  // Try to save that new user to the database (this is the method that actually inserts into the db) and run a callback function with an error (if any) from the operation.
  user.save(function(err) {
    // if there is an error console.log that something went wrong!
    if(err) {
      console.log('something went wrong');
	  data = {
		  errors: user.errors,
	  }
	  res.render("home", data);
    } else { // else console.log that we did well and then redirect to the root route
      console.log('successfully added a user!');
      res.redirect('all_quotes');
    }
  })
})

app.get('/all_quotes', function(req, res) {	  
  User.find({}, function(err, users) { 
	if(err){
		console.log("something went wrong");
	}else{
		console.log("users************************", users[0].created_date)
		for(let i=0;i<users.length;i++){
			console.log("for loop - user", users[0]);			
		}
		data = {
			users: users,
		}
		res.render("quotes", data);
	}
  })
})

 */

// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})